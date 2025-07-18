// app/actions/CreateChannelActionCreators.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
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
 0:
            var2 = arg1;
            var11 = var2.guildId;
            var _closure2_slot0 = var11;
            var9 = var2.type;
            var13 = var2.name;
            var4 = var2.permissionOverwrites;
            var8 = undefined;
            if(!(var4 === var8)) { _fun0001_ip = 40; continue _fun0001 }
 36:
            var4 = new Array(0);
 40:
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
            if(!var13) { _fun0001_ip = 160; continue _fun0001 }
 152:
            var14 = _closure1_slot4;
            var13 = var12 !== var14;
 160:
            if(!var13) { _fun0001_ip = 169; continue _fun0001 }
 163:
            var5['bitrate'] = var12;
 169:
            var12 = var4 != var10;
            if(!var12) { _fun0001_ip = 182; continue _fun0001 }
 176:
            var13 = 0;
            var12 = var10 > var13;
 182:
            if(!var12) { _fun0001_ip = 191; continue _fun0001 }
 185:
            var5['user_limit'] = var10;
 191:
            if(!(var4 != var7)) { _fun0001_ip = 201; continue _fun0001 }
 195:
            var5['parent_id'] = var7;
 201:
            var7 = _closure1_slot5;
            var7 = var7.GUILD_STORE;
            if(!(var9 === var7)) { _fun0001_ip = 234; continue _fun0001 }
 215:
            if(!(var4 != var3)) { _fun0001_ip = 376; continue _fun0001 }
 222:
            var5['sku_id'] = var3;
            var5['branch_id'] = var2;
 234:
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
 0:
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
                    if(var8) { _fun0002_ip = 89; continue _fun0002 }
 70:
                    var8 = var5.body;
                    var9 = var6 == var8;
                    var4 = undefined;
                    if(var9) { _fun0002_ip = 89; continue _fun0002 }
 84:
                    var4 = var8.id;
 89:
                    var1['channel_id'] = var4;
                    var8 = var6 == var5;
                    var4 = undefined;
                    if(var8) { _fun0002_ip = 121; continue _fun0002 }
 102:
                    var5 = var5.body;
                    var6 = var6 == var5;
                    var4 = undefined;
                    if(var6) { _fun0002_ip = 121; continue _fun0002 }
 116:
                    var4 = var5.type;
 121:
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
 0:
                    var1 = arg1;
                    var6 = _closure1_slot3;
                    var5 = var6.isOptInEnabled;
                    var4 = _closure2_slot0;
                    var4 = var5.bind(var6)(var4);
                    if(!var4) { _fun0003_ip = 130; continue _fun0003 }
 31:
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
 130:
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
 376:
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
 0:
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
                if(var8) { _fun0004_ip = 73; continue _fun0004 }
 54:
                var8 = var5.body;
                var9 = var6 == var8;
                var4 = undefined;
                if(var9) { _fun0004_ip = 73; continue _fun0004 }
 68:
                var4 = var8.id;
 73:
                var1['channel_id'] = var4;
                var8 = var6 == var5;
                var4 = undefined;
                if(var8) { _fun0004_ip = 105; continue _fun0004 }
 86:
                var5 = var5.body;
                var6 = var6 == var5;
                var4 = undefined;
                if(var6) { _fun0004_ip = 105; continue _fun0004 }
 100:
                var4 = var5.type;
 105:
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