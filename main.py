# Licensed under the Apache License, Version 2.0 (the “License”); you may not
# use this file except in compliance with the License. You may obtain a copy of
# the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations under
# the License.

from Naomi.system.events import (
    LOG_MESSAGE_ADDED,
    settings_updated,
)
from datetime import datetime, timedelta
from Naomi.system.event_bus import EVENT_BUS
from Naomi.system.state import STORE
from sublime import load_settings
import logging


log_event_subscription = None
time_start = datetime.now()
time_end = time_start
time_diff = timedelta()


def print_log_message(event):
    global time_start, time_end, time_diff

    message = event['payload']['message']
    level = event['payload']['level']

    # Get the log level as a number to make the comparison easier.
    message_level = getattr(logging, level)
    current_level = getattr(logging, STORE['settings']['log_level'])

    # If multiple messages are sent at the same second, we need to see the
    # millisecond difference between them to enable easier profiling.
    time_end = datetime.now()
    time_diff = time_end - time_start

    if time_diff > timedelta(seconds=1):
        time_diff = timedelta()

    if message_level >= current_level:
        print('%s [Naomi:%s] +%ims: %s' % (
            datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            level,
            time_diff.microseconds / 1000,
            message,
        ))

    time_start = time_end


def plugin_loaded():
    global log_event_subscription

    if log_event_subscription is None:
        log_event_subscription = EVENT_BUS.on(
            event=LOG_MESSAGE_ADDED,
            subscriber=print_log_message,
        )

    log_event_subscription.subscribe()
    SETTINGS = load_settings('Naomi.sublime-settings')
    SETTINGS.add_on_change('naomi-settings-state', update_settings)
    update_settings()


def plugin_unloaded():
    global log_event_subscription

    if log_event_subscription is not None:
        log_event_subscription.unsubscribe()
        log_event_subscription = None

    SETTINGS = load_settings('Naomi.sublime-settings')
    SETTINGS.clear_on_change('naomi-settings-state')


def update_settings():
    SETTINGS = load_settings('Naomi.sublime-settings')
    EVENT_BUS.emit(settings_updated(SETTINGS))
