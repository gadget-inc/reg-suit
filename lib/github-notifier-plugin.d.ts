import { Repository } from "tiny-commit-walker";
import { BaseEventBody } from "reg-gh-app-interface";
import { NotifierPlugin, NotifyParams, PluginCreateOptions, PluginLogger } from "reg-suit-interface";
declare type PrCommentBehavior = "default" | "once" | "new";
declare type CommitStatusBehavior = "link-only" | "report-failed";
export interface GitHubPluginOption {
    clientId?: string;
    installationId?: string;
    owner?: string;
    repository?: string;
    prComment?: boolean;
    prCommentBehavior?: PrCommentBehavior;
    setCommitStatus?: boolean;
    commitStatusBehavior?: CommitStatusBehavior;
    customEndpoint?: string;
    shortDescription?: boolean;
}
export declare class GitHubNotifierPlugin implements NotifierPlugin<GitHubPluginOption> {
    _logger: PluginLogger;
    _noEmit: boolean;
    _apiOpt: BaseEventBody;
    _prComment: boolean;
    _setCommitStatus: boolean;
    _prCommentBehavior: PrCommentBehavior;
    _commitStatusBehavior: CommitStatusBehavior;
    _shortDescription: boolean;
    _apiPrefix: string;
    _repo: Repository;
    _decodeClientId(clientId: string): {
        repository: string;
        installationId: string;
        owner: string;
    };
    init(config: PluginCreateOptions<GitHubPluginOption>): void;
    notify(params: NotifyParams): Promise<any>;
}
export {};
