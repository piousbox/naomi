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

from .parser import parse
from .ParsingError import ParsingError
from Naomi.system import log_error
from ruamel.yaml.constructor import DuplicateKeyError

def compile_syntax(settings):
    try:
        syntax = parse(settings)


        # print(syntax.resources)
        # TODO: Save to a file.
    except ParsingError as error:
        log_error(str(error))
    except DuplicateKeyError as error:
        lc = error.problem_mark
        log_error('(%i, %i) Duplicated key.' % (
            lc.line + 1,
            lc.column + 1,
        ))
