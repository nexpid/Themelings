// app/actions/CallActionCreators.tsx
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
    var2 = var7.bind(var1)(var2);
    var _closure1_slot4 = var2;
    var2 = 2;
    var2 = var6[var2];
    var2 = var7.bind(var1)(var2);
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var6[var2];
    var2 = var5.bind(var1)(var2);
    var7 = var2.Endpoints;
    var _closure1_slot6 = var7;
    var7 = var2.AnalyticEvents;
    var _closure1_slot7 = var7;
    var7 = var2.ChannelTypesSets;
    var _closure1_slot8 = var7;
    var2 = var2.ChannelTypes;
    var _closure1_slot9 = var2;
    var2 = {};
    var7 = function call(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var7 = arg1;
            var5 = arg3;
            var4 = arg4;
            var2 = this;
            var _closure2_slot0 = var2;
            var _closure2_slot1 = var7;
            var2 = arg2;
            var _closure2_slot2 = var2;
            var _closure2_slot3 = var5;
            var _closure2_slot4 = var4;
            var2 = arg5;
            var _closure2_slot5 = var2;
            var3 = function doCall(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 4;
                    var2 = var2[var1];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var2);
                    var5 = var6.selectVoiceChannel;
                    var4 = _closure2_slot1;
                    var3 = _closure2_slot2;
                    var3 = var5.bind(var6)(var4, var3);
                    var3 = arg1;
                    if(!var3) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure2_slot0;
                    var4 = var5.ring;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
case 2:
                    var4 = _closure2_slot5;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = _closure2_slot5;
                    var2 = _closure2_slot1;
                    var2 = var3.bind(var1)(var2);
case 4:
                    return var1;
                }
            };
            var _closure2_slot6 = var3;
            var2 = null;
            if(!(var2 == var4)) { _fun0001_ip = 2; continue _fun0001 }
case 6:
            var2 = undefined;
            var2 = var3.bind(var2)(var5);
            _fun0001_ip = 7; continue _fun0001;
case 2:
            var3 = _closure1_slot4;
            var2 = var3.isBlocked;
            var2 = var2.bind(var3)(var4);
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var3 = _closure1_slot5;
            var2 = var3.getUser;
            var2 = var2.bind(var3)(var4);
            var _closure2_slot7 = var2;
            var4 = _closure1_slot0;
            var3 = _closure1_slot2;
            var2 = 5;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var4 = var2.HTTP;
            var3 = var4.get;
            var2 = {'url': null, 'oldFormErrors': true, 'rejectWithError': true};
            var6 = _closure1_slot6;
            var5 = var6.CALL;
            var5 = var5.bind(var6)(var7);
            var2['url'] = var5;
            var4 = var3.bind(var4)(var2);
            var3 = var4.then;
            var2 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var1 = arg1;
                    var1 = var1.body;
                    var2 = var1.ringable;
