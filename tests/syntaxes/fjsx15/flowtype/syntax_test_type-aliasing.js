// SYNTAX TEST "Packages/Naomi/syntaxes/naomi.fjsx15.sublime-syntax"

// Licensed under the Apache License, Version 2.0 (the “License”); you may not
// use this file except in compliance with the License. You may obtain a copy of
// the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an “AS IS” BASIS, WITHOUT
// WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
// License for the specific language governing permissions and limitations under
// the License.

   type Alias = SomeType;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^^^^^^^^ entity.name.type.flowtype
//                      ^ keyword.operator.other.terminator.js.fjsx15
   type Alias = SomeType[];
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^^^^^^^^ entity.name.type.flowtype
//                      ^ punctuation.delimiter.array.begin.flowtype
//                       ^ punctuation.delimiter.array.end.flowtype
//                        ^ keyword.operator.other.terminator.js.fjsx15
   type Alias = SomeType<number>;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^^^^^^^^ entity.name.type.flowtype
//                      ^ punctuation.delimiter.template.arguments.begin.flowtype
//                       ^^^^^^ support.flowtype
//                       ^^^^^^ entity.name.type.flowtype
//                             ^ punctuation.delimiter.template.arguments.end.flowtype
//                              ^ keyword.operator.other.terminator.js.fjsx15
   type Alias = SomeType<number[]>;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^^^^^^^^ entity.name.type.flowtype
//                      ^ punctuation.delimiter.template.arguments.begin.flowtype
//                       ^^^^^^ support.flowtype
//                       ^^^^^^ entity.name.type.flowtype
//                             ^ punctuation.delimiter.array.begin.flowtype
//                              ^ punctuation.delimiter.array.end.flowtype
//                               ^ punctuation.delimiter.template.arguments.end.flowtype
//                                ^ keyword.operator.other.terminator.js.fjsx15
   type Alias = (param:number) => number;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^ punctuation.delimiter.function.parameters.begin.flowtype
//               ^^^^^ entity.name.variable.js.fjsx15
//                    ^ keyword.operator.other.association.flowtype
//                     ^^^^^^ support.flowtype
//                     ^^^^^^ entity.name.type.flowtype
//                           ^ punctuation.delimiter.function.parameters.end.flowtype
//                             ^^ punctuation.delimiter.function.result.flowtype
//                                ^^^^^^ support.flowtype
//                                ^^^^^^ entity.name.type.flowtype
//                                      ^ keyword.operator.other.terminator.js.fjsx15
   type Alias = (param:number, param:string) => number;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//            ^ keyword.operator.other.assignment.flowtype
