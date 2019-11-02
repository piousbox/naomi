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

from .AnyEventSubscription import AnyEventSubscription
from .EventSubscription import EventSubscription
from collections import (
    defaultdict,
    OrderedDict,
)


class EventEngine:
    def __init__(self):
        self.__events = defaultdict(OrderedDict)
        self.__anySubscribers = []

    def emit(self, data):
        """
        Emits an event to the subscribers, it expects a dictionary containing
        the event type and the payload, for example:

        {
            "type": "Some Event",
            "payload": {...}
        }
        """
        for subscriber in self.__anySubscribers:
            subscriber(data)

        event = data["type"]
        for subscriber in self.__events[event].values():
            subscriber(data)

    def isSubscribed(self, subscriber, event):
        if event is None:
            return subscriber in self.__anySubscribers
        return subscriber in self.__events[event]

    def isSubscribedToAnything(self, subscriber):
        if subscriber in self.__anySubscribers:
            return True
        return any(
            subscriber in subscribers
            for subscribers in self.__events.values()
        )

    def on(self, event, subscriber=None):
        if subscriber is not None:
            return self.__on(event, subscriber)

        def __decorator(subscriber):
            return self.__on(event, subscriber)

        return __decorator

    def once(self, event, subscriber):
        # TODO
        pass

    def onAny(self, subscriber):
        self.__anySubscribers.append(subscriber)
        return AnyEventSubscription(self, subscriber)

    def onceAny(self, subscriber):
        # TODO
        pass

    def unsubscribe(self, subscriber, event):
        self.__anySubscribers.remove(subscriber)

        if event is not None:
            self.__events[event].pop(subscriber)

    def __on(self, event, subscriber):
        if not callable(subscriber):
            raise Exception("Subscriber is not callable.")
        self.__events[event][subscriber] = subscriber
        return EventSubscription(self, event, subscriber)
