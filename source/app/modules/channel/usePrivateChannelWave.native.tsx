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
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.ME;
    var _closure1_slot6 = var7;
    var4 = var4.Routes;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageSendLocation;
    var _closure1_slot8 = var4;
    var4 = 12;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/channel/usePrivateChannelWave.native.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function usePrivateChannelWave(arg1, arg2) {
        var6 = arg1;
        var _closure2_slot0 = var6;
        var7 = _closure1_slot5;
        var4 = var7.useState;
        var2 = false;
        var8 = var4.bind(var7)(var2);
        var4 = _closure1_slot4;
        var5 = undefined;
        var2 = 2;
        var4 = var4.bind(var5)(var8, var2);
        var2 = 0;
        var8 = var4[var2];
        var _closure2_slot1 = var8;
        var2 = 1;
        var2 = var4[var2];
        var _closure2_slot2 = var2;
        var4 = var7.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                    var3 = _closure2_slot1;
                    if(var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
                    var6 = _closure2_slot2;
                    var4 = undefined;
                    var3 = true;
                    var3 = var6.bind(var4)(var3);
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var3 = 5;
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
                    var6 = 6;
                    var6 = var9[var6];
                    var8 = var8.bind(var4)(var6);
                    var6 = var8.transitionTo;
                    var11 = _closure1_slot7;
                    var10 = var11.CHANNEL;
                    var9 = _closure1_slot6;
                    var3 = var3.id;
                    var3 = var10.bind(var11)(var9, var3);
                    var3 = var6.bind(var8)(var3);
case 6: // try_start_0
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var3 = 7;
                    var3 = var8[var3];
                    var11 = var6.bind(var4)(var3);
                    var10 = var11.sendStickers;
                    var3 = _closure2_slot0;
                    var16 = var3.id;
                    var8 = {};
                    var3 = _closure1_slot8;
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
                    if(var6) { _fun0001_ip = 9; continue _fun0001 }
case 10: // try_end0
                    _fun0001_ip = 11; continue _fun0001;
case 9:
                    return var3;
case 12: // catch_target0
                    CatchBlockStart(arg_register=5);
                    var5 = var6;
                    var6 = var6.ok;
                    var3 = var6;
                    if(var6) { _fun0001_ip = 13; continue _fun0001 }
case 14:
                    var6 = var5.status;
                    var5 = 429;
                    var3 = var5 !== var6;
case 13:
                    if(var3) { _fun0001_ip = 11; continue _fun0001 }
case 15:
                    var8 = _closure1_slot1;
                    var9 = _closure1_slot2;
                    var3 = 8;
                    var3 = var9[var3];
                    var6 = var8.bind(var4)(var3);
                    var5 = var6.open;
                    var3 = {};
                    var10 = 'HANDLE_WAVE_PRESS_TOAST';
                    var3['key'] = var10;
                    var12 = _closure1_slot0;
                    var7 = 9;
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
                    var7 = 10;
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
        var2 = var2.bind(var5)(var1);
        var9 = var6.id;
        var1 = new Array(2);
        var1[0] = var9;
        var1[1] = var8;
        var2 = var4.bind(var7)(var2, var1);
        var1 = {};
        var4 = _closure1_slot0;
        var7 = _closure1_slot2;
        var3 = 11;
        var3 = var7[var3];
        var5 = var4.bind(var5)(var3);
        var4 = var5.usePrivateChannelWaveEligible;
        var3 = arg2;
        var3 = var4.bind(var5)(var6, var3);
        var1['waveShouldShow'] = var3;
        var1['wavePressed'] = var2;
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();