//              ^ punctuation.delimiter.function.parameters.begin.flowtype
//               ^^^^^ entity.name.variable.js.fjsx15
//                    ^ keyword.operator.other.association.flowtype
//                     ^^^^^^ support.flowtype
//                     ^^^^^^ entity.name.type.flowtype
//                           ^ punctuation.delimiter.function.parameters.flowtype
//                             ^^^^^ entity.name.variable.js.fjsx15
//                                  ^ keyword.operator.other.association.flowtype
//                                   ^^^^^^ support.flowtype
//                                   ^^^^^^ entity.name.type.flowtype
//                                         ^ punctuation.delimiter.function.parameters.end.flowtype
//                                           ^^ punctuation.delimiter.function.result.flowtype
//                                              ^^^^^^ support.flowtype
//                                              ^^^^^^ entity.name.type.flowtype
//                                                    ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B,C> = (param:A, param:B) => C;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.flowtype
//                ^ entity.name.type.flowtype
//                 ^ punctuation.delimiter.template.arguments.end.flowtype
//                   ^ keyword.operator.other.assignment.flowtype
//                     ^ punctuation.delimiter.function.parameters.begin.flowtype
//                      ^^^^^ entity.name.variable.js.fjsx15
//                           ^ keyword.operator.other.association.flowtype
//                            ^ entity.name.type.flowtype
//                             ^ punctuation.delimiter.function.parameters.flowtype
//                               ^^^^^ entity.name.variable.js.fjsx15
//                                    ^ keyword.operator.other.association.flowtype
//                                     ^ entity.name.type.flowtype
//                                      ^ punctuation.delimiter.function.parameters.end.flowtype
//                                        ^^ punctuation.delimiter.function.result.flowtype
//                                           ^ entity.name.type.flowtype
//                                            ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B,C> = (param:A|B, param:B) => C|B;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.flowtype
//                ^ entity.name.type.flowtype
//                 ^ punctuation.delimiter.template.arguments.end.flowtype
//                   ^ keyword.operator.other.assignment.flowtype
//                     ^ punctuation.delimiter.function.parameters.begin.flowtype
//                      ^^^^^ entity.name.variable.js.fjsx15
//                           ^ keyword.operator.other.association.flowtype
//                            ^ entity.name.type.flowtype
//                             ^ keyword.operator.other.union.flowtype
//                              ^ entity.name.type.flowtype
//                               ^ punctuation.delimiter.function.parameters.flowtype
//                                 ^^^^^ entity.name.variable.js.fjsx15
//                                      ^ keyword.operator.other.association.flowtype
//                                       ^ entity.name.type.flowtype
//                                        ^ punctuation.delimiter.function.parameters.end.flowtype
//                                          ^^ punctuation.delimiter.function.result.flowtype
//                                             ^ entity.name.type.flowtype
//                                              ^ keyword.operator.other.union.flowtype
//                                               ^ entity.name.type.flowtype
//                                                ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B,C> = (param:?(A|B), param:?B) => ?C;
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.flowtype
//                ^ entity.name.type.flowtype
//                 ^ punctuation.delimiter.template.arguments.end.flowtype
//                   ^ keyword.operator.other.assignment.flowtype
//                     ^ punctuation.delimiter.function.parameters.begin.flowtype
//                      ^^^^^ entity.name.variable.js.fjsx15
//                           ^ keyword.operator.other.association.flowtype
//                            ^ keyword.operator.other.nullable.flowtype
//                             ^ punctuation.delimiter.nullable.begin.flowtype
//                              ^ entity.name.type.flowtype
//                               ^ keyword.operator.other.union.flowtype
//                                ^ entity.name.type.flowtype
//                                 ^ punctuation.delimiter.nullable.end.flowtype
//                                  ^ punctuation.delimiter.function.parameters.flowtype
//                                    ^^^^^ entity.name.variable.js.fjsx15
//                                         ^ keyword.operator.other.association.flowtype
//                                          ^ keyword.operator.other.nullable.flowtype
//                                           ^ entity.name.type.flowtype
//                                            ^ punctuation.delimiter.function.parameters.end.flowtype
//                                              ^^ punctuation.delimiter.function.result.flowtype
//                                                 ^ keyword.operator.other.nullable.flowtype
//                                                  ^ entity.name.type.flowtype
//                                                   ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B> = {a:?A, b:?B};
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.end.flowtype
//                 ^ keyword.operator.other.assignment.flowtype
//                   ^ punctuation.delimiter.object.begin.flowtype
//                    ^ entity.name.variable.js.fjsx15
//                     ^ keyword.operator.other.association.flowtype
//                      ^ keyword.operator.other.nullable.flowtype
//                       ^ entity.name.type.flowtype
//                        ^ punctuation.delimiter.object.flowtype
//                          ^ entity.name.variable.js.fjsx15
//                           ^ keyword.operator.other.association.flowtype
//                            ^ keyword.operator.other.nullable.flowtype
//                             ^ entity.name.type.flowtype
//                              ^ punctuation.delimiter.object.end.flowtype
//                               ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B,C> = {a:?(A|C), b:?B};
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.flowtype
//                ^ entity.name.type.flowtype
//                 ^ punctuation.delimiter.template.arguments.end.flowtype
//                   ^ keyword.operator.other.assignment.flowtype
//                     ^ punctuation.delimiter.object.begin.flowtype
//                      ^ entity.name.variable.js.fjsx15
//                       ^ keyword.operator.other.association.flowtype
//                        ^ keyword.operator.other.nullable.flowtype
//                         ^ punctuation.delimiter.nullable.begin.flowtype
//                          ^ entity.name.type.flowtype
//                           ^ keyword.operator.other.union.flowtype
//                            ^ entity.name.type.flowtype
//                             ^ punctuation.delimiter.nullable.end.flowtype
//                              ^ punctuation.delimiter.object.flowtype
//                                ^ entity.name.variable.js.fjsx15
//                                 ^ keyword.operator.other.association.flowtype
//                                  ^ keyword.operator.other.nullable.flowtype
//                                   ^ entity.name.type.flowtype
//                                    ^ punctuation.delimiter.object.end.flowtype
//                                     ^ keyword.operator.other.terminator.js.fjsx15
   type Alias<A,B> = {a:A} & {b:B};
// ^^^^ keyword.other.type-aliasing.flowtype
//      ^^^^^ entity.name.type.flowtype
//           ^ punctuation.delimiter.template.arguments.begin.flowtype
//            ^ entity.name.type.flowtype
//             ^ punctuation.delimiter.template.arguments.flowtype
//              ^ entity.name.type.flowtype
//               ^ punctuation.delimiter.template.arguments.end.flowtype
//                 ^ keyword.operator.other.assignment.flowtype
//                   ^ punctuation.delimiter.object.begin.flowtype
//                    ^ entity.name.variable.js.fjsx15
//                     ^ keyword.operator.other.association.flowtype
//                      ^ entity.name.type.flowtype
//                       ^ punctuation.delimiter.object.end.flowtype
//                         ^ keyword.operator.other.intersection.flowtype
//                           ^ punctuation.delimiter.object.begin.flowtype
//                            ^ entity.name.variable.js.fjsx15
//                             ^ keyword.operator.other.association.flowtype
//                              ^ entity.name.type.flowtype
//                               ^ punctuation.delimiter.object.end.flowtype
//                                ^ keyword.operator.other.terminator.js.fjsx15