import { SchemaNodeDataType } from '../models';
import type { Expression } from '../models/Expression';
import { ExpressionCategory } from '../models/Expression';

export const expressionMock: Expression[] = [
  {
    inputs: [],
    allowCustom: false,
    name: 'Maximum',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'max',
    xsltExpression: 'max({0})',
    isSequenceInputSupported: true,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Minimum',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'min',
    xsltExpression: 'min({0})',
    isSequenceInputSupported: true,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Average',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'avg',
    xsltExpression: 'avg({0})',
    isSequenceInputSupported: true,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Count',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'count',
    xsltExpression: 'count({0})',
    isSequenceInputSupported: true,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Sum',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'sum',
    xsltExpression: 'sum({0})',
    isSequenceInputSupported: true,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Join',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'string-join',
    xsltExpression: 'string-join({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'CurrentDate',
    numberOfInputs: 0,
    type: 'TransformationFunction',
    userExpression: 'current-date',
    xsltExpression: 'current-date()',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'CurrentDateTime',
    numberOfInputs: 0,
    type: 'TransformationFunction',
    userExpression: 'current-dateTime',
    xsltExpression: 'current-dateTime()',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'CurrentTime',
    numberOfInputs: 0,
    type: 'TransformationFunction',
    userExpression: 'current-time',
    xsltExpression: 'current-time()',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'AddDays',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'add-days',
    xsltExpression: "xs:dateTime({0}) + xs:dayTimeDuration(concat(dm:if_then_else(number({1}) >= 0, '', '-'), 'P', string({1}),'D'))",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsNull',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'is-null',
    xsltExpression: "local-name({0}) = 'null'",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsNil',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'is-nil',
    xsltExpression: "{0}/@xsi:nil = 'true'",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsNumber',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'is-number',
    xsltExpression: '{0} castable as xs:decimal',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsString',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'is-string',
    xsltExpression: 'string-length({0}) != 0',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsDate',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'is-date',
    xsltExpression: '{0} castable as xs:date',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsEqual',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'is-equal',
    xsltExpression: '=',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsNotEqual',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'not-equal',
    xsltExpression: '!=',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsGreater',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'is-greater-than',
    xsltExpression: '>',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsGreaterOrEqual',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'is-greater-than-equal',
    xsltExpression: '>=',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsLess',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'is-less-than',
    xsltExpression: '<',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IsLessOrEqual',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'is-less-than-equal',
    xsltExpression: '<=',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Exists',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'exists',
    xsltExpression: 'exists({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Logical,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Not',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'not',
    xsltExpression: 'not({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Logical,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'And',
    numberOfInputs: -1,
    type: 'TransformationFunction',
    userExpression: 'and',
    xsltExpression: 'and',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Logical,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Or',
    numberOfInputs: -1,
    type: 'TransformationFunction',
    userExpression: 'or',
    xsltExpression: 'or',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Absolute',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'abs',
    xsltExpression: 'abs({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Round',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'round',
    xsltExpression: 'round({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Floor',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'floor',
    xsltExpression: 'floor({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Ceiling',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'ceiling',
    xsltExpression: 'ceiling({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'SquareRoot',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'sqrt',
    xsltExpression: 'sqrt({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Exponential',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'exp',
    xsltExpression: 'exp({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ExponentialBase10',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'exp10',
    xsltExpression: 'exp10({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Log',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'log',
    xsltExpression: 'log({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'LogBase10',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'log10',
    xsltExpression: 'log10({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Sine',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'sin',
    xsltExpression: 'sin({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Cosine',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'cos',
    xsltExpression: 'cos({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Tangent',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'tan',
    xsltExpression: 'tan({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ArcTangent',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'atan',
    xsltExpression: 'atan({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Power',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'pow',
    xsltExpression: 'pow({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Add',
    numberOfInputs: -1,
    type: 'TransformationFunction',
    userExpression: 'add',
    xsltExpression: '+',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Subtract',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'subtract',
    xsltExpression: '-',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Collection,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Multiply',
    numberOfInputs: -1,
    type: 'TransformationFunction',
    userExpression: 'multiply',
    xsltExpression: '*',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Divide',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'divide',
    xsltExpression: 'div',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Mod',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'modulo',
    xsltExpression: 'mod',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Math,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Idiv',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'integer-divide',
    xsltExpression: 'idiv',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: true,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Concat',
    numberOfInputs: -1,
    type: 'TransformationFunction',
    userExpression: 'concat',
    xsltExpression: 'concat({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.String,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToLower',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'lower-case',
    xsltExpression: 'lower-case({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToUpper',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'upper-case',
    xsltExpression: 'upper-case({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'StringLength',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'string-length',
    xsltExpression: 'string-length({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Contains',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'contains',
    xsltExpression: 'contains({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'SubString',
    numberOfInputs: 3,
    type: 'TransformationFunction',
    userExpression: 'substring',
    xsltExpression: 'substring({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'SubStringBefore',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'substring-before',
    xsltExpression: 'substring-before({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'SubStringAfter',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'substring-after',
    xsltExpression: 'substring-after({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'StartsWith',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'starts-with',
    xsltExpression: 'starts-with({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'EndsWith',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'ends-with',
    xsltExpression: 'ends-with({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Replace',
    numberOfInputs: 3,
    type: 'TransformationFunction',
    userExpression: 'replace',
    xsltExpression: 'replace({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Trim',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'trim',
    xsltExpression: "replace({0}, '(^\\s+|\\s+$)', '')",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.String,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'TrimLeft',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'trim-left',
    xsltExpression: "replace({0}, '^\\s+', '')",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.String,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'TrimRight',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'trim-right',
    xsltExpression: "replace({0}, '\\s+$', '')",
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'StringToCodepoints',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'string-to-codepoints',
    xsltExpression: 'string-to-codepoints({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'CodepointsToString',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'codepoints-to-string',
    xsltExpression: 'codepoints-to-string({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Error',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'error',
    xsltExpression: 'error({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'MassCopy',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'copy-of',
    xsltExpression: 'copy-of',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'IfElse',
    numberOfInputs: 3,
    type: 'TransformationFunction',
    userExpression: 'if-then-else',
    xsltExpression: 'if_then_else({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Logical,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToDate',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'date',
    xsltExpression: 'date({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.DateTime,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToNumber',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'number',
    xsltExpression: 'number({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToString',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'string',
    xsltExpression: 'string({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ToInt',
    numberOfInputs: 1,
    type: 'TransformationFunction',
    userExpression: 'int',
    xsltExpression: 'int({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'FormatNumber',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'format-number',
    xsltExpression: 'format-number({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'FormatDateTime',
    numberOfInputs: 2,
    type: 'TransformationFunction',
    userExpression: 'format-datetime',
    xsltExpression: 'format-datetime({0})',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'ForEach',
    numberOfInputs: 1,
    type: 'TransformationControlFunction',
    userExpression: '$for',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
  {
    inputs: [],
    allowCustom: false,
    name: 'Condition',
    numberOfInputs: 1,
    type: 'TransformationControlFunction',
    userExpression: '$if',
    isSequenceInputSupported: false,
    isXsltOperatorExpression: false,
    expressionCategory: ExpressionCategory.Utility,
    iconFileName: '',
    outputType: SchemaNodeDataType.ComplexType,
    detailedDescription: 'Description of the expression',
    tooltip: 'Detailed description for the tooltip',
  },
];
