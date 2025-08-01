// app/modules/guild_settings/native/MembersPruneActionSheet.tsx
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
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/native/MembersPruneActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MembersPruneActionSheet(arg1) {
        var1 = arg1;
        var7 = var1.guild;
        var _closure2_slot0 = var7;
        var1 = var7.id;
        var _closure2_slot1 = var1;
        var6 = _closure1_slot5;
        var1 = var6.useState;
        var13 = 7;
        var1 = var1.bind(var6)(var13);
        var9 = _closure1_slot4;
        var4 = undefined;
        var8 = 2;
        var1 = var9.bind(var4)(var1, var8);
        var3 = 0;
        var17 = var1[var3];
        var _closure2_slot2 = var17;
        var2 = 1;
        var1 = var1[var2];
        var _closure2_slot3 = var1;
        var11 = var6.useState;
        var1 = null;
        var1 = var11.bind(var6)(var1);
        var1 = var9.bind(var4)(var1, var8);
        var18 = var1[var3];
        var1 = var1[var2];
        var _closure2_slot4 = var1;
        var3 = var6.useCallback;
        var2 = _closure1_slot3;
        var1 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 85; continue _fun0001 }
 7:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 4;
                    var2 = var3[var2];
                    var3 = undefined;
                    var7 = var4.bind(var3)(var2);
                    var6 = var7.updateEstimate;
                    var2 = _closure2_slot0;
                    var5 = var2.id;
                    var2 = _closure2_slot2;
                    var2 = var6.bind(var7)(var5, var2);
                    SaveGenerator(address=64);
 62:
                    return var2;
 64:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0001_ip = 82; continue _fun0001 }
 70:
                    var4 = _closure2_slot4;
                    var4 = var4.bind(var3)(var2);
                    return var3;
 82:
                    return var2;
 85:
                    return var1;
                }
            };
            return var1;
        };
        var2 = var2.bind(var4)(var1);
        var1 = new Array(2);
        var1[0] = var17;
        var7 = var7.id;
        var1[1] = var7;
        var1 = var3.bind(var6)(var2, var1);
        var _closure2_slot5 = var1;
        var3 = var6.useEffect;
        var2 = new Array(1);
        var2[0] = var1;
        var1 = function() {
            var2 = _closure2_slot5;
            var1 = undefined;
            var2 = var2.bind(var1)();
            return var1;
        };
        var1 = var3.bind(var6)(var1, var2);
        var3 = _closure1_slot7;
        var12 = _closure1_slot0;
        var9 = _closure1_slot2;
        var1 = 5;
        var1 = var9[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.ActionSheet;
        var1 = {};
        var8 = _closure1_slot6;
        var5 = 6;
        var5 = var9[var5];
        var5 = var12.bind(var4)(var5);
        var6 = var5.BottomSheetTitleHeader;
        var5 = {};
        var7 = var9[var13];
        var7 = var12.bind(var4)(var7);
        var14 = var7.intl;
        var11 = var14.string;
        var7 = var9[var13];
        var7 = var12.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.zbyz7u;
        var7 = var11.bind(var14)(var7);
        var5['title'] = var7;
        var5 = var8.bind(var4)(var6, var5);
        var1['header'] = var5;
        var5 = 8;
        var5 = var9[var5];
        var5 = var12.bind(var4)(var5);
        var6 = var5.TableRadioGroup;
        var5 = {};
        var7 = var9[var13];
        var7 = var12.bind(var4)(var7);
        var14 = var7.intl;
        var11 = var14.string;
        var7 = var9[var13];
        var7 = var12.bind(var4)(var7);
        var7 = var7.t;
        var7 = var7.YccTvL;
        var7 = var11.bind(var14)(var7);
        var5['title'] = var7;
        var5['defaultValue'] = var17;
        var7 = function onChange(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = arg1;
                var2 = _closure2_slot2;
                var2 = var2 !== var3;
                if(!var2) { _fun0002_ip = 27; continue _fun0002 }
 17:
                var5 = _closure2_slot1;
                var4 = null;
                var2 = var4 != var5;
 27:
                if(!var2) { _fun0002_ip = 41; continue _fun0002 }
 30:
                var2 = _closure2_slot3;
                var1 = undefined;
                var1 = var2.bind(var1)(var3);
 41:
                var1 = undefined;
                return var1;
            }
        };
        var5['onChange'] = var7;
        var11 = 9;
        var7 = var9[var11];
        var7 = var12.bind(var4)(var7);
        var14 = var7.TableRadioRow;
        var7 = {};
        var7['value'] = var13;
        var15 = var9[var13];
        var15 = var12.bind(var4)(var15);
        var20 = var15.intl;
        var19 = var20.formatToPlainString;
        var15 = var9[var13];
        var15 = var12.bind(var4)(var15);
        var15 = var15.t;
        var16 = var15.FM1dHR;
        var15 = {};
        var15['days'] = var13;
        var15 = var19.bind(var20)(var16, var15);
        var7['label'] = var15;
        var14 = var8.bind(var4)(var14, var7);
        var7 = new Array(2);
        var7[0] = var14;
        var11 = var9[var11];
        var11 = var12.bind(var4)(var11);
        var14 = var11.TableRadioRow;
        var11 = {};
        var21 = 30;
        var11['value'] = var21;
        var15 = var9[var13];
        var15 = var12.bind(var4)(var15);
        var20 = var15.intl;
        var19 = var20.formatToPlainString;
        var15 = var9[var13];
        var15 = var12.bind(var4)(var15);
        var15 = var15.t;
        var16 = var15.FM1dHR;
        var15 = {};
        var15['days'] = var21;
        var15 = var19.bind(var20)(var16, var15);
        var11['label'] = var15;
        var11 = var8.bind(var4)(var14, var11);
        var7[1] = var11;
        var5['children'] = var7;
        var6 = var3.bind(var4)(var6, var5);
        var5 = new Array(3);
        var5[0] = var6;
        var6 = 10;
        var6 = var9[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {};
        var11 = 'text-sm/medium';
        var6['variant'] = var11;
        var11 = var9[var13];
        var11 = var12.bind(var4)(var11);
        var16 = var11.intl;
        var15 = var16.format;
        var11 = var9[var13];
        var11 = var12.bind(var4)(var11);
        var11 = var11.t;
        var14 = var11.f13az8;
        var11 = {};
        var11['members'] = var18;
        var11['days'] = var17;
        var11 = var15.bind(var16)(var14, var11);
        var6['children'] = var11;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var6 = 11;
        var6 = var9[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Button;
        var6 = {};
        var11 = 'destructive';
        var6['variant'] = var11;
        var10 = function onPress() {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = _closure2_slot1;
                var4 = null;
                var2 = var4 != var2;
                if(!var2) { _fun0003_ip = 24; continue _fun0003 }
 16:
                var3 = _closure2_slot2;
                var2 = var4 != var3;
 24:
                if(!var2) { _fun0003_ip = 94; continue _fun0003 }
 27:
                var3 = _closure1_slot1;
                var4 = _closure1_slot2;
                var2 = 4;
                var5 = var4[var2];
                var2 = undefined;
                var7 = var3.bind(var2)(var5);
                var6 = var7.prune;
                var5 = _closure2_slot1;
                var1 = _closure2_slot2;
                var1 = var6.bind(var7)(var5, var1);
                var1 = 12;
                var1 = var4[var1];
                var2 = var3.bind(var2)(var1);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
 94:
                var1 = undefined;
                return var1;
            }
        };
        var6['onPress'] = var10;
        var10 = var9[var13];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var9[var13];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.2mIlKS;
        var9 = var10.bind(var11)(var9);
        var6['text'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();