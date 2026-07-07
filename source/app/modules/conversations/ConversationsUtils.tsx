// app/modules/conversations/ConversationsUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var1 = function mapConversationModeration(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.status;
        var1['status'] = var3;
        var3 = var2.status_reason;
        var1['statusReason'] = var3;
        var3 = var2.message_violation_rate;
        var1['messageViolationRate'] = var3;
        var3 = var2.flagged_message_count;
        var1['flaggedMessageCount'] = var3;
        var3 = var2.total_message_count;
        var1['totalMessageCount'] = var3;
        var3 = var2.flagged_message_ids;
        var1['flaggedMessageIds'] = var3;
        var5 = var2.flagged_message_details;
        var4 = var5.map;
        var3 = function(arg1) {
            var2 = arg1;
            var1 = {};
            var3 = var2.message_id;
            var1['messageId'] = var3;
            var3 = var2.category;
            var1['category'] = var3;
            var3 = var2.severity;
            var1['severity'] = var3;
            var3 = var2.confidence;
            var1['confidence'] = var3;
            var2 = var2.reason;
            var1['reason'] = var2;
            return var1;
        };
        var3 = var4.bind(var5)(var3);
        var1['flaggedMessageDetails'] = var3;
        var3 = var2.flagged_summary_details;
        var1['flaggedSummaryDetails'] = var3;
        var3 = var2.flagged_title;
        var1['flaggedTitle'] = var3;
        var3 = var2.flagged_summary;
        var1['flaggedSummary'] = var3;
        var3 = var2.flagged_key_points;
        var1['flaggedKeyPoints'] = var3;
        var2 = var2.failed_message_ids;
        var1['failedMessageIds'] = var2;
        return var1;
    };
    var _closure1_slot0 = var1;
    var1 = global;
    var6 = var1.Object;
    var5 = var6.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var6)(var3, var1, var4);
    var4 = dependencyMap;
    var1 = 0;
    var5 = var4[var1];
    var4 = require;
    var1 = undefined;
    var6 = var4.bind(var1)(var5);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/conversations/ConversationsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function mapConversation(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var2 = var4.summary_map;
            var3 = null;
            var5 = var3 == var2;
            var6 = undefined;
            var1 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var7 = var2.entries;
            var5 = var7.find;
            var2 = function(arg1) {
                var1 = arg1;
                var2 = var1.summary_type;
                var1 = 'TOPIC_EXTRACTION_SUMMARY';
                var1 = var1 === var2;
                return var1;
            };
            var1 = var5.bind(var7)(var2);
case 2:
            var2 = var3 != var1;
            var5 = null;
            if(!var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var1.content_json;
            var1 = function parseTopicExtractionSummary(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = arg1;
                    var5 = undefined;
case 6: // try_start_0
                    var6 = global;
                    var7 = var6.JSON;
                    var3 = var7.parse;
                    var1 = var3.bind(var7)(var1);
                    var5 = var1;
                    var7 = null;
                    var3 = var7 == var1;
                    var1 = undefined;
                    if(var3) { _fun0002_ip = 2; continue _fun0002 }
case 7:
                    var3 = var5;
                    var1 = var3.title;
case 2:
                    var3 = 'string';
                    var8 = typeof var1;
                    var1 = null;
                    if(!(var3 === var8)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var8 = var5;
                    var8 = var7 == var8;
                    var2 = undefined;
                    if(var8) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var8 = var5;
                    var2 = var8.brief_summary;
case 10:
                    var2 = typeof var2;
                    var1 = null;
                    if(!(var3 === var2)) { _fun0002_ip = 8; continue _fun0002 }
case 12:
                    var2 = {};
                    var3 = var5;
                    var7 = var3.title;
                    var2['title'] = var7;
                    var7 = var3.brief_summary;
                    var2['brief_summary'] = var7;
                    var7 = var6.Array;
                    var6 = var7.isArray;
                    var3 = var3.key_points;
                    var3 = var6.bind(var7)(var3);
                    if(var3) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                    var3 = new Array(0);
                    _fun0002_ip = 15; continue _fun0002;
case 13:
                    var7 = var5.key_points;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                            var2 = arg1;
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if(var3) { _fun0003_ip = 16; continue _fun0003 }
case 17:
                            var1 = var2.text;
case 16:
                            return var1;
                        }
                    };
                    var6 = var6.bind(var7)(var5);
                    var5 = var6.filter;
                    var4 = function(arg1) {
                        var2 = 'string';
                        var1 = arg1;
                        var1 = typeof var1;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var5.bind(var6)(var4);
case 15:
                    var2['key_points'] = var3;
                    var1 = var2;
case 8: // try_end0
                    return var1;
case 18: // catch_target0
                    CatchBlockStart(arg_register=0);
                    var1 = null;
                    return var1;
                }
            };
            var5 = var1.bind(var6)(var2);
case 4:
            var2 = var3 == var5;
            var1 = undefined;
            if(var2) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var1 = var5.title;
case 19:
            var2 = var3 == var1;
            var1 = null;
            if(var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var7 = var5.title;
            var2 = '';
            var1 = null;
            if(!(var2 !== var7)) { _fun0001_ip = 21; continue _fun0001 }
case 23:
            var2 = {};
            var7 = var4.id;
            var2['id'] = var7;
            var7 = var5.title;
            var2['title'] = var7;
            var9 = var5.brief_summary;
            var10 = var3 != var9;
            var7 = null;
            if(!var10) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var7 = var9;
case 24:
            var2['briefSummary'] = var7;
            var5 = var5.key_points;
            var2['keyPoints'] = var5;
            var5 = var4.channel_id;
            var2['channelId'] = var5;
            var5 = var4.guild_id;
            var2['guildId'] = var5;
            var5 = var4.message_ids;
            var2['messageIds'] = var5;
            var5 = var4.user_ids;
            var2['userIds'] = var5;
            var5 = var4.start_message_id;
            var2['startMessageId'] = var5;
            var5 = var4.end_message_id;
            var2['endMessageId'] = var5;
            var5 = var4.message_count;
            var2['messageCount'] = var5;
            var5 = var4.user_count;
            var2['userCount'] = var5;
            var5 = var4.keywords;
            if(!(var3 == var5)) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var5 = new Array(0);
case 26:
            var2['keywords'] = var5;
            var5 = var4.summary_map;
            var7 = var3 != var5;
            var5 = null;
            if(!var7) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var7 = {};
            var9 = var4.summary_map;
            var10 = var9.entries;
            var9 = var10.map;
            var8 = function(arg1) {
                var2 = arg1;
                var1 = {};
                var3 = var2.summary_type;
                var1['summaryType'] = var3;
                var2 = var2.content_json;
                var1['contentJson'] = var2;
                return var1;
            };
            var8 = var9.bind(var10)(var8);
            var7['entries'] = var8;
            var5 = var7;
case 28:
            var2['summaryMap'] = var5;
            var5 = var4.engagement;
            var2['engagement'] = var5;
            var5 = var4.substance;
            var2['substance'] = var5;
            var5 = var4.dynamics;
            var2['dynamics'] = var5;
            var5 = var4.moderation;
            var5 = var3 != var5;
            var3 = null;
            if(!var5) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var5 = _closure1_slot0;
            var4 = var4.moderation;
            var3 = var5.bind(var6)(var4);
case 30:
            var2['moderation'] = var3;
            var1 = var2;
case 21:
            return var1;
        }
    };
    var3['mapConversation'] = var2;
    return var1;
})();