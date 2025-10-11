// app/modules/video-qoe/integrations/MuxIntegration.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = metroImportDefault;
    var3 = exports;
    var5 = dependencyMap;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var5[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot0 = var4;
    var4 = 1;
    var4 = var5[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot1 = var4;
    var2 = function() {
        var5 = _closure1_slot1;
        var4 = function MuxIntegration() {
            var4 = _closure1_slot0;
            var3 = _closure2_slot0;
            var1 = undefined;
            var2 = this;
            var2 = var4.bind(var1)(var2, var3);
            return var1;
        };
        var _closure2_slot0 = var4;
        var1 = {};
        var3 = 'mapDiscordToMuxMetadata';
        var1['key'] = var3;
        var3 = function value(arg1, arg2) {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = arg1;
                var5 = this;
                var1 = {'env_key': '1qd16mdmdjasipqg3irobln4u', 'session_id': null, 'player_name': 'discord', 'player_version': '1.0.0'};
                var2 = arg2;
                var1['session_id'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.contentId;
                var1['video_id'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.title;
                var1['video_title'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.durationMs;
                var4 = null;
                if(!(var4 == var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var6 = var3.contentMetadata;
                var7 = var6.durationSec;
                var6 = 1000;
                var2 = var6 * var7;
case 2:
                var1['video_duration'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.contentType;
                var1['video_content_type'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.questId;
                var1['video_series'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.gameId;
                var1['video_producer'] = var2;
                var2 = var3.contentMetadata;
                var6 = var2.gameName;
                var7 = var4 != var6;
                var2 = 'Discord';
                if(!var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                var2 = var6;
case 4:
                var1['video_brand'] = var2;
                var2 = 'Cloudflare';
                var1['video_cdn'] = var2;
                var2 = var3.contentMetadata;
                var2 = var2.videoStreamType;
                var1['video_stream_type'] = var2;
                var2 = var5.getBuildChannel;
                var2 = var2.bind(var5)();
                var1['view_client_application_name'] = var2;
                var2 = var5.getAppVersion;
                var2 = var2.bind(var5)();
                var1['view_client_application_version'] = var2;
                var6 = var3.userContext;
                var7 = var4 == var6;
                var5 = undefined;
                if(var7) { _fun0001_ip = 6; continue _fun0001 }
case 7:
                var5 = var6.userId;
case 6:
                var1['viewer_user_id'] = var5;
                var3 = var3.userContext;
                var4 = var4 == var3;
                var2 = undefined;
                if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 9:
                var2 = var3.userTier;
case 8:
                var1['viewer_plan'] = var2;
                return var1;
            }
        };
        var1['value'] = var3;
        var3 = new Array(3);
        var3[0] = var1;
        var1 = {};
        var6 = 'getAppVersion';
        var1['key'] = var6;
        var6 = function value() {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var1 = '4757';
                return var1;
case 10:
                CatchBlockStart(arg_register=0);
                var1 = 'unknown';
                return var1;
            }
        };
        var1['value'] = var6;
        var3[1] = var1;
        var1 = {};
        var6 = 'getBuildChannel';
        var1['key'] = var6;
        var2 = function value() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                var2 = undefined;
                var4 = undefined;
case 11: // try_start_0
                var1 = global;
                var1 = var1.window;
                var5 = var1.GLOBAL_ENV;
                var4 = var5;
                var1 = null;
                var5 = var1 == var5;
                var3 = undefined;
                if(var5) { _fun0003_ip = 12; continue _fun0003 }
case 13:
                var3 = var4.RELEASE_CHANNEL;
case 12:
                var2 = var3;
                var3 = var1 != var3;
                var1 = 'stable';
                if(!var3) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                var1 = var2;
case 14: // try_end0
                return var1;
case 16: // catch_target0
                CatchBlockStart(arg_register=0);
                var1 = 'stable';
                return var1;
            }
        };
        var1['value'] = var2;
        var3[2] = var1;
        var2 = undefined;
        var1 = null;
        var1 = var5.bind(var2)(var4, var1, var3);
        return var1;
    };
    var2 = var2.bind(var1)();
    var4 = 2;
    var5 = var5[var4];
    var4 = require;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/video-qoe/integrations/MuxIntegration.tsx';
    var4 = var5.bind(var6)(var4);
    var3['MuxIntegration'] = var2;
    return var1;
})();