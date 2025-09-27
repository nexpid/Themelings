// app/modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.isGuildOwnerWithRequiredMfaLevel;
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var4 = var4.jsxs;
    var _closure1_slot13 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'flex': 1, 'justifyContent': 'space-between', 'paddingTop': 99};
    var4['wrapper'] = var9;
    var9 = {'alignItems': 'center', 'flexDirection': 'column'};
    var4['center'] = var9;
    var9 = {'textAlign': 'center', 'marginBottom': 8};
    var4['label'] = var9;
    var9 = {'width': 295, 'height': 142, 'marginHorizontal': 35};
    var4['image'] = var9;
    var9 = {};
    var10 = 40;
    var9['marginBottom'] = var10;
    var4['infoWrapper'] = var9;
    var9 = {'marginTop': 15, 'fontSize': 13};
    var10 = 9;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.TEXT_MUTED;
    var9['color'] = var10;
    var4['info'] = var9;
    var9 = {'alignSelf': 'center', 'paddingHorizontal': 16, 'marginTop': 16};
    var4['button'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot14 = var4;
    var4 = 19;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_settings/safety/native/GuildSettingsModalSecurity.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildSettingsModalSecurity(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var2 = arg1;
            var3 = var2.guildId;
            var _closure2_slot0 = var3;
            var9 = var2.contentContainerStyle;
            var2 = _closure1_slot14;
            var4 = undefined;
            var16 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 10;
            var6 = var5[var2];
            var11 = var3.bind(var4)(var6);
            var10 = var11.useStateFromStores;
            var6 = _closure1_slot7;
            var8 = new Array(1);
            var8[0] = var6;
            var6 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var12 = var10.bind(var11)(var8, var6);
            var _closure2_slot1 = var12;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
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
            var5 = var5.bind(var6)(var3, var2);
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
            if(var5) { _fun0001_ip = 174; continue _fun0001 }
 168:
            var2 = var3.mfaEnabled;
 174:
            var19 = true;
            var22 = var19 === var2;
            if(!var22) { _fun0001_ip = 187; continue _fun0001 }
 183:
            var22 = var13 != var12;
 187:
            if(!var22) { _fun0001_ip = 200; continue _fun0001 }
 190:
            var2 = _closure1_slot6;
            var22 = var2.bind(var4)(var12, var3);
 200:
            if(!var22) { _fun0001_ip = 241; continue _fun0001 }
 203:
            var2 = !var23;
            if(!var23) { _fun0001_ip = 238; continue _fun0001 }
 209:
            var6 = var12.features;
            var5 = var6.has;
            var3 = _closure1_slot10;
            var3 = var3.DISCOVERABLE;
            var3 = var5.bind(var6)(var3);
            var2 = !var3;
 238:
            var22 = var2;
 241:
            var5 = _closure1_slot3;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var12;
            var2[1] = var23;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var2 = _closure2_slot1;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0002_ip = 103; continue _fun0002 }
 13:
                    var3 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 11;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.updateMFALevel;
                    var1 = {};
                    var5 = _closure2_slot1;
                    var5 = var5.id;
                    var1['guildId'] = var5;
                    var5 = _closure2_slot2;
                    var6 = _closure1_slot11;
                    if(var5) { _fun0002_ip = 78; continue _fun0002 }
 70:
                    var5 = var6.ELEVATED;
                    _fun0002_ip = 84; continue _fun0002;
 78:
                    var5 = var6.NONE;
 84:
                    var1['level'] = var5;
                    var4 = _closure2_slot2;
                    var1['isEnabled'] = var4;
                    var1 = var2.bind(var3)(var1);
 103:
                    var1 = undefined;
                    return var1;
                }
            };
            var20 = var3.bind(var5)(var1, var2);
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var24 = 12;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Colors;
            var21 = var1.RED;
            if(var23) { _fun0001_ip = 339; continue _fun0001 }
 310:
            var2 = _closure1_slot1;
            var1 = _closure1_slot2;
            var1 = var1[var24];
            var1 = var2.bind(var4)(var1);
            var1 = var1.Colors;
            var21 = var1.GREEN;
 339:
            var3 = _closure1_slot13;
            var27 = _closure1_slot0;
            var15 = _closure1_slot2;
            var1 = 13;
            var1 = var15[var1];
            var1 = var27.bind(var4)(var1);
            var2 = var1.RedesignCompat;
            var1 = {};
            var6 = _closure1_slot4;
            var5 = {};
            var10 = var16.wrapper;
            var8 = new Array(2);
            var8[0] = var10;
            var8[1] = var9;
            var5['style'] = var8;
            var8 = {};
            var9 = var16.center;
            var8['style'] = var9;
            var14 = _closure1_slot12;
            var11 = 14;
            var9 = var15[var11];
            var9 = var27.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'style': null, 'variant': 'text-md/medium', 'color': 'header-primary'};
            var17 = var16.label;
            var9['style'] = var17;
            var18 = 15;
            var17 = var15[var18];
            var17 = var27.bind(var4)(var17);
            var26 = var17.intl;
            var25 = var26.string;
            var17 = var15[var18];
            var17 = var27.bind(var4)(var17);
            var17 = var17.t;
            var17 = var17.Wi9LER;
            var17 = var25.bind(var26)(var17);
            var9['children'] = var17;
            var10 = var14.bind(var4)(var10, var9);
            var9 = new Array(3);
            var9[0] = var10;
            var10 = {};
            var17 = _closure1_slot1;
            var15 = var15[var24];
            var17 = var17.bind(var4)(var15);
            var15 = {};
            var24 = var16.button;
            var15['style'] = var24;
            var27 = _closure1_slot0;
            var24 = _closure1_slot2;
            var25 = var24[var18];
            var25 = var27.bind(var4)(var25);
            var26 = var25.intl;
            var25 = var26.string;
            var24 = var24[var18];
            var24 = var27.bind(var4)(var24);
            var24 = var24.t;
            if(var23) { _fun0001_ip = 606; continue _fun0001 }
 593:
            var23 = var24.yZcYGR;
            var23 = var25.bind(var26)(var23);
            _fun0001_ip = 617; continue _fun0001;
 606:
            var24 = var24.MP0Ho6;
            var23 = var25.bind(var26)(var24);
 617:
            var15['text'] = var23;
            var22 = !var22;
            var15['disabled'] = var22;
            var15['color'] = var21;
            var15['onPress'] = var20;
            var15['shrink'] = var19;
            var15 = var14.bind(var4)(var17, var15);
            var10['children'] = var15;
            var10 = var14.bind(var4)(var6, var10);
            var9[1] = var10;
            var14 = var13 != var12;
            var10 = null;
            if(!var14) { _fun0001_ip = 800; continue _fun0001 }
 673:
            var15 = var12.features;
            var14 = var15.has;
            var12 = _closure1_slot10;
            var12 = var12.DISCOVERABLE;
            var12 = var14.bind(var15)(var12);
            var10 = null;
            if(!var12) { _fun0001_ip = 800; continue _fun0001 }
 704:
            var13 = _closure1_slot12;
            var19 = _closure1_slot0;
            var14 = _closure1_slot2;
            var11 = var14[var11];
            var11 = var19.bind(var4)(var11);
            var12 = var11.Text;
            var11 = {'variant': 'text-sm/normal', 'color': 'status-danger'};
            var15 = var14[var18];
            var15 = var19.bind(var4)(var15);
            var17 = var15.intl;
            var15 = var17.string;
            var14 = var14[var18];
            var14 = var19.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.KG1V/P;
            var14 = var15.bind(var17)(var14);
            var11['children'] = var14;
            var10 = var13.bind(var4)(var12, var11);
 800:
            var9[2] = var10;
            var8['children'] = var9;
            var8 = var3.bind(var4)(var6, var8);
            var10 = new Array(2);
            var10[0] = var8;
            var13 = _closure1_slot13;
            var12 = _closure1_slot4;
            var11 = {};
            var8 = var16.center;
            var11['style'] = var8;
            var8 = _closure1_slot12;
            var15 = _closure1_slot5;
            var14 = {};
            var19 = _closure1_slot1;
            var9 = _closure1_slot2;
            var17 = 16;
            var17 = var9[var17];
            var17 = var19.bind(var4)(var17);
            var14['source'] = var17;
            var17 = var16.image;
            var14['style'] = var17;
            var17 = 'contain';
            var14['resizeMode'] = var17;
            var15 = var8.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var15 = {};
            var16 = var16.infoWrapper;
            var15['style'] = var16;
            var7 = _closure1_slot0;
            var16 = 17;
            var16 = var9[var16];
            var16 = var7.bind(var4)(var16);
            var17 = var16.FormHint;
            var16 = {};
            var19 = var9[var18];
            var19 = var7.bind(var4)(var19);
            var21 = var19.intl;
            var20 = var21.format;
            var18 = var9[var18];
            var18 = var7.bind(var4)(var18);
            var18 = var18.t;
            var19 = var18.FK0+iY;
            var18 = {};
            var18 = var20.bind(var21)(var19, var18);
            var16['children'] = var18;
            var16 = var8.bind(var4)(var17, var16);
            var15['children'] = var16;
            var15 = var8.bind(var4)(var12, var15);
            var14[1] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var5['children'] = var10;
            var6 = var3.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = 18;
            var6 = var9[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.NavScrim;
            var6 = {};
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();