// app/modules/user_settings/native/profiles/GuildProfileEmptyState.tsx
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
    var7 = var6[var4];
    var4 = native4;
    var4 = var4.bind(var1)(var7);
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot6 = var7;
    var4 = var4.jsxs;
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'paddingHorizontal': 16, 'alignItems': 'center'};
    var4['container'] = var9;
    var9 = {'marginBottom': 16, 'marginTop': 64, 'textAlign': 'center'};
    var4['image'] = var9;
    var9 = {'textAlign': 'center', 'marginStart': 8, 'marginEnd': 8, 'marginBottom': 8};
    var4['header'] = var9;
    var9 = {'marginTop': 16, 'marginBottom': 12};
    var4['createButton'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot8 = var4;
    var4 = 11;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_settings/native/profiles/GuildProfileEmptyState.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildProfileEmptyState() {
        var1 = _closure1_slot8;
        var4 = undefined;
        var15 = var1.bind(var4)();
        var3 = _closure1_slot7;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var15.container;
        var1['contentContainerStyle'] = var5;
        var8 = _closure1_slot6;
        var6 = _closure1_slot4;
        var5 = {};
        var7 = var15.image;
        var5['style'] = var7;
        var12 = _closure1_slot1;
        var13 = _closure1_slot2;
        var7 = 5;
        var7 = var13[var7];
        var11 = var12.bind(var4)(var7);
        var7 = {};
        var14 = var15.image;
        var7['style'] = var14;
        var7 = var8.bind(var4)(var11, var7);
        var5['children'] = var7;
        var6 = var8.bind(var4)(var6, var5);
        var5 = new Array(5);
        var5[0] = var6;
        var17 = _closure1_slot0;
        var6 = 6;
        var7 = var13[var6];
        var7 = var17.bind(var4)(var7);
        var11 = var7.Text;
        var7 = {'style': null, 'variant': 'heading-xl/semibold', 'color': 'header-primary'};
        var14 = var15.header;
        var7['style'] = var14;
        var14 = 7;
        var16 = var13[var14];
        var16 = var17.bind(var4)(var16);
        var19 = var16.intl;
        var18 = var19.string;
        var16 = var13[var14];
        var16 = var17.bind(var4)(var16);
        var16 = var16.t;
        var16 = var16.Z1OZCQ;
        var16 = var18.bind(var19)(var16);
        var7['children'] = var16;
        var7 = var8.bind(var4)(var11, var7);
        var5[1] = var7;
        var6 = var13[var6];
        var6 = var17.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'style': null, 'variant': 'text-sm/normal', 'color': 'header-secondary'};
        var11 = var15.header;
        var6['style'] = var11;
        var11 = var13[var14];
        var11 = var17.bind(var4)(var11);
        var18 = var11.intl;
        var16 = var18.string;
        var11 = var13[var14];
        var11 = var17.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.UEmBq6;
        var11 = var16.bind(var18)(var11);
        var6['children'] = var11;
        var6 = var8.bind(var4)(var7, var6);
        var5[2] = var6;
        var11 = 8;
        var6 = var13[var11];
        var7 = var12.bind(var4)(var6);
        var6 = {};
        var15 = var15.createButton;
        var6['style'] = var15;
        var15 = var13[var14];
        var15 = var17.bind(var4)(var15);
        var18 = var15.intl;
        var16 = var18.string;
        var15 = var13[var14];
        var15 = var17.bind(var4)(var15);
        var15 = var15.t;
        var15 = var15.6dIB4e;
        var15 = var16.bind(var18)(var15);
        var6['text'] = var15;
        var15 = var13[var11];
        var15 = var12.bind(var4)(var15);
        var15 = var15.Looks;
        var15 = var15.FILLED;
        var6['look'] = var15;
        var15 = var13[var11];
        var15 = var12.bind(var4)(var15);
        var15 = var15.Colors;
        var15 = var15.BRAND;
        var6['color'] = var15;
        var10 = _closure1_slot3;
        var15 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 81; continue _fun0001 }
 7:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 10;
                    var4 = var2[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = 9;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 78; continue _fun0001 }
 60:
                    var5 = var2.default;
                    var4 = var5.openCreateGuildModal;
                    var4 = var4.bind(var5)();
                    return var3;
 78:
                    return var2;
 81:
                    return var1;
                }
            };
            return var1;
        };
        var15 = var10.bind(var4)(var15);
        var6['onPress'] = var15;
        var6 = var8.bind(var4)(var7, var6);
        var5[3] = var6;
        var6 = var13[var11];
        var7 = var12.bind(var4)(var6);
        var6 = {};
        var15 = var13[var14];
        var15 = var17.bind(var4)(var15);
        var16 = var15.intl;
        var15 = var16.string;
        var14 = var13[var14];
        var14 = var17.bind(var4)(var14);
        var14 = var14.t;
        var14 = var14.yRjK4u;
        var14 = var15.bind(var16)(var14);
        var6['text'] = var14;
        var14 = var13[var11];
        var14 = var12.bind(var4)(var14);
        var14 = var14.Looks;
        var14 = var14.FILLED;
        var6['look'] = var14;
        var11 = var13[var11];
        var11 = var12.bind(var4)(var11);
        var11 = var11.Colors;
        var11 = var11.LIGHTGREY;
        var6['color'] = var11;
        var9 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 81; continue _fun0002 }
 7:
                    var5 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 10;
                    var4 = var2[var3];
                    var3 = undefined;
                    var5 = var5.bind(var3)(var4);
                    var4 = 9;
                    var4 = var2[var4];
                    var2 = var2.paths;
                    var2 = var5.bind(var3)(var4, var2);
                    SaveGenerator(address=54);
 52:
                    return var2;
 54:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0002_ip = 78; continue _fun0002 }
 60:
                    var5 = var2.default;
                    var4 = var5.openGuildJoinServerScreen;
                    var4 = var4.bind(var5)();
                    return var3;
 78:
                    return var2;
 81:
                    return var1;
                }
            };
            return var1;
        };
        var9 = var10.bind(var4)(var9);
        var6['onPress'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[4] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();