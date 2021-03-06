export interface BaseResponseObject<T> {
    readonly body: T;
    readonly status: number;
    readonly headers: Headers;
}
export interface ResponseObject<T> extends BaseResponseObject<T> {
    statusCode: number;
    toJSON(): BaseResponseObject<T>;
    toString(): string;
}
export interface ErrorResponseObject<T> extends ResponseObject<T>, Error {
}
export interface Headers {
    [header: string]: number | string | string[] | undefined;
}
declare function R(code: number): ResponseObject<void>;
declare function R<T>(code: number, body: T, headers?: Headers): ResponseObject<T>;
declare namespace R {
    function Continue(): ResponseObject<void>;
    function Continue<T>(body: T, headers?: Headers): ResponseObject<T>;
    function SwitchingProtocols(): ResponseObject<void>;
    function SwitchingProtocols<T>(body: T, headers?: Headers): ResponseObject<T>;
    function Processing(): ResponseObject<void>;
    function Processing<T>(body: T, headers?: Headers): ResponseObject<T>;
    function EarlyHints(): ResponseObject<void>;
    function EarlyHints<T>(body: T, headers?: Headers): ResponseObject<T>;
    function OK(): ResponseObject<void>;
    function OK<T>(body: T, headers?: Headers): ResponseObject<T>;
    function Created(): ResponseObject<void>;
    function Created<T>(body: T, headers?: Headers): ResponseObject<T>;
    function Accepted(): ResponseObject<void>;
    function Accepted<T>(body: T, headers?: Headers): ResponseObject<T>;
    function NonAuthoritativeInformation(): ResponseObject<void>;
    function NonAuthoritativeInformation<T>(body: T, headers?: Headers): ResponseObject<T>;
    function NoContent(): ResponseObject<void>;
    function NoContent<T>(body: T, headers?: Headers): ResponseObject<T>;
    function ResetContent(): ResponseObject<void>;
    function ResetContent<T>(body: T, headers?: Headers): ResponseObject<T>;
    function PartialContent(): ResponseObject<void>;
    function PartialContent<T>(body: T, headers?: Headers): ResponseObject<T>;
    function MultiStatus(): ResponseObject<void>;
    function MultiStatus<T>(body: T, headers?: Headers): ResponseObject<T>;
    function AlreadyReported(): ResponseObject<void>;
    function AlreadyReported<T>(body: T, headers?: Headers): ResponseObject<T>;
    function IMUsed(): ResponseObject<void>;
    function IMUsed<T>(body: T, headers?: Headers): ResponseObject<T>;
    function MultipleChoices(): ResponseObject<void>;
    function MultipleChoices<T>(body: T, headers?: Headers): ResponseObject<T>;
    function MovedPermanently(): ResponseObject<void>;
    function MovedPermanently<T>(body: T, headers?: Headers): ResponseObject<T>;
    function Found(): ResponseObject<void>;
    function Found<T>(body: T, headers?: Headers): ResponseObject<T>;
    function SeeOther(): ResponseObject<void>;
    function SeeOther<T>(body: T, headers?: Headers): ResponseObject<T>;
    function NotModified(): ResponseObject<void>;
    function NotModified<T>(body: T, headers?: Headers): ResponseObject<T>;
    function UseProxy(): ResponseObject<void>;
    function UseProxy<T>(body: T, headers?: Headers): ResponseObject<T>;
    function TemporaryRedirect(): ResponseObject<void>;
    function TemporaryRedirect<T>(body: T, headers?: Headers): ResponseObject<T>;
    function PermanentRedirect(): ResponseObject<void>;
    function PermanentRedirect<T>(body: T, headers?: Headers): ResponseObject<T>;
    function BadRequest(): ErrorResponseObject<void>;
    function BadRequest<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function Unauthorized(): ErrorResponseObject<void>;
    function Unauthorized<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function PaymentRequired(): ErrorResponseObject<void>;
    function PaymentRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function Forbidden(): ErrorResponseObject<void>;
    function Forbidden<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function NotFound(): ErrorResponseObject<void>;
    function NotFound<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function MethodNotAllowed(): ErrorResponseObject<void>;
    function MethodNotAllowed<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function NotAcceptable(): ErrorResponseObject<void>;
    function NotAcceptable<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function ProxyAuthenticationRequired(): ErrorResponseObject<void>;
    function ProxyAuthenticationRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function RequestTimeout(): ErrorResponseObject<void>;
    function RequestTimeout<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function Conflict(): ErrorResponseObject<void>;
    function Conflict<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function Gone(): ErrorResponseObject<void>;
    function Gone<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function LengthRequired(): ErrorResponseObject<void>;
    function LengthRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function PreconditionFailed(): ErrorResponseObject<void>;
    function PreconditionFailed<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function PayloadTooLarge(): ErrorResponseObject<void>;
    function PayloadTooLarge<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function URITooLong(): ErrorResponseObject<void>;
    function URITooLong<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function UnsupportedMediaType(): ErrorResponseObject<void>;
    function UnsupportedMediaType<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function RangeNotSatisfiable(): ErrorResponseObject<void>;
    function RangeNotSatisfiable<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function ExpectationFailed(): ErrorResponseObject<void>;
    function ExpectationFailed<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function MisdirectedRequest(): ErrorResponseObject<void>;
    function MisdirectedRequest<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function UnprocessableEntity(): ErrorResponseObject<void>;
    function UnprocessableEntity<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function Locked(): ErrorResponseObject<void>;
    function Locked<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function FailedDependency(): ErrorResponseObject<void>;
    function FailedDependency<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function TooEarly(): ErrorResponseObject<void>;
    function TooEarly<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function UpgradeRequired(): ErrorResponseObject<void>;
    function UpgradeRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function PreconditionRequired(): ErrorResponseObject<void>;
    function PreconditionRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function TooManyRequests(): ErrorResponseObject<void>;
    function TooManyRequests<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function RequestHeaderFieldsTooLarge(): ErrorResponseObject<void>;
    function RequestHeaderFieldsTooLarge<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function UnavailableForLegalReasons(): ErrorResponseObject<void>;
    function UnavailableForLegalReasons<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function InternalServerError(): ErrorResponseObject<void>;
    function InternalServerError<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function NotImplemented(): ErrorResponseObject<void>;
    function NotImplemented<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function BadGateway(): ErrorResponseObject<void>;
    function BadGateway<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function ServiceUnavailable(): ErrorResponseObject<void>;
    function ServiceUnavailable<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function GatewayTimeout(): ErrorResponseObject<void>;
    function GatewayTimeout<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function HTTPVersionNotSupported(): ErrorResponseObject<void>;
    function HTTPVersionNotSupported<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function VariantAlsoNegotiates(): ErrorResponseObject<void>;
    function VariantAlsoNegotiates<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function InsufficientStorage(): ErrorResponseObject<void>;
    function InsufficientStorage<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function LoopDetected(): ErrorResponseObject<void>;
    function LoopDetected<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function BandwidthLimitExceeded(): ErrorResponseObject<void>;
    function BandwidthLimitExceeded<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function NotExtended(): ErrorResponseObject<void>;
    function NotExtended<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    function NetworkAuthenticationRequired(): ErrorResponseObject<void>;
    function NetworkAuthenticationRequired<T>(body: T, headers?: Headers): ErrorResponseObject<T>;
    const Ok: typeof OK;
}
export default R;
export declare const Continue: typeof R.Continue;
export declare const SwitchingProtocols: typeof R.SwitchingProtocols;
export declare const Processing: typeof R.Processing;
export declare const EarlyHints: typeof R.EarlyHints;
export declare const OK: typeof R.OK;
export declare const Created: typeof R.Created;
export declare const Accepted: typeof R.Accepted;
export declare const NonAuthoritativeInformation: typeof R.NonAuthoritativeInformation;
export declare const NoContent: typeof R.NoContent;
export declare const ResetContent: typeof R.ResetContent;
export declare const PartialContent: typeof R.PartialContent;
export declare const MultiStatus: typeof R.MultiStatus;
export declare const AlreadyReported: typeof R.AlreadyReported;
export declare const IMUsed: typeof R.IMUsed;
export declare const MultipleChoices: typeof R.MultipleChoices;
export declare const MovedPermanently: typeof R.MovedPermanently;
export declare const Found: typeof R.Found;
export declare const SeeOther: typeof R.SeeOther;
export declare const NotModified: typeof R.NotModified;
export declare const UseProxy: typeof R.UseProxy;
export declare const TemporaryRedirect: typeof R.TemporaryRedirect;
export declare const PermanentRedirect: typeof R.PermanentRedirect;
export declare const BadRequest: typeof R.BadRequest;
export declare const Unauthorized: typeof R.Unauthorized;
export declare const PaymentRequired: typeof R.PaymentRequired;
export declare const Forbidden: typeof R.Forbidden;
export declare const NotFound: typeof R.NotFound;
export declare const MethodNotAllowed: typeof R.MethodNotAllowed;
export declare const NotAcceptable: typeof R.NotAcceptable;
export declare const ProxyAuthenticationRequired: typeof R.ProxyAuthenticationRequired;
export declare const RequestTimeout: typeof R.RequestTimeout;
export declare const Conflict: typeof R.Conflict;
export declare const Gone: typeof R.Gone;
export declare const LengthRequired: typeof R.LengthRequired;
export declare const PreconditionFailed: typeof R.PreconditionFailed;
export declare const PayloadTooLarge: typeof R.PayloadTooLarge;
export declare const URITooLong: typeof R.URITooLong;
export declare const UnsupportedMediaType: typeof R.UnsupportedMediaType;
export declare const RangeNotSatisfiable: typeof R.RangeNotSatisfiable;
export declare const ExpectationFailed: typeof R.ExpectationFailed;
export declare const MisdirectedRequest: typeof R.MisdirectedRequest;
export declare const UnprocessableEntity: typeof R.UnprocessableEntity;
export declare const Locked: typeof R.Locked;
export declare const FailedDependency: typeof R.FailedDependency;
export declare const TooEarly: typeof R.TooEarly;
export declare const UpgradeRequired: typeof R.UpgradeRequired;
export declare const PreconditionRequired: typeof R.PreconditionRequired;
export declare const TooManyRequests: typeof R.TooManyRequests;
export declare const RequestHeaderFieldsTooLarge: typeof R.RequestHeaderFieldsTooLarge;
export declare const UnavailableForLegalReasons: typeof R.UnavailableForLegalReasons;
export declare const InternalServerError: typeof R.InternalServerError;
export declare const NotImplemented: typeof R.NotImplemented;
export declare const BadGateway: typeof R.BadGateway;
export declare const ServiceUnavailable: typeof R.ServiceUnavailable;
export declare const GatewayTimeout: typeof R.GatewayTimeout;
export declare const HTTPVersionNotSupported: typeof R.HTTPVersionNotSupported;
export declare const VariantAlsoNegotiates: typeof R.VariantAlsoNegotiates;
export declare const InsufficientStorage: typeof R.InsufficientStorage;
export declare const LoopDetected: typeof R.LoopDetected;
export declare const BandwidthLimitExceeded: typeof R.BandwidthLimitExceeded;
export declare const NotExtended: typeof R.NotExtended;
export declare const NetworkAuthenticationRequired: typeof R.NetworkAuthenticationRequired;
export declare const Ok: typeof R.OK;
