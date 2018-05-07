declare const _MARKER: unique symbol;
export { _MARKER as MARKER, _setBodyCreator as setBodyCreator };
declare function R_<T extends MarkedBody>(code: number, body?: T, headers?: any): ResponseObject<T>;
export default R_;
export interface R<Body> extends ResponseObject<Body> {
    body: Body;
}
export interface BaseResponseObject<T> {
    body: T;
    status: number;
    headers?: object;
}
export interface ResponseObject<T> extends BaseResponseObject<T> {
    statusCode: number;
    toJSON(): BaseResponseObject<T>;
    toString(): string;
    [_MARKER]: boolean;
}
export interface MarkedBody {
    [_MARKER]: boolean;
}
export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {
}
export declare type BodyCreator = (code: number, body?: any, headers?: object) => any;
declare const _setBodyCreator: (fn: BodyCreator) => void;
export declare type RConstructor<T> = (body?: T, headers?: object) => ResponseObject<T>;
export declare type RErrorConstructor<T> = (body?: T, headers?: object) => ErrorResponseObject<T>;
export declare const Continue: RConstructor<MarkedBody>;
export declare const SwitchingProtocols: RConstructor<MarkedBody>;
export declare const Processing: RConstructor<MarkedBody>;
export declare const OK: RConstructor<MarkedBody>;
export declare const Ok: RConstructor<MarkedBody>;
export declare const Created: RConstructor<MarkedBody>;
export declare const Accepted: RConstructor<MarkedBody>;
export declare const NonAuthoritativeInformation: RConstructor<MarkedBody>;
export declare const NoContent: RConstructor<MarkedBody>;
export declare const ResetContent: RConstructor<MarkedBody>;
export declare const PartialContent: RConstructor<MarkedBody>;
export declare const MultiStatus: RConstructor<MarkedBody>;
export declare const AlreadyReported: RConstructor<MarkedBody>;
export declare const IMUsed: RConstructor<MarkedBody>;
export declare const MultipleChoices: RConstructor<MarkedBody>;
export declare const MovedPermanently: RConstructor<MarkedBody>;
export declare const Found: RConstructor<MarkedBody>;
export declare const SeeOther: RConstructor<MarkedBody>;
export declare const NotModified: RConstructor<MarkedBody>;
export declare const UseProxy: RConstructor<MarkedBody>;
export declare const TemporaryRedirect: RConstructor<MarkedBody>;
export declare const PermanentRedirect: RConstructor<MarkedBody>;
export declare const BadRequest: RErrorConstructor<MarkedBody>;
export declare const Unauthorized: RErrorConstructor<MarkedBody>;
export declare const PaymentRequired: RErrorConstructor<MarkedBody>;
export declare const Forbidden: RErrorConstructor<MarkedBody>;
export declare const NotFound: RErrorConstructor<MarkedBody>;
export declare const MethodNotAllowed: RErrorConstructor<MarkedBody>;
export declare const NotAcceptable: RErrorConstructor<MarkedBody>;
export declare const ProxyAuthenticationRequired: RErrorConstructor<MarkedBody>;
export declare const RequestTimeout: RErrorConstructor<MarkedBody>;
export declare const Conflict: RErrorConstructor<MarkedBody>;
export declare const Gone: RErrorConstructor<MarkedBody>;
export declare const LengthRequired: RErrorConstructor<MarkedBody>;
export declare const PreconditionFailed: RErrorConstructor<MarkedBody>;
export declare const PayloadTooLarge: RErrorConstructor<MarkedBody>;
export declare const URITooLong: RErrorConstructor<MarkedBody>;
export declare const UnsupportedMediaType: RErrorConstructor<MarkedBody>;
export declare const RangeNotSatisfiable: RErrorConstructor<MarkedBody>;
export declare const ExpectationFailed: RErrorConstructor<MarkedBody>;
export declare const MisdirectedRequest: RErrorConstructor<MarkedBody>;
export declare const UnprocessableEntity: RErrorConstructor<MarkedBody>;
export declare const Locked: RErrorConstructor<MarkedBody>;
export declare const FailedDependency: RErrorConstructor<MarkedBody>;
export declare const UnorderedCollection: RErrorConstructor<MarkedBody>;
export declare const UpgradeRequired: RErrorConstructor<MarkedBody>;
export declare const PreconditionRequired: RErrorConstructor<MarkedBody>;
export declare const TooManyRequests: RErrorConstructor<MarkedBody>;
export declare const RequestHeaderFieldsTooLarge: RErrorConstructor<MarkedBody>;
export declare const UnavailableForLegalReasons: RErrorConstructor<MarkedBody>;
export declare const InternalServerError: RErrorConstructor<MarkedBody>;
export declare const NotImplemented: RErrorConstructor<MarkedBody>;
export declare const BadGateway: RErrorConstructor<MarkedBody>;
export declare const ServiceUnavailable: RErrorConstructor<MarkedBody>;
export declare const GatewayTimeout: RErrorConstructor<MarkedBody>;
export declare const HTTPVersionNotSupported: RErrorConstructor<MarkedBody>;
export declare const VariantAlsoNegotiates: RErrorConstructor<MarkedBody>;
export declare const InsufficientStorage: RErrorConstructor<MarkedBody>;
export declare const LoopDetected: RErrorConstructor<MarkedBody>;
export declare const BandwidthLimitExceeded: RErrorConstructor<MarkedBody>;
export declare const NotExtended: RErrorConstructor<MarkedBody>;
export declare const NetworkAuthenticationRequired: RErrorConstructor<MarkedBody>;
declare namespace R_ {
    const Continue: RConstructor<MarkedBody>;
    const SwitchingProtocols: RConstructor<MarkedBody>;
    const Processing: RConstructor<MarkedBody>;
    const OK: RConstructor<MarkedBody>;
    const Ok: RConstructor<MarkedBody>;
    const Created: RConstructor<MarkedBody>;
    const Accepted: RConstructor<MarkedBody>;
    const NonAuthoritativeInformation: RConstructor<MarkedBody>;
    const NoContent: RConstructor<MarkedBody>;
    const ResetContent: RConstructor<MarkedBody>;
    const PartialContent: RConstructor<MarkedBody>;
    const MultiStatus: RConstructor<MarkedBody>;
    const AlreadyReported: RConstructor<MarkedBody>;
    const IMUsed: RConstructor<MarkedBody>;
    const MultipleChoices: RConstructor<MarkedBody>;
    const MovedPermanently: RConstructor<MarkedBody>;
    const Found: RConstructor<MarkedBody>;
    const SeeOther: RConstructor<MarkedBody>;
    const NotModified: RConstructor<MarkedBody>;
    const UseProxy: RConstructor<MarkedBody>;
    const TemporaryRedirect: RConstructor<MarkedBody>;
    const PermanentRedirect: RConstructor<MarkedBody>;
    const BadRequest: RErrorConstructor<MarkedBody>;
    const Unauthorized: RErrorConstructor<MarkedBody>;
    const PaymentRequired: RErrorConstructor<MarkedBody>;
    const Forbidden: RErrorConstructor<MarkedBody>;
    const NotFound: RErrorConstructor<MarkedBody>;
    const MethodNotAllowed: RErrorConstructor<MarkedBody>;
    const NotAcceptable: RErrorConstructor<MarkedBody>;
    const ProxyAuthenticationRequired: RErrorConstructor<MarkedBody>;
    const RequestTimeout: RErrorConstructor<MarkedBody>;
    const Conflict: RErrorConstructor<MarkedBody>;
    const Gone: RErrorConstructor<MarkedBody>;
    const LengthRequired: RErrorConstructor<MarkedBody>;
    const PreconditionFailed: RErrorConstructor<MarkedBody>;
    const PayloadTooLarge: RErrorConstructor<MarkedBody>;
    const URITooLong: RErrorConstructor<MarkedBody>;
    const UnsupportedMediaType: RErrorConstructor<MarkedBody>;
    const RangeNotSatisfiable: RErrorConstructor<MarkedBody>;
    const ExpectationFailed: RErrorConstructor<MarkedBody>;
    const MisdirectedRequest: RErrorConstructor<MarkedBody>;
    const UnprocessableEntity: RErrorConstructor<MarkedBody>;
    const Locked: RErrorConstructor<MarkedBody>;
    const FailedDependency: RErrorConstructor<MarkedBody>;
    const UnorderedCollection: RErrorConstructor<MarkedBody>;
    const UpgradeRequired: RErrorConstructor<MarkedBody>;
    const PreconditionRequired: RErrorConstructor<MarkedBody>;
    const TooManyRequests: RErrorConstructor<MarkedBody>;
    const RequestHeaderFieldsTooLarge: RErrorConstructor<MarkedBody>;
    const UnavailableForLegalReasons: RErrorConstructor<MarkedBody>;
    const InternalServerError: RErrorConstructor<MarkedBody>;
    const NotImplemented: RErrorConstructor<MarkedBody>;
    const BadGateway: RErrorConstructor<MarkedBody>;
    const ServiceUnavailable: RErrorConstructor<MarkedBody>;
    const GatewayTimeout: RErrorConstructor<MarkedBody>;
    const HTTPVersionNotSupported: RErrorConstructor<MarkedBody>;
    const VariantAlsoNegotiates: RErrorConstructor<MarkedBody>;
    const InsufficientStorage: RErrorConstructor<MarkedBody>;
    const LoopDetected: RErrorConstructor<MarkedBody>;
    const BandwidthLimitExceeded: RErrorConstructor<MarkedBody>;
    const NotExtended: RErrorConstructor<MarkedBody>;
    const NetworkAuthenticationRequired: RErrorConstructor<MarkedBody>;
    const setBodyCreator: (fn: BodyCreator) => void;
    const MARKER: symbol;
}
