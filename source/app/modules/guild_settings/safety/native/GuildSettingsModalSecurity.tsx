// app/modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot4 = var8;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.GuildFeatures;
    var _closure1_slot10 = var7;
    var4 = var4.MFALevels;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var8 = var4.jsx;
    var _closure1_slot12 = var8;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var9 = var5.bind(var1)(var4);
    var7 = var9.createStyles;
    var4 = {};
    var10 = {'flex': 1, 'justifyContent': 'space-between', 'paddingTop': 99};
    var4['wrapper'] = var10;
    var10 = {'alignItems': 'center', 'flexDirection': 'column'};
    var4['center'] = var10;
    var10 = {'textAlign': 'center', 'marginBottom': 8};
    var4['label'] = var10;
    var10 = {'width': 295, 'height': 142, 'marginHorizontal': 35};
    var4['image'] = var10;
    var10 = {};
    var11 = 40;
    var10['marginBottom'] = var11;
    var4['infoWrapper'] = var10;
    var10 = {'alignSelf': 'center', 'paddingHorizontal': 16, 'marginTop': 16};
    var4['button'] = var10;
    var4 = var7.bind(var9)(var4);
    var _closure1_slot14 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.NavScrim;
    var4 = {};
    var4 = var8.bind(var1)(var7, var4);
    var _closure1_slot15 = var4;
    var4 = 18;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalSecurity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var9 = var2.contentContainerStyle;
            var2 = _closure1_slot14;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var7 = var5[var2];
            var11 = var3.bind(var4)(var7);
            var10 = var11.useStateFromStores;
            var7 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var7;
            var7 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var10.bind(var11)(var8, var7);
            var _closure2_slot1 = var12;
            var2 = var5[var2];
            var7 = var3.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot9;
                var1 = var2.getProps;
                var1 = var1.bind(var2)();
                var1 = var1.mfaLevel;
                return var1;
            };
            var5 = var5.bind(var7)(var3, var2);
            var3 = _closure1_slot8;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = _closure1_slot11;
            var2 = var2.ELEVATED;
            var23 = var5 === var2;
            var _closure2_slot2 = var23;
            var13 = null;
            var5 = var13 == var3;
            var2 = undefined;
            if(var5) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = var3.mfaEnabled;
case 2:
            var18 = true;
            var22 = var18 === var2;
            if(!var22) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var22 = var13 != var12;
case 4:
            if(!var22) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var2 = _closure1_slot6;
            var22 = var2.bind(var4)(var12, var3);
case 6:
            if(!var22) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var2 = !var23;
            if(!var23) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var7 = var12.features;
            var5 = var7.has;
            var3 = _closure1_slot10;
            var3 = var3.DISCOVERABLE;
            var3 = var5.bind(var7)(var3);
            var2 = !var3;
case 10:
            var22 = var2;
case 8:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var23;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateMFALevel;
                    var1 = {};
                    var6 = _closure2_slot1;
                    var6 = var6.id;
                    var1['guildId'] = var6;
                    var4 = _closure2_slot2;
                    var5 = _closure1_slot11;
                    if(var4) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var4 = var5.ELEVATED;
                    _fun0002_ip = 16; continue _fun0002;
case 14:
                    var4 = var5.NONE;
case 16:
                    var1['level'] = var4;
                    var1 = var2.bind(var3)(var1);
case 12:
                    var1 = undefined;
                    return var1;
                }
            };
            var19 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var24 = 12;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Colors;
            var20 = var1.RED;
            if(var23) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Colors;
            var20 = var1.GREEN;
