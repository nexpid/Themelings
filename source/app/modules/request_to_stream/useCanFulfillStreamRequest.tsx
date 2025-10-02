// app/modules/request_to_stream/useCanFulfillStreamRequest.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var7 = require;
    var6 = metroImportDefault;
    var3 = exports;
    var8 = dependencyMap;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var8;
    var2 = function canFulfillStreamRequest(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var9 = arg1;
            var1 = arguments[1];
            var3 = arguments[2];
            var6 = arguments[3];
            var11 = arguments[4];
            var2 = arguments[6];
            var13 = undefined;
            if(!(var1 === var13)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var1 = false;
case 2:
            var _closure2_slot0 = var1;
            if(!(var3 === var13)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot3;
case 4:
            if(!(var6 === var13)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = _closure1_slot5;
case 6:
            if(!(var11 === var13)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var11 = _closure1_slot8;
case 8:
            if(!(var2 === var13)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var2 = _closure1_slot9;
case 10:
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var13;
            var5 = var6.getChannel;
            var1 = var9.channel_id;
            var8 = var5.bind(var6)(var1);
            var6 = null;
            if(!(var6 != var8)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var1 = var2.getChannelId;
            var5 = var1.bind(var2)();
            var1 = var9.channel_id;
            var2 = var3.getCurrentUserActiveStream;
            var2 = var2.bind(var3)();
            var7 = var6 != var2;
            var10 = _closure1_slot0;
            var12 = _closure1_slot1;
            var3 = 9;
            var3 = var12[var3];
            var10 = var10.bind(var13)(var3);
            var3 = var10.getVideoPermission;
            var3 = var3.bind(var10)(var8);
            var10 = var9.application;
            var12 = var6 == var10;
            var9 = undefined;
            if(var12) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var9 = var10.id;
case 14:
            _closure2_slot1 = var9;
            var10 = _closure1_slot10;
            var10 = var10.DESKTOP;
            _closure2_slot2 = var10;
            var12 = _closure1_slot0;
            var14 = _closure1_slot1;
            var10 = 10;
            var10 = var14[var10];
            var12 = var12.bind(var13)(var10);
            var10 = var12.isAndroid;
            var10 = var10.bind(var12)();
            var12 = _closure1_slot10;
            if(var10) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var12.IOS;
            _fun0001_ip = 18; continue _fun0001;
case 16:
            var10 = var12.ANDROID;
case 18:
            _closure2_slot2 = var10;
            if(!(var6 != var9)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var10 = var11.getActivities;
            var12 = _closure1_slot4;
            var9 = var12.getId;
            var9 = var9.bind(var12)();
            var8 = var8.guild_id;
            var9 = var10.bind(var11)(var9, var8);
            var8 = var9.some;
            var4 = function(arg1) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var4 = arg1;
                    var2 = var4.type;
                    var1 = _closure1_slot11;
                    var1 = var1.PLAYING;
                    var1 = var2 === var1;
                    if(!var1) { _fun0002_ip = 21; continue _fun0002 }
case 2:
                    var3 = var4.application_id;
                    var2 = _closure2_slot1;
                    var1 = var3 === var2;
case 21:
                    if(!var1) { _fun0002_ip = 22; continue _fun0002 }
case 23:
                    var2 = _closure2_slot0;
                    var2 = !var2;
                    if(var2) { _fun0002_ip = 24; continue _fun0002 }
case 25:
                    var4 = var4.platform;
                    var3 = _closure2_slot2;
                    var2 = var4 === var3;
case 24:
                    var1 = var2;
case 22:
                    return var1;
                }
            };
            var4 = var8.bind(var9)(var4);
            if(var7) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            if(!(var5 !== var1)) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var1 = new Array(2);
            var5 = false;
            var1[0] = var5;
            var5 = _closure1_slot12;
            var5 = var5.NOT_IN_VOICE_CHANNEL;
            var1[1] = var5;
            _fun0001_ip = 30; continue _fun0001;
case 28:
            var5 = new Array(2);
            if(var3) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var3 = false;
            var5[0] = var3;
            var3 = _closure1_slot12;
            var3 = var3.NO_PERMISSION;
            var5[1] = var3;
            var3 = var5;
            _fun0001_ip = 33; continue _fun0001;
case 31:
            if(var4) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var4 = false;
            var5[0] = var4;
            var4 = _closure1_slot12;
            var4 = var4.NOT_RUNNING_GAME;
            var5[1] = var4;
            var4 = var5;
            _fun0001_ip = 36; continue _fun0001;
case 34:
            var7 = true;
            var5[0] = var7;
            var5[1] = var6;
            var4 = var5;
case 36:
            var3 = var4;
case 33:
            var1 = var3;
case 30:
            _fun0001_ip = 37; continue _fun0001;
case 26:
            var3 = new Array(2);
            var4 = false;
            var3[0] = var4;
            var4 = _closure1_slot12;
            var4 = var4.ALREADY_STREAMING;
            var3[1] = var4;
            var1 = var3;
case 37:
            return var1;
case 19:
            var1 = new Array(2);
            var3 = false;
            var1[0] = var3;
            var2 = _closure1_slot12;
            var2 = var2.NOT_RUNNING_GAME;
            var1[1] = var2;
            return var1;
case 12:
            var1 = new Array(2);
            var2 = false;
            var1[0] = var2;
            var2 = _closure1_slot12;
            var2 = var2.NOT_IN_VOICE_CHANNEL;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var2;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var4);
    var1 = 0;
    var4 = var8[var1];
    var1 = undefined;
    var4 = var6.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 6;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 7;
    var4 = var8[var4];
    var4 = var6.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 8;
    var4 = var8[var4];
    var4 = var7.bind(var1)(var4);
    var6 = var4.ActivityGamePlatforms;
    var _closure1_slot10 = var6;
    var4 = var4.ActivityTypes;
    var _closure1_slot11 = var4;
    var4 = {};
    var6 = 'NOT_IN_VOICE_CHANNEL';
    var4['NOT_IN_VOICE_CHANNEL'] = var6;
    var6 = 'NOT_RUNNING_GAME';
    var4['NOT_RUNNING_GAME'] = var6;
    var6 = 'ALREADY_STREAMING';
    var4['ALREADY_STREAMING'] = var6;
    var6 = 'NO_PERMISSION';
    var4['NO_PERMISSION'] = var6;
    var6 = 'PENDING_REQUEST';
    var4['PENDING_REQUEST'] = var6;
    var6 = 'EXPIRED';
    var4['EXPIRED'] = var6;
    var _closure1_slot12 = var4;
    var6 = 12;
    var6 = var8[var6];
    var8 = var7.bind(var1)(var6);
    var7 = var8.fileFinishedImporting;
    var6 = 'modules/request_to_stream/useCanFulfillStreamRequest.tsx';
    var6 = var7.bind(var8)(var6);
    var5 = function useCanFulfillStreamRequest(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var2 = arguments[1];
            var3 = arg1;
            var _closure2_slot0 = var3;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0003_ip = 38; continue _fun0003 }
case 39:
            var2 = false;
case 38:
            var _closure2_slot1 = var2;
            var3 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 11;
            var2 = var6[var2];
            var4 = var3.bind(var4)(var2);
            var3 = var4.useStateFromStores;
            var6 = _closure1_slot3;
            var2 = new Array(7);
            var2[0] = var6;
            var6 = _closure1_slot5;
            var2[1] = var6;
            var6 = _closure1_slot8;
            var2[2] = var6;
            var6 = _closure1_slot2;
            var2[3] = var6;
            var6 = _closure1_slot9;
            var2[4] = var6;
            var6 = _closure1_slot6;
            var2[5] = var6;
            var5 = _closure1_slot7;
            var2[6] = var5;
            var1 = function() {
                var11 = _closure1_slot13;
                var20 = _closure2_slot0;
                var19 = _closure2_slot1;
                var18 = _closure1_slot3;
                var17 = _closure1_slot5;
                var16 = _closure1_slot8;
                var15 = _closure1_slot2;
                var14 = _closure1_slot9;
                var13 = _closure1_slot6;
                var12 = _closure1_slot7;
                var21 = undefined;
                var1 = var21[var11](var20, var19, var18, var17, var16, var15, var14, var13, var12, var11);
                return var1;
            };
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var5;
    var3['StreamRequestUnfulfillableReason'] = var4;
    var3['canFulfillStreamRequest'] = var2;
    return var1;
})();