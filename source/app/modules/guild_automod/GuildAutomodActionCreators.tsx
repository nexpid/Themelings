// app/modules/guild_automod/GuildAutomodActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
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
            if(!(var5 != var4)) { _fun0001_ip = 56; continue _fun0001 }
 51:
            var1 = delete var4.keywordLists;
 56:
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
            if(!(var5 == var4)) { _fun0001_ip = 229; continue _fun0001 }
 225:
            var4 = new Array(0);
 229:
            var4 = var6.bind(var7)(var4);
            var1['exempt_channels'] = var4;
            var4 = var3.Array;
            var3 = var4.from;
            var2 = var2.exemptRoles;
            if(!(var5 == var2)) { _fun0001_ip = 264; continue _fun0001 }
 260:
            var2 = new Array(0);
 264:
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
 0:
            var2 = arg1;
            var1 = {};
            var4 = var2.id;
            var3 = null;
            if(!(var3 == var4)) { _fun0002_ip = 69; continue _fun0002 }
 16:
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
 69:
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
            if(!(var3 == var5)) { _fun0002_ip = 264; continue _fun0002 }
 260:
            var5 = new Array(0);
 264:
            var6 = var7.prototype;
            var6 = Object.create(var6, {constructor: {value: var7}});
            var12 = var6;
            var11 = var5;
            var5 = new var12[var7](var11, var10);
            var5 = var5 instanceof Object ? var5 : var6;
            var1['exemptChannels'] = var5;
            var5 = var4.Set;
            var2 = var2.exempt_roles;
            if(!(var3 == var2)) { _fun0002_ip = 312; continue _fun0002 }
 308:
            var2 = new Array(0);
 312:
            var4 = var5.prototype;
            var4 = Object.create(var4, {constructor: {value: var5}});
            var12 = var4;
            var11 = var2;
            var2 = new var12[var5](var11, var10);
            var2 = var2 instanceof Object ? var2 : var4;
            var1['exemptRoles'] = var2;
            var2 = var1.triggerMetadata;
            if(!(var3 != var2)) { _fun0002_ip = 361; continue _fun0002 }
 350:
            var2 = var1.triggerMetadata;
            var2 = delete var2.keywordLists;
 361:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 151; continue _fun0003 }
 13:
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
 101:
                    return var2;
 103:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0003_ip = 148; continue _fun0003 }
 109:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 4;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5._transformMetadataToCamelCase;
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 148:
                    return var2;
 151:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0004_ip = 131; continue _fun0004 }
 10:
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
 107:
                    return var2;
 109:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0004_ip = 128; continue _fun0004 }
 115:
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 128:
                    return var2;
 131:
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
 0:
                    StartGenerator();
                    var8 = arg1;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0005_ip = 135; continue _fun0005 }
 13:
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
 111:
                    return var2;
 113:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0005_ip = 132; continue _fun0005 }
 119:
                    var3 = var2.body;
                    var3 = var4.bind(var5)(var3);
                    return var3;
 132:
                    return var2;
 135:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0006_ip = 100; continue _fun0006 }
 7:
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
 84:
                    return var2;
 86:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0006_ip = 97; continue _fun0006 }
 92:
                    var3 = true;
                    return var3;
 97:
                    return var2;
 100:
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
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0007_ip = 147; continue _fun0007 }
 10:
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
 82:
                    return var2;
 84:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0007_ip = 144; continue _fun0007 }
 90:
                    var3 = global;
                    var6 = var3.Array;
                    var5 = var6.isArray;
                    var3 = var2.body;
                    var3 = var5.bind(var6)(var3);
                    if(var3) { _fun0007_ip = 122; continue _fun0007 }
 116:
                    var3 = new Array(0);
                    _fun0007_ip = 141; continue _fun0007;
 122:
                    var6 = var2.body;
                    var5 = var6.map;
                    var4 = _closure1_slot12;
                    var3 = var5.bind(var6)(var4);
 141:
                    return var3;
 144:
                    return var2;
 147:
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
 0:
                    StartGenerator();
                    var6 = arg2;
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0008_ip = 166; continue _fun0008 }
 13:
                    var4 = _closure1_slot5;
                    var3 = var4.can;
                    var2 = _closure1_slot8;
                    var2 = var2.MANAGE_MESSAGES;
                    var2 = var3.bind(var4)(var2, var6);
                    if(!var2) { _fun0008_ip = 158; continue _fun0008 }
 45:
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
 150:
                    return var2;
 152:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                    if(var3) { _fun0008_ip = 163; continue _fun0008 }
 158:
                    var3 = undefined;
                    return var3;
 163:
                    return var2;
 166:
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
 0:
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
            if(!var3) { _fun0009_ip = 75; continue _fun0009 }
 49:
            var6 = _closure1_slot5;
            var5 = var6.can;
            var4 = _closure1_slot8;
            var4 = var4.MANAGE_GUILD;
            var3 = var5.bind(var6)(var4, var7);
 75:
            if(!var3) { _fun0009_ip = 118; continue _fun0009 }
 78:
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
 118:
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