case 10:
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var1 = 6;
                    var2 = var6[var1];
                    var1 = undefined;
                    var8 = var3.bind(var1)(var2);
                    var7 = var8.track;
                    var2 = _closure1_slot7;
                    var4 = var2.OPEN_POPOUT;
                    var2 = {'type': 'Not Friend', 'source': 'Call'};
                    var2 = var7.bind(var8)(var4, var2);
                    var2 = 7;
                    var2 = var6[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.show;
                    var2 = {};
                    var7 = _closure1_slot0;
                    var9 = 8;
                    var8 = var6[var9];
                    var8 = var7.bind(var1)(var8);
                    var11 = var8.intl;
                    var10 = var11.string;
                    var8 = var6[var9];
                    var8 = var7.bind(var1)(var8);
                    var8 = var8.t;
                    var8 = var8.My50nZ;
                    var8 = var10.bind(var11)(var8);
                    var2['title'] = var8;
                    var8 = var6[var9];
                    var8 = var7.bind(var1)(var8);
                    var10 = var8.intl;
                    var8 = var10.format;
                    var6 = var6[var9];
                    var6 = var7.bind(var1)(var6);
                    var6 = var6.t;
                    var7 = var6.IdKo29;
                    var6 = {};
                    var13 = _closure2_slot7;
                    var11 = null;
                    var13 = var11 != var13;
                    var11 = '';
                    if(!var13) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var12 = _closure2_slot7;
                    var11 = var12.username;
case 12:
                    var6['username'] = var11;
                    var6 = var8.bind(var10)(var7, var6);
                    var2['body'] = var6;
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var6 = var5[var9];
                    var6 = var8.bind(var1)(var6);
                    var10 = var6.intl;
                    var7 = var10.string;
                    var6 = var5[var9];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.PMsq/f;
                    var6 = var7.bind(var10)(var6);
                    var2['confirmText'] = var6;
                    var6 = var5[var9];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var5[var9];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.BddRzc;
                    var5 = var6.bind(var7)(var5);
                    var2['cancelText'] = var5;
                    var5 = function onConfirm() {
                        var3 = _closure1_slot1;
                        var2 = _closure1_slot2;
                        var1 = 9;
                        var2 = var2[var1];
                        var1 = undefined;
                        var4 = var3.bind(var1)(var2);
                        var3 = var4.addRelationship;
                        var2 = {};
                        var5 = _closure2_slot4;
                        var2['userId'] = var5;
                        var5 = {};
                        var6 = 'Call';
                        var5['location'] = var6;
                        var2['context'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var2['onConfirm'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var1 = var3.bind(var4)(var2, var1);
case 7:
            var1 = undefined;
            return var1;
case 8:
            var1 = undefined;
            return var1;
        }
    };
    var2['call'] = var7;
    var7 = function ring(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var11 = arg1;
            var6 = arg2;
            var3 = _closure1_slot3;
            var1 = var3.getChannel;
            var5 = var1.bind(var3)(var11);
            var3 = null;
            if(!(var3 != var5)) { _fun0005_ip = 14; continue _fun0005 }
case 15:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 10;
            var1 = var4[var1];
            var4 = undefined;
            var7 = var7.bind(var4)(var1);
            var1 = var7.canRingUsersInChannel;
            var7 = var1.bind(var7)(var5);
            var1 = _closure1_slot8;
            var9 = var1.CALLABLE;
            var8 = var9.has;
            var1 = var5.type;
            var1 = var8.bind(var9)(var1);
            if(var7) { _fun0005_ip = 16; continue _fun0005 }
case 17:
            if(!var1) { _fun0005_ip = 14; continue _fun0005 }
case 18:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var1 = 11;
            var1 = var8[var1];
            var8 = var7.bind(var4)(var1);
            var7 = var8.dispatch;
            var1 = {};
            var9 = 'CALL_ENQUEUE_RING';
            var1['type'] = var9;
            var1['channelId'] = var11;
            var1['recipients'] = var6;
            var1 = var7.bind(var8)(var1);
case 14:
            var1 = undefined;
            return var1;
case 16:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var1 = 5;
            var1 = var8[var1];
            var1 = var7.bind(var4)(var1);
            var8 = var1.HTTP;
            var7 = var8.post;
            var1 = {};
            var10 = _closure1_slot6;
            var9 = var10.CALL_RING;
            var9 = var9.bind(var10)(var11);
            var1['url'] = var9;
            var9 = {};
            var9['recipients'] = var6;
            var10 = arg3;
            var9['analytics_location'] = var10;
            var1['body'] = var9;
            var9 = true;
            var1['oldFormErrors'] = var9;
            var1['rejectWithError'] = var9;
            var1 = var7.bind(var8)(var1);
            var7 = var5.type;
            var1 = _closure1_slot9;
            var1 = var1.GUILD_VOICE;
            var1 = var7 === var1;
            if(!var1) { _fun0005_ip = 19; continue _fun0005 }
case 20:
            var1 = var3 != var6;
case 19:
            if(!var1) { _fun0005_ip = 21; continue _fun0005 }
case 22:
            var3 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 11;
            var2 = var7[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.dispatch;
            var2 = {};
            var7 = 'GUILD_LOCAL_RING_START';
            var2['type'] = var7;
            var2['ringing'] = var6;
            var5 = var5.guild_id;
            var2['guildId'] = var5;
            var1 = var3.bind(var4)(var2);
case 21:
            var1 = undefined;
            return var1;
        }
    };
    var2['ring'] = var7;
    var4 = function stopRinging(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 5;
        var2 = var2[var1];
        var1 = undefined;
        var1 = var3.bind(var1)(var2);
        var3 = var1.HTTP;
        var2 = var3.post;
        var1 = {};
        var6 = _closure1_slot6;
        var5 = var6.CALL_STOP_RINGING;
        var4 = arg1;
        var4 = var5.bind(var6)(var4);
        var1['url'] = var4;
        var4 = {};
        var5 = arg2;
        var4['recipients'] = var5;
        var1['body'] = var4;
        var4 = true;
        var1['oldFormErrors'] = var4;
        var1['rejectWithError'] = var4;
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var2['stopRinging'] = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'actions/CallActionCreators.tsx';
    var4 = var5.bind(var6)(var4);
    var3['default'] = var2;
    return var1;
})();