case 17:
            var3 = _closure1_slot13;
            var27 = _closure1_slot0;
            var16 = _closure1_slot2;
            var1 = 13;
            var1 = var16[var1];
            var1 = var27.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var7 = _closure1_slot4;
            var5 = {};
            var10 = var15.wrapper;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var8 = {};
            var9 = var15.center;
            var8['style'] = var9;
            var14 = _closure1_slot12;
            var11 = 14;
            var9 = var16[var11];
            var9 = var27.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'mobile-text-heading-primary'};
            var17 = var15.label;
            var9['style'] = var17;
            var21 = 15;
            var17 = var16[var21];
            var17 = var27.bind(var4)(var17);
            var26 = var17.intl;
            var25 = var26.string;
            var17 = var16[var21];
            var17 = var27.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Wi9LEV;
            var17 = var25.bind(var26)(var17);
            var9['children'] = var17;
            var10 = var14.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = {};
            var17 = _closure1_slot1;
            var16 = var16[var24];
            var17 = var17.bind(var4)(var16);
            var16 = {};
            var24 = var15.button;
            var16['style'] = var24;
            var27 = _closure1_slot0;
            var24 = _closure1_slot2;
            var25 = var24[var21];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var21];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            if(var23) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var23 = var24.yZcYGa;
            var23 = var25.bind(var26)(var23);
            _fun0001_ip = 21; continue _fun0001;
case 19:
            var24 = var24.MP0Ho+;
            var23 = var25.bind(var26)(var24);
case 21:
            var16['text'] = var23;
            var22 = !var22;
            var16['disabled'] = var22;
            var16['color'] = var20;
            var16['onPress'] = var19;
            var16['shrink'] = var18;
            var16 = var14.bind(var4)(var17, var16);
            var10['children'] = var16;
            var10 = var14.bind(var4)(var7, var10);
            var9[1] = var10;
            var14 = var13 != var12;
            var10 = null;
            if(!var14) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var16 = var12.features;
            var14 = var16.has;
            var12 = _closure1_slot10;
            var12 = var12.DISCOVERABLE;
            var12 = var14.bind(var16)(var12);
            var10 = null;
            if(!var12) { _fun0001_ip = 22; continue _fun0001 }
case 24:
            var13 = _closure1_slot12;
            var18 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var18.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/normal', 'color': 'text-feedback-critical'};
            var16 = var14[var21];
            var16 = var18.bind(var4)(var16);
            var17 = var16.intl;
            var16 = var17.string;
            var14 = var14[var21];
            var14 = var18.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.KG1V/E;
            var14 = var16.bind(var17)(var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
case 22:
            var9[2] = var10;
            var8['children'] = var9;
            var9 = var3.bind(var4)(var7, var8);
            var8 = new Array(2);
            var8[0] = var9;
            var11 = _closure1_slot13;
            var10 = _closure1_slot4;
            var9 = {};
            var12 = var15.center;
            var9['style'] = var12;
            var14 = _closure1_slot12;
            var13 = _closure1_slot5;
            var12 = {};
            var18 = _closure1_slot1;
            var17 = _closure1_slot2;
            var16 = 16;
            var16 = var17[var16];
            var16 = var18.bind(var4)(var16);
            var12['source'] = var16;
            var16 = var15.image;
            var12['style'] = var16;
            var16 = 'contain';
            var12['resizeMode'] = var16;
            var13 = var14.bind(var4)(var13, var12);
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var15 = var15.infoWrapper;
            var13['style'] = var15;
            var18 = _closure1_slot0;
            var15 = 17;
            var15 = var17[var15];
            var15 = var18.bind(var4)(var15);
            var16 = var15.FormHint;
            var15 = {};
            var19 = var17[var21];
            var19 = var18.bind(var4)(var19);
            var20 = var19.intl;
            var19 = var20.format;
            var17 = var17[var21];
            var17 = var18.bind(var4)(var17);
            var17 = var17.t;
            var18 = var17.FK0+iX;
            var17 = {};
            var17 = var19.bind(var20)(var18, var17);
            var15['children'] = var17;
            var15 = var14.bind(var4)(var16, var15);
            var13['children'] = var15;
            var13 = var14.bind(var4)(var10, var13);
            var12[1] = var13;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var8[1] = var9;
            var5['children'] = var8;
            var7 = var3.bind(var4)(var7, var5);
            var5 = new Array(2);
            var5[0] = var7;
            var6 = _closure1_slot15;
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();