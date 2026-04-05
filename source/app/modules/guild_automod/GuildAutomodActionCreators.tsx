// app/modules/guild_automod/GuildAutomodActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function _transformClientActionToApiAction(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.type;
        var1['type'] = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4._transformMetadataToSnakeCase;
        var2 = var2.metadata;
        var2 = var3.bind(var4)(var2);
        var1['metadata'] = var2;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function _transformClientRuleToApiRule(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 4;
            var1 = var5[var1];
            var9 = undefined;
            var5 = var4.bind(var9)(var1);
            var4 = var5._transformMetadataToSnakeCase;
            var1 = var2.triggerMetadata;
            var4 = var4.bind(var5)(var1);
            var5 = null;
            if(!(var5 != var4)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = delete var4.keywordLists;
case 2:
            var1 = {};
            var6 = var2.id;
            var1['id'] = var6;
            var6 = var2.name;
            var1['name'] = var6;
            var6 = var2.guildId;
            var1['guild_id'] = var6;
            var6 = var2.eventType;
            var1['event_type'] = var6;
            var6 = var2.triggerType;
            var1['trigger_type'] = var6;
            var1['trigger_metadata'] = var4;
            var7 = var2.actions;
            var6 = var7.filter;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 5;
            var4 = var10[var4];
            var4 = var8.bind(var9)(var4);
            var4 = var4.isNotNullish;
            var6 = var6.bind(var7)(var4);
            var4 = var6.map;
            var3 = _closure1_slot9;
            var3 = var4.bind(var6)(var3);
            var1['actions'] = var3;
            var3 = var2.enabled;
            var1['enabled'] = var3;
            var3 = var2.creatorId;
            var1['creator_id'] = var3;
            var3 = var2.position;
            var1['position'] = var3;
            var3 = global;
            var7 = var3.Array;
            var6 = var7.from;
            var4 = var2.exemptChannels;
            if(!(var5 == var4)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = new Array(0);
case 4:
            var4 = var6.bind(var7)(var4);
            var1['exempt_channels'] = var4;
            var4 = var3.Array;
            var3 = var4.from;
            var2 = var2.exemptRoles;
            if(!(var5 == var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = new Array(0);
case 6:
            var2 = var3.bind(var4)(var2);
            var1['exempt_roles'] = var2;
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = function _transformApiActionToClientAction(arg1) {
        var2 = arg1;
        var1 = {};
        var3 = var2.type;
        var1['type'] = var3;
        var5 = _closure1_slot0;
        var4 = _closure1_slot2;
        var3 = 4;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4._transformMetadataToCamelCase;
        var2 = var2.metadata;
        var2 = var3.bind(var4)(var2);
        var1['metadata'] = var2;
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function _transformApiRuletoClientRule(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.id;
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 8; continue _fun0002 }
case 9:
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var5 = 6;
            var6 = var6[var5];
            var5 = undefined;
            var7 = var7.bind(var5)(var6);
            var6 = var7.fromTimestamp;
            var5 = global;
            var8 = var5.Date;
            var5 = var8.now;
            var5 = var5.bind(var8)();
            var4 = var6.bind(var7)(var5);
case 8:
            var1['id'] = var4;
            var4 = var2.name;
            var1['name'] = var4;
            var4 = var2.guild_id;
            var1['guildId'] = var4;
            var4 = var2.event_type;
            var1['eventType'] = var4;
            var4 = var2.trigger_type;
            var1['triggerType'] = var4;
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var8 = undefined;
            var7 = var9.bind(var8)(var5);
            var6 = var7._transformMetadataToCamelCase;
            var5 = var2.trigger_metadata;
            var5 = var6.bind(var7)(var5);
            var1['triggerMetadata'] = var5;
            var7 = var2.actions;
            var6 = var7.filter;
            var5 = 5;
            var5 = var10[var5];
            var5 = var9.bind(var8)(var5);
            var5 = var5.isNotNullish;
            var6 = var6.bind(var7)(var5);
            var5 = var6.map;
            var4 = _closure1_slot11;
            var4 = var5.bind(var6)(var4);
            var1['actions'] = var4;
            var4 = var2.enabled;
            var1['enabled'] = var4;
            var4 = var2.creator_id;
            var1['creatorId'] = var4;
            var4 = var2.position;
            var1['position'] = var4;
            var4 = global;
            var7 = var4.Set;
            var5 = var2.exempt_channels;
            if(!(var3 == var5)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var5 = new Array(0);
case 6:
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var5;
            var5 = new var12[var7](var11, var10);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['exemptChannels'] = var5;
            var5 = var4.Set;
            var2 = var2.exempt_roles;
            if(!(var3 == var2)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
            var2 = new Array(0);
case 10:
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var11 = var2;
            var2 = new var12[var5](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            var1['exemptRoles'] = var2;
            var2 = var1.triggerMetadata;
            if(!(var3 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var2 = var1.triggerMetadata;
            var2 = delete var2.keywordLists;
case 12:
            return var1;
        }
    };
    var _closure1_slot12 = var1;
    var1 = function _validateAutomodRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 14; continue _fun0003 }
case 15:
                    var2 = _closure1_slot10;
                    var5 = undefined;
                    var7 = var2.bind(var5)(var8);
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var4.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var4 = var6.post;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var9 = var10.GUILD_AUTOMOD_VALIDATE_RULE;
                    var8 = var8.guildId;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var4.bind(var6)(var2);
                    SaveGenerator(address=103);
case 16:
                    return var2;
case 17:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 18; continue _fun0003 }
case 19:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5._transformMetadataToCamelCase;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 18:
                    return var2;
case 14:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function _createAutomodRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var2 = _closure1_slot10;
                    var5 = undefined;
                    var7 = var2.bind(var5)(var8);
                    var2 = delete var7.id;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.post;
                    var2 = {};
                    var10 = _closure1_slot7;
                    var9 = var10.GUILD_AUTOMOD_RULES;
                    var8 = var8.guildId;
                    var8 = var9.bind(var10)(var8);
                    var2['url'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=109);
case 22:
                    return var2;
case 19:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 23; continue _fun0004 }
case 24:
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 23:
                    return var2;
case 20:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot14 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _updateAutomodRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 25; continue _fun0005 }
case 15:
                    var2 = _closure1_slot10;
                    var5 = undefined;
                    var7 = var2.bind(var5)(var8);
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 7;
                    var2 = var6[var2];
                    var2 = var3.bind(var5)(var2);
                    var6 = var2.HTTP;
                    var3 = var6.patch;
                    var2 = {};
                    var11 = _closure1_slot7;
                    var10 = var11.GUILD_AUTOMOD_RULE;
                    var9 = var8.guildId;
                    var8 = var8.id;
                    var8 = var10.bind(var11)(var9, var8);
                    var2['url'] = var8;
                    var2['body'] = var7;
                    var7 = false;
                    var2['rejectWithError'] = var7;
                    var2 = var3.bind(var6)(var2);
                    SaveGenerator(address=113);
case 26:
                    return var2;
case 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 28; continue _fun0005 }
case 29:
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
case 28:
                    return var2;
case 25:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function _deleteAutomodRule() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2) {
            var1 = function* anon_0_(arg1, arg2) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.del;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var7 = var8.GUILD_AUTOMOD_RULE;
                    var6 = arg2;
                    var5 = arg1;
                    var5 = var7.bind(var8)(var6, var5);
                    var2['url'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=86);
case 32:
                    return var2;
case 33:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 34; continue _fun0006 }
case 35:
                    var3 = true;
                    return var3;
case 34:
                    return var2;
case 30:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot16 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot16 = var1;
    var1 = function _fetchAutomodRules() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1) {
            var1 = function* anon_0_(arg1) {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 36; continue _fun0007 }
case 21:
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var5.bind(var2)(var3);
                    var5 = var2.HTTP;
                    var3 = var5.get;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var7 = var8.GUILD_AUTOMOD_RULES;
                    var6 = arg1;
                    var6 = var7.bind(var8)(var6);
                    var2['url'] = var6;
                    var6 = false;
                    var2['rejectWithError'] = var6;
                    var2 = var3.bind(var5)(var2);
                    SaveGenerator(address=84);
case 37:
                    return var2;
case 32:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var3 = global;
                    var6 = var3.Array;
                    var5 = var6.isArray;
                    var3 = var2.body;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0007_ip = 40; continue _fun0007 }
case 41:
                    var3 = new Array(0);
                    _fun0007_ip = 42; continue _fun0007;
case 40:
                    var6 = var2.body;
                    var5 = var6.map;
                    var4 = _closure1_slot12;
                    var3 = var5.bind(var6)(var4);
case 42:
                    return var3;
case 38:
                    return var2;
case 36:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot17 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot17 = var1;
    var1 = function _executeAlertAction() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* (arg1, arg2, arg3) {
            var1 = function* anon_0_(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 43; continue _fun0008 }
case 15:
                    var4 = _closure1_slot5;
                    var3 = var4.can;
                    var2 = _closure1_slot8;
                    var2 = var2.MANAGE_MESSAGES;
                    var2 = var3.bind(var4)(var2, var6);
                    if(!var2) { _fun0008_ip = 44; continue _fun0008 }
case 45:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 7;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.HTTP;
                    var3 = var4.post;
                    var2 = {};
                    var8 = _closure1_slot7;
                    var7 = var8.GUILD_AUTOMOD_ALERT_ACTION;
                    var5 = var6.guild_id;
                    var5 = var7.bind(var8)(var5);
                    var2['url'] = var5;
                    var5 = {};
                    var7 = arg1;
                    var5['message_id'] = var7;
                    var6 = var6.id;
                    var5['channel_id'] = var6;
                    var6 = arg3;
                    var5['alert_action_type'] = var6;
                    var2['body'] = var5;
                    var5 = false;
                    var2['rejectWithError'] = var5;
                    var2 = var3.bind(var4)(var2);
                    SaveGenerator(address=152);
case 46:
                    return var2;
case 47:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 48; continue _fun0008 }
case 44:
                    var3 = undefined;
                    return var3;
case 48:
                    return var2;
case 43:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot18 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot18 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot6 = var7;
    var7 = var4.Endpoints;
    var _closure1_slot7 = var7;
    var4 = var4.Permissions;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_automod/GuildAutomodActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function validateAutomodRule() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['validateAutomodRule'] = var4;
    var4 = function createAutomodRule() {
        var1 = undefined;
        var4 = _closure1_slot14;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['createAutomodRule'] = var4;
    var4 = function updateAutomodRule() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['updateAutomodRule'] = var4;
    var4 = function deleteAutomodRule() {
        var1 = undefined;
        var4 = _closure1_slot16;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['deleteAutomodRule'] = var4;
    var4 = function fetchAutomodRules() {
        var1 = undefined;
        var4 = _closure1_slot17;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['fetchAutomodRules'] = var4;
    var4 = function executeAlertAction() {
        var1 = undefined;
        var4 = _closure1_slot18;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var3['executeAlertAction'] = var4;
    var4 = function removeMentionRaidRestrictionWithFeedback(arg1, arg2, arg3) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var2 = arg2;
            var _closure2_slot1 = var2;
            var2 = arg3;
            var _closure2_slot2 = var2;
            var4 = _closure1_slot4;
            var3 = var4.getGuild;
            var7 = var3.bind(var4)(var5);
            var3 = null;
            var3 = var3 != var7;
            if(!var3) { _fun0009_ip = 49; continue _fun0009 }
case 50:
            var6 = _closure1_slot5;
            var5 = var6.can;
            var4 = _closure1_slot8;
            var4 = var4.MANAGE_GUILD;
            var3 = var5.bind(var6)(var4, var7);
case 49:
            if(!var3) { _fun0009_ip = 51; continue _fun0009 }
case 52:
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 8;
            var3 = var3[var2];
            var2 = undefined;
            var3 = var4.bind(var2)(var3);
            var2 = var3.openConfirmRemoveMentionRaid;
            var1 = function() {
                var4 = _closure1_slot0;
                var5 = _closure1_slot2;
                var1 = 9;
                var2 = var5[var1];
                var1 = undefined;
                var9 = var4.bind(var1)(var2);
                var8 = var9.trackWithMetadata;
                var2 = _closure1_slot6;
                var7 = var2.GUILD_AUTOMOD_FEEDBACK;
                var3 = {};
                var2 = 10;
                var2 = var5[var2];
                var2 = var4.bind(var1)(var2);
                var2 = var2.Feedback;
                var2 = var2.MENTION_RAID_REMOVE_RESTRICTION;
                var3['feedback_type'] = var2;
                var10 = _closure2_slot1;
                var3['decision_id'] = var10;
                var3 = var8.bind(var9)(var7, var3);
                var3 = 7;
                var3 = var5[var3];
                var3 = var4.bind(var1)(var3);
                var5 = var3.HTTP;
                var4 = var5.post;
                var3 = {};
                var8 = _closure1_slot7;
                var7 = var8.GUILD_AUTOMOD_CLEAR_MENTION_RAID;
                var6 = _closure2_slot0;
                var6 = var7.bind(var8)(var6);
                var3['url'] = var6;
                var6 = true;
                var3['rejectWithError'] = var6;
                var3 = var4.bind(var5)(var3);
                var2 = _closure2_slot2;
                var2 = var2.bind(var1)();
                return var1;
            };
            var1 = var2.bind(var3)(var1);
case 51:
            var1 = undefined;
            return var1;
        }
    };
    var3['removeMentionRaidRestrictionWithFeedback'] = var4;
    var2 = function clearMentionRaidDetected(arg1) {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 11;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.dispatch;
        var2 = {};
        var5 = 'AUTO_MODERATION_MENTION_RAID_NOTICE_DISMISS';
        var2['type'] = var5;
        var5 = arg1;
        var2['guildId'] = var5;
        var2 = var3.bind(var4)(var2);
        return var1;
    };
    var3['clearMentionRaidDetected'] = var2;
    return var1;
})();