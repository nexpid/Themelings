// app/modules/channel/usePrivateChannelWave.native.tsx
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
    var8 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ME;
    var _closure1_slot7 = var7;
    var4 = var4.Routes;
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/usePrivateChannelWave.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrivateChannelWave(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var _closure2_slot0 = var1;
            var7 = _closure1_slot5;
            var3 = var7.useState;
            var2 = false;
            var5 = var3.bind(var7)(var2);
            var3 = _closure1_slot4;
            var9 = undefined;
            var2 = 2;
            var3 = var3.bind(var9)(var5, var2);
            var2 = 0;
            var8 = var3[var2];
            var _closure2_slot1 = var8;
            var2 = 1;
            var2 = var3[var2];
            var _closure2_slot2 = var2;
            var5 = var7.useCallback;
            var3 = _closure1_slot3;
            var2 = function* () {
                var1 = function* anon_0_() {
                    _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                        var3 = _closure2_slot1;
                        if(var3) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                        var6 = _closure2_slot2;
                        var4 = undefined;
                        var3 = true;
                        var3 = var6.bind(var4)(var3);
                        var8 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var3 = 6;
                        var3 = var9[var3];
                        var11 = var8.bind(var4)(var3);
                        var10 = var11.trackWaveCtaClicked;
                        var6 = {};
                        var3 = _closure2_slot0;
                        var12 = var3.id;
                        var6['channelId'] = var12;
                        var12 = 'Messages Tab';
                        var6['source'] = var12;
                        var6 = var10.bind(var11)(var6);
                        var6 = 7;
                        var6 = var9[var6];
                        var8 = var8.bind(var4)(var6);
                        var6 = var8.transitionTo;
                        var11 = _closure1_slot8;
                        var10 = var11.CHANNEL;
                        var9 = _closure1_slot7;
                        var3 = var3.id;
                        var3 = var10.bind(var11)(var9, var3);
                        var3 = var6.bind(var8)(var3);
case 6: // try_start_0
                        var6 = _closure1_slot1;
                        var8 = _closure1_slot2;
                        var3 = 8;
                        var3 = var8[var3];
                        var11 = var6.bind(var4)(var3);
                        var10 = var11.sendStickers;
                        var3 = _closure2_slot0;
                        var16 = var3.id;
                        var8 = {};
                        var3 = _closure1_slot9;
                        var3 = var3.SEND_WAVE;
                        var8['location'] = var3;
                        var15 = ['749054660769218631'];
                        var14 = '';
                        var17 = var11;
                        var13 = var8;
                        var3 = var17[var10](var16, var15, var14, var13, var12);
                        SaveGenerator(address=222);
case 7:
                        return var3;
case 8:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=5);
                        if(var6) { _fun0002_ip = 9; continue _fun0002 }
case 10: // try_end0
                        _fun0002_ip = 11; continue _fun0002;
case 9:
                        return var3;
case 12: // catch_target0
                        CatchBlockStart(arg_register=5);
                        var5 = var6;
                        var6 = var6.ok;
                        var3 = var6;
                        if(var6) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                        var6 = var5.status;
                        var5 = 429;
                        var3 = var5 !== var6;
case 13:
                        if(var3) { _fun0002_ip = 11; continue _fun0002 }
case 15:
                        var8 = _closure1_slot1;
                        var9 = _closure1_slot2;
                        var3 = 9;
                        var3 = var9[var3];
                        var6 = var8.bind(var4)(var3);
                        var5 = var6.open;
                        var3 = {};
                        var10 = 'HANDLE_WAVE_PRESS_TOAST';
                        var3['key'] = var10;
                        var12 = _closure1_slot0;
                        var7 = 10;
                        var10 = var9[var7];
                        var10 = var12.bind(var4)(var10);
                        var11 = var10.intl;
                        var10 = var11.string;
                        var7 = var9[var7];
                        var7 = var12.bind(var4)(var7);
                        var7 = var7.t;
                        var7 = var7.Whhv4w;
                        var7 = var10.bind(var11)(var7);
                        var3['content'] = var7;
                        var7 = 11;
                        var7 = var9[var7];
                        var7 = var8.bind(var4)(var7);
                        var3['icon'] = var7;
                        var3 = var5.bind(var6)(var3);
case 11:
                        var3 = _closure2_slot2;
                        var2 = false;
                        var2 = var3.bind(var4)(var2);
case 4:
                        var2 = undefined;
                        return var2;
case 2:
                        return var1;
                    }
                };
                return var1;
            };
            var3 = var3.bind(var9)(var2);
            var10 = var1.id;
            var2 = new Array(2);
            var2[0] = var10;
            var2[1] = var8;
            var2 = var5.bind(var7)(var3, var2);
            var3 = var1.isDM;
            var3 = var3.bind(var1)();
            if(!var3) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var5 = var1.isSystemDM;
            var5 = var5.bind(var1)();
            var3 = !var5;
case 16:
            if(!var3) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var8 = var1.rawRecipients;
            var7 = var8.some;
            var5 = function(arg1) {
                var1 = arg1;
                var1 = var1.bot;
                return var1;
            };
            var5 = var7.bind(var8)(var5);
            var3 = !var5;
case 18:
            var5 = null;
            var7 = null;
            if(!var3) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var8 = var1.getRecipientId;
            var7 = var8.bind(var1)();
case 20:
            var _closure2_slot3 = var7;
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var7 = 12;
            var7 = var10[var7];
            var12 = var8.bind(var9)(var7);
            var11 = var12.useStateFromStores;
            var13 = _closure1_slot6;
            var7 = new Array(1);
            var7[0] = var13;
            var6 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot3;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0003_ip = 22; continue _fun0003 }
case 23:
                    var4 = _closure1_slot6;
                    var3 = var4.isFriend;
                    var2 = _closure2_slot3;
                    var1 = var3.bind(var4)(var2);
case 22:
                    return var1;
                }
            };
            var7 = var11.bind(var12)(var7, var6);
            var14 = _closure1_slot1;
            var4 = 13;
            var4 = var10[var4];
            var11 = var14.bind(var9)(var4);
            var6 = var11.extractTimestamp;
            var4 = var1.id;
            var6 = var6.bind(var11)(var4);
            var4 = 14;
            var4 = var10[var4];
            var13 = var8.bind(var9)(var4);
            var12 = var13.isWithinInterval;
            var4 = 15;
            var11 = var10[var4];
            var11 = var14.bind(var9)(var11);
            var11 = var11.bind(var9)();
            var4 = var10[var4];
            var4 = var14.bind(var9)(var4);
            var6 = var4.bind(var9)(var6);
            var4 = 1814400000;
            var6 = var12.bind(var13)(var11, var6, var4);
            var4 = 16;
            var4 = var10[var4];
            var8 = var8.bind(var9)(var4);
            var4 = var8.useStrangerDangerWarning;
            var1 = var1.id;
            var4 = var4.bind(var8)(var1);
            var1 = {};
            if(!var3) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var3 = var7;
case 24:
            if(!var3) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            var7 = arg2;
            var3 = var5 == var7;
case 26:
            if(!var3) { _fun0001_ip = 28; continue _fun0001 }
case 29:
            var3 = var6;
case 28:
            if(!var3) { _fun0001_ip = 30; continue _fun0001 }
case 31:
            var3 = var5 == var4;
case 30:
            var1['waveShouldShow'] = var3;
            var1['wavePressed'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();