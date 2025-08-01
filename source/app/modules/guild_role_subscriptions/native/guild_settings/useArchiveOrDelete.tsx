// app/modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var6;
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
    var _closure1_slot4 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.useEffect;
    var _closure1_slot6 = var7;
    var4 = var4.useRef;
    var _closure1_slot7 = var4;
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_role_subscriptions/native/guild_settings/useArchiveOrDelete.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function useArchiveOrDelete(arg1, arg2, arg3, arg4) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var14 = arg1;
            var13 = arg2;
            var9 = arg3;
            var _closure2_slot0 = var14;
            var _closure2_slot1 = var13;
            var _closure2_slot2 = var9;
            var2 = arg4;
            var _closure2_slot3 = var2;
            var11 = _closure1_slot0;
            var12 = _closure1_slot3;
            var2 = 3;
            var3 = var12[var2];
            var10 = undefined;
            var4 = var11.bind(var10)(var3);
            var3 = var4.useSubscriptionListing;
            var4 = var3.bind(var4)(var9);
            var7 = _closure1_slot2;
            var5 = 4;
            var3 = var12[var5];
            var6 = var7.bind(var10)(var3);
            var3 = var6.useEditStateIds;
            var3 = var3.bind(var6)(var13, var14);
            var3 = var3.removeEditStateId;
            var _closure2_slot7 = var3;
            var3 = var12[var2];
            var6 = var11.bind(var10)(var3);
            var3 = var6.useDeleteSubscriptionListing;
            var13 = var3.bind(var6)();
            var3 = var13.submitting;
            var6 = var13.error;
            var13 = var13.deleteSubscriptionListing;
            var _closure2_slot8 = var13;
            var2 = var12[var2];
            var11 = var11.bind(var10)(var2);
            var2 = var11.useArchiveSubscriptionListing;
            var13 = var2.bind(var11)();
            var2 = var13.submitting;
            var11 = var13.error;
            var13 = var13.archiveSubscriptionListing;
            var _closure2_slot9 = var13;
            var13 = _closure1_slot7;
            var13 = var13.bind(var10)(var10);
            var _closure2_slot10 = var13;
            var5 = var12[var5];
            var7 = var7.bind(var10)(var5);
            var5 = var7.useName;
            var9 = var5.bind(var7)(var9);
            var7 = _closure1_slot5;
            var5 = 1;
            var7 = var7.bind(var10)(var9, var5);
            var5 = 0;
            var18 = var7[var5];
            var7 = null;
            var5 = var7 == var4;
            var9 = undefined;
            if(var5) { _fun0001_ip = 253; continue _fun0001 }
 247:
            var9 = var4.archived;
 253:
            var5 = true;
            var5 = var5 === var9;
            var _closure2_slot11 = var5;
            var4 = var10 === var4;
            var _closure2_slot12 = var4;
            if(!(var7 != var6)) { _fun0001_ip = 278; continue _fun0001 }
 275:
            var11 = var6;
 278:
            var _closure2_slot13 = var11;
            if(var5) { _fun0001_ip = 606; continue _fun0001 }
 288:
            if(var4) { _fun0001_ip = 606; continue _fun0001 }
 294:
            var14 = _closure1_slot0;
            var15 = _closure1_slot3;
            var9 = 5;
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var12 = var5.intl;
            var7 = var12.formatToPlainString;
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var6 = var5.OuuIOT;
            var5 = {};
            var5['tierName'] = var18;
            var7 = var7.bind(var12)(var6, var5);
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var12 = var5.intl;
            var6 = var12.string;
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.RL0wjo;
            var6 = var6.bind(var12)(var5);
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var13 = var5.intl;
            var12 = var13.string;
            var5 = var15[var9];
            var5 = var14.bind(var10)(var5);
            var5 = var5.t;
            var5 = var5.5/Jeg4;
            var5 = var12.bind(var13)(var5);
            var12 = var15[var9];
            var12 = var14.bind(var10)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var9];
            var12 = var14.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.N5AIuL;
            var12 = var13.bind(var16)(var12);
            var _closure2_slot4 = var12;
            var12 = var15[var9];
            var12 = var14.bind(var10)(var12);
            var16 = var12.intl;
            var13 = var16.string;
            var12 = var15[var9];
            var12 = var14.bind(var10)(var12);
            var12 = var12.t;
            var12 = var12.TEKiiI;
            var12 = var13.bind(var16)(var12);
            var _closure2_slot5 = var12;
            var12 = var15[var9];
            var12 = var14.bind(var10)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var9 = var15[var9];
            var9 = var14.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9.170XOD;
            var9 = var12.bind(var13)(var9);
            var _closure2_slot6 = var9;
            _fun0001_ip = 956; continue _fun0001;
 606:
            var15 = _closure1_slot0;
            var9 = _closure1_slot3;
            var17 = 5;
            var12 = var9[var17];
            var12 = var15.bind(var10)(var12);
            var16 = var12.intl;
            var14 = var16.formatToPlainString;
            var12 = var9[var17];
            var12 = var15.bind(var10)(var12);
            var12 = var12.t;
            var13 = var12.x2qwWF;
            var12 = {};
            var12['tierName'] = var18;
            var12 = var14.bind(var16)(var13, var12);
            var13 = var9[var17];
            var13 = var15.bind(var10)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var9 = var9[var17];
            var9 = var15.bind(var10)(var9);
            var9 = var9.t;
            var9 = var9.GMtG6u;
            var9 = var13.bind(var14)(var9);
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var10)(var13);
            var13 = var13.t;
            if(var4) { _fun0001_ip = 776; continue _fun0001 }
 761:
            var4 = var13.Y4KjUF;
            var4 = var14.bind(var15)(var4);
            _fun0001_ip = 789; continue _fun0001;
 776:
            var13 = var13.DHWKJS;
            var4 = var14.bind(var15)(var13);
 789:
            var16 = _closure1_slot0;
            var13 = _closure1_slot3;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var14 = var14.t;
            var14 = var14.4H6RLi;
            var14 = var15.bind(var18)(var14);
            _closure2_slot4 = var14;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var18 = var14.intl;
            var15 = var18.string;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var14 = var14.t;
            var14 = var14.uG6b19;
            var14 = var15.bind(var18)(var14);
            _closure2_slot5 = var14;
            var14 = var13[var17];
            var14 = var16.bind(var10)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var13[var17];
            var13 = var16.bind(var10)(var13);
            var13 = var13.t;
            var13 = var13.JoCdPD;
            var13 = var14.bind(var15)(var13);
            _closure2_slot6 = var13;
            var5 = var4;
            var7 = var12;
            var6 = var9;
 956:
            var4 = function() {
                var4 = _closure1_slot4;
                var3 = undefined;
                var2 = function* () {
                    var1 = function* anon_0_() {
                        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                            StartGenerator();
                            ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                            if(var2) { _fun0002_ip = 314; continue _fun0002 }
 10:
                            var9 = _closure1_slot1;
                            var10 = _closure1_slot3;
                            var2 = 6;
                            var2 = var10[var2];
                            var3 = undefined;
                            var7 = var9.bind(var3)(var2);
                            var5 = var7.confirm;
                            var2 = {};
                            var8 = _closure2_slot4;
                            var2['title'] = var8;
                            var8 = _closure2_slot5;
                            var2['body'] = var8;
                            var8 = _closure2_slot6;
                            var2['confirmText'] = var8;
                            var8 = 7;
                            var8 = var10[var8];
                            var8 = var9.bind(var3)(var8);
                            var8 = var8.Colors;
                            var8 = var8.RED;
                            var2['confirmColor'] = var8;
                            var2 = var5.bind(var7)(var2);
                            SaveGenerator(address=109);
 107:
                            return var2;
 109:
                            ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                            if(var5) { _fun0002_ip = 311; continue _fun0002 }
 118:
                            if(!var2) { _fun0002_ip = 308; continue _fun0002 }
 124:
                            var5 = _closure2_slot12;
                            if(var5) { _fun0002_ip = 271; continue _fun0002 }
 134:
                            var5 = _closure2_slot11;
                            var7 = _closure1_slot1;
                            var8 = _closure1_slot3;
                            var6 = 8;
                            var6 = var8[var6];
                            var10 = var7.bind(var3)(var6);
                            var9 = _closure2_slot1;
                            var7 = null;
                            var8 = var7 != var9;
                            var6 = 'group listing id cannot be null';
                            var6 = var10.bind(var3)(var8, var6);
                            if(var5) { _fun0002_ip = 215; continue _fun0002 }
 183:
                            var8 = _closure2_slot9;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var5 = var8.bind(var3)(var6, var9, var5);
                            SaveGenerator(address=206);
 204:
                            return var5;
 206:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(!var6) { _fun0002_ip = 308; continue _fun0002 }
 212:
                            return var5;
 215:
                            var8 = _closure2_slot8;
                            var6 = _closure2_slot0;
                            var5 = _closure2_slot2;
                            var5 = var8.bind(var3)(var6, var9, var5);
                            SaveGenerator(address=238);
 236:
                            return var5;
 238:
                            ResumeGenerator(result_out_reg=4, return_bool_out_reg=5);
                            if(var6) { _fun0002_ip = 268; continue _fun0002 }
 244:
                            var6 = _closure2_slot3;
                            if(!(var7 != var6)) { _fun0002_ip = 308; continue _fun0002 }
 252:
                            var7 = _closure2_slot3;
                            var6 = var7.goBack;
                            var6 = var6.bind(var7)();
                            _fun0002_ip = 308; continue _fun0002;
 268:
                            return var5;
 271:
                            var6 = _closure2_slot7;
                            var5 = _closure2_slot2;
                            var5 = var6.bind(var3)(var5);
                            var6 = _closure2_slot3;
                            var5 = null;
                            if(!(var5 != var6)) { _fun0002_ip = 308; continue _fun0002 }
 294:
                            var5 = _closure2_slot3;
                            var4 = var5.goBack;
                            var4 = var4.bind(var5)();
 308:
                            return var3;
 311:
                            return var2;
 314:
                            return var1;
                        }
                    };
                    return var1;
                };
                var2 = var4.bind(var3)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var1 = undefined;
                    var4 = _closure3_slot0;
                    var3 = var4.apply;
                    var1 = arguments;
                    var2 = var1;
                    var1 = this;
                    var1 = var3.bind(var4)(var1, var2);
                    return var1;
                };
                return var1;
            };
            var4 = var4.bind(var10)();
            var9 = _closure1_slot6;
            var8 = new Array(1);
            var8[0] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = _closure2_slot10;
                    var5 = var1.current;
                    var4 = _closure2_slot13;
                    var1 = undefined;
                    var3 = undefined;
                    if(!(var5 !== var4)) { _fun0003_ip = 28; continue _fun0003 }
 24:
                    var3 = _closure2_slot13;
 28:
                    var4 = null;
                    if(!(var4 != var3)) { _fun0003_ip = 129; continue _fun0003 }
 34:
                    var2 = _closure2_slot10;
                    var2['current'] = var3;
                    var4 = _closure1_slot2;
                    var8 = _closure1_slot3;
                    var3 = 9;
                    var3 = var8[var3];
                    var4 = var4.bind(var1)(var3);
                    var3 = var4.presentFailedToast;
                    var7 = _closure1_slot0;
                    var2 = 5;
                    var5 = var8[var2];
                    var5 = var7.bind(var1)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var8[var2];
                    var2 = var7.bind(var1)(var2);
                    var2 = var2.t;
                    var2 = var2.R0RpRU;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
 129:
                    return var1;
                }
            };
            var1 = var9.bind(var10)(var1, var8);
            var1 = {};
            var1['headerText'] = var7;
            var1['buttonText'] = var6;
            var1['descriptionText'] = var5;
            var1['handleArchiveOrDelete'] = var4;
            var1['deleting'] = var3;
            var1['archiving'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();