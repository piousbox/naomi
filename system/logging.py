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
    log_message_added,
)

import logging
from Naomi.system.event_bus import EVENT_BUS
from Naomi.system.state import STORE


def log(message, level):
    EVENT_BUS.publish(log_message_added(message, level))


def log_critical(message):
    log(message, 'CRITICAL')


def log_debug(message):
    log(message, 'DEBUG')


def log_error(message):
    log(message, 'ERROR')


def log_info(message):
    log(message, 'INFO')


def log_warning(message):
    log(message, 'WARNING')


def plugin_loaded():
    def print_log_message(event):
        message = event['payload']['message']
        level = event['payload']['level']

        message_level = getattr(logging, level)
        current_level = getattr(logging, STORE['settings']['log_level'])

        if message_level >= current_level:
            print('[Naomi][%s]: %s' % (level, message))

    # Print log messages sent to the event bus.
    EVENT_BUS.subscribe(
        type=LOG_MESSAGE_ADDED,
        callback=print_log_message,
    )
