// app/actions/CreateChannelActionCreators.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var2);
    var1 = 0;
    var2 = var6[var1];
    var1 = undefined;
    var2 = var7.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.BITRATE_DEFAULT;
    var _closure1_slot4 = var7;
    var7 = var2.ChannelTypes;
    var _closure1_slot5 = var7;
    var2 = var2.Endpoints;
    var _closure1_slot6 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var2 = var2.ChannelNotificationSettingsFlags;
    var _closure1_slot7 = var2;
    var2 = {};
    var7 = function createChannel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var11 = var2.guildId;
            var _closure2_slot0 = var11;
            var9 = var2.type;
            var13 = var2.name;
            var4 = var2.permissionOverwrites;
            var8 = undefined;
            if(!(var4 === var8)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = new Array(0);
case 2:
            var _closure2_slot1 = var4;
            var12 = var2.bitrate;
            var10 = var2.userLimit;
            var7 = var2.parentId;
            var3 = var2.skuId;
            var2 = var2.branchId;
            var14 = _closure1_slot1;
            var15 = _closure1_slot2;
            var5 = 3;
            var5 = var15[var5];
            var15 = var14.bind(var8)(var5);
            var14 = var15.dispatch;
            var5 = {};
            var16 = 'CREATE_CHANNEL_MODAL_SUBMIT';
            var5['type'] = var16;
            var5['guildId'] = var11;
            var5['channelType'] = var9;
            var5 = var14.bind(var15)(var5);
            var5 = {};
            var5['type'] = var9;
            var5['name'] = var13;
            var5['permission_overwrites'] = var4;
            var4 = null;
            var13 = var4 != var12;
            if(!var13) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var14 = _closure1_slot4;
            var13 = var12 !== var14;
case 4:
            if(!var13) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var5['bitrate'] = var12;
case 6:
            var12 = var4 != var10;
            if(!var12) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var13 = 0;
            var12 = var10 > var13;
case 8:
            if(!var12) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var5['user_limit'] = var10;
case 10:
            if(!(var4 != var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var5['parent_id'] = var7;
case 12:
            var7 = _closure1_slot5;
            var7 = var7.GUILD_STORE;
            if(!(var9 === var7)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            if(!(var4 != var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5['sku_id'] = var3;
            var5['branch_id'] = var2;
case 14:
            var3 = _closure1_slot1;
            var9 = _closure1_slot2;
            var2 = 4;
            var2 = var9[var2];
            var4 = var3.bind(var8)(var2);
            var3 = var4.post;
            var2 = {};
            var10 = _closure1_slot6;
            var7 = var10.GUILD_CHANNELS;
            var7 = var7.bind(var10)(var11);
            var2['url'] = var7;
            var2['body'] = var5;
            var5 = true;
            var2['oldFormErrors'] = var5;
            var5 = {};
            var7 = _closure1_slot0;
            var6 = 5;
            var6 = var9[var6];
            var6 = var7.bind(var8)(var6);
            var6 = var6.NetworkActionNames;
            var6 = var6.CHANNEL_CREATE;
            var5['event'] = var6;
            var6 = function properties(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var5 = arg1;
                    var2 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 6;
                    var1 = var3[var1];
                    var7 = undefined;
                    var3 = var2.bind(var7)(var1);
                    var2 = var3.exact;
                    var1 = {};
                    var4 = _closure2_slot1;
                    var6 = var4.length;
                    var4 = 0;
                    var4 = var6 > var4;
                    var1['is_private'] = var4;
                    var6 = null;
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 18; continue _fun0002 }
case 19:
                    var8 = var5.body;
                    var9 = var6 == var8;
                    var4 = undefined;
                    if(var9) { _fun0002_ip = 18; continue _fun0002 }
case 20:
                    var4 = var8.id;
case 18:
                    var1['channel_id'] = var4;
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 21; continue _fun0002 }
case 22:
                    var5 = var5.body;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 21; continue _fun0002 }
case 23:
                    var4 = var5.type;
case 21:
                    var1['channel_type'] = var4;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var5['properties'] = var6;
            var2['trackedActionData'] = var5;
            var5 = false;
            var2['rejectWithError'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var1 = arg1;
                    var6 = _closure1_slot3;
                    var5 = var6.isOptInEnabled;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0003_ip = 24; continue _fun0003 }
case 25:
                    var5 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var4 = 7;
                    var4 = var12[var4];
                    var11 = undefined;
                    var9 = var5.bind(var11)(var4);
                    var8 = var9.updateChannelOverrideSettings;
                    var7 = _closure2_slot0;
                    var4 = var1.body;
                    var15 = var4.id;
                    var5 = {};
                    var4 = _closure1_slot7;
                    var4 = var4.OPT_IN_ENABLED;
                    var5['flags'] = var4;
                    var10 = _closure1_slot0;
                    var4 = 8;
                    var4 = var12[var4];
                    var4 = var10.bind(var11)(var4);
                    var4 = var4.NotificationLabels;
                    var13 = var4.OptedIn;
                    var17 = var9;
                    var16 = var7;
                    var14 = var5;
                    var4 = var17[var8](var16, var15, var14, var13, var12);
case 24:
                    var5 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var3 = 9;
                    var4 = var4[var3];
                    var3 = undefined;
                    var4 = var5.bind(var3)(var4);
                    var3 = var4.checkGuildTemplateDirty;
                    var2 = _closure2_slot0;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = function(arg1) {
                var1 = arg1;
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 3;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.dispatch;
                var2 = {};
                var5 = 'CREATE_CHANNEL_MODAL_SUBMIT_FAILURE';
                var2['type'] = var5;
                var5 = var1.body;
                var2['errors'] = var5;
                var2 = var3.bind(var4)(var2);
                throw var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 16:
            var1 = global;
            var3 = var1.Error;
            var1 = var3.prototype;
            var2 = Object.create(var1, {constructor: {value: var3}});
            var18 = 'Unexpected missing SKU';
            var19 = var2;
            var1 = new var19[var3](var18, var17);
            var1 = var1 instanceof Object ? var1 : var2;
            throw var1;
        }
    };
    var2['createChannel'] = var7;
    var4 = function createRoleSubscriptionTemplateChannel(arg1, arg2, arg3, arg4) {
        var2 = _closure1_slot1;
        var8 = _closure1_slot2;
        var1 = 4;
        var1 = var8[var1];
        var7 = undefined;
        var3 = var2.bind(var7)(var1);
        var2 = var3.post;
        var1 = {};
        var9 = _closure1_slot6;
        var6 = var9.GUILD_CHANNELS;
        var4 = arg1;
        var4 = var6.bind(var9)(var4);
        var1['url'] = var4;
        var4 = {};
        var6 = arg2;
        var4['name'] = var6;
        var6 = arg3;
        var4['type'] = var6;
        var6 = arg4;
        var4['topic'] = var6;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var4 = {};
        var6 = _closure1_slot0;
        var5 = 5;
        var5 = var8[var5];
        var5 = var6.bind(var7)(var5);
        var5 = var5.NetworkActionNames;
        var5 = var5.CHANNEL_CREATE;
        var4['event'] = var5;
        var5 = function properties(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                var5 = arg1;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 6;
                var1 = var3[var1];
                var7 = undefined;
                var3 = var2.bind(var7)(var1);
                var2 = var3.exact;
                var1 = {};
                var4 = true;
                var1['is_private'] = var4;
                var6 = null;
                var8 = var6 == var5;
                var4 = undefined;
                if(var8) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                var8 = var5.body;
                var9 = var6 == var8;
                var4 = undefined;
                if(var9) { _fun0004_ip = 26; continue _fun0004 }
case 28:
                var4 = var8.id;
case 26:
                var1['channel_id'] = var4;
                var8 = var6 == var5;
                var4 = undefined;
                if(var8) { _fun0004_ip = 29; continue _fun0004 }
case 30:
                var5 = var5.body;
                var6 = var6 == var5;
                var4 = undefined;
                if(var6) { _fun0004_ip = 29; continue _fun0004 }
case 31:
                var4 = var5.type;
case 29:
                var1['channel_type'] = var4;
                var1 = var2.bind(var3)(var1);
                return var1;
            }
        };
        var4['properties'] = var5;
        var1['trackedActionData'] = var4;
        var4 = false;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['createRoleSubscriptionTemplateChannel'] = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/CreateChannelActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();