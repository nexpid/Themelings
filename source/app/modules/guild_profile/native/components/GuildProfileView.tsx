// app/modules/guild_profile/native/components/GuildProfileView.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var8 = require;
    var14 = metroImportDefault;
    var3 = exports;
    var9 = dependencyMap;
    var _closure1_slot0 = var8;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var9;
    var5 = function getBackgroundForProfile(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var6 = arg2;
            var1 = new Array(2);
            var1[0] = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 5;
            var2 = var5[var2];
            var5 = undefined;
            var7 = var4.bind(var5)(var2);
            var4 = var7.isThemeDark;
            var2 = arg1;
            var2 = var4.bind(var7)(var2);
            var4 = _closure1_slot0;
            var7 = _closure1_slot2;
            var3 = 6;
            var3 = var7[var3];
            var5 = var4.bind(var5)(var3);
            if(var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var5.darkenColor;
            var2 = 0.8;
            var2 = var3.bind(var5)(var6, var2);
            _fun0001_ip = 4; continue _fun0001;
case 2:
            var4 = var5.brightenColor;
            var3 = 0.8;
            var2 = var4.bind(var5)(var6, var3);
case 4:
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot13 = var5;
    var1 = function GuildProfileBackground(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var7 = var1.guildProfile;
            var _closure2_slot0 = var7;
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var3 = 9;
            var3 = var6[var3];
            var4 = undefined;
            var8 = var5.bind(var4)(var3);
            var5 = var8.useStateFromStores;
            var9 = _closure1_slot6;
            var3 = new Array(1);
            var3[0] = var9;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = _closure1_slot6;
                    var4 = var5.getGuild;
                    var2 = _closure2_slot0;
                    var2 = var2.id;
                    var2 = var4.bind(var5)(var2);
                    var4 = null;
                    if(!(var4 == var2)) { _fun0003_ip = 3; continue _fun0003 }
case 5:
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 10;
                    var5 = var5[var4];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var4 = var5.fromGuildProfile;
                    var3 = _closure2_slot0;
                    var2 = var4.bind(var5)(var3);
case 3:
                    var3 = var2.features;
                    var2 = var3.has;
                    var1 = _closure1_slot7;
                    var1 = var1.DISCOVERABLE;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var2 = var5.bind(var8)(var3, var2);
            var5 = _closure1_slot1;
            var3 = 11;
            var3 = var6[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var8 = var3.width;
            var3 = _closure1_slot11;
            var6 = var3.bind(var4)();
            if(!var2) { _fun0002_ip = 6; continue _fun0002 }
case 7:
            var3 = var7.customBanner;
            var2 = null;
            if(!(var2 == var3)) { _fun0002_ip = 8; continue _fun0002 }
case 6:
            var5 = _closure1_slot8;
            var3 = _closure1_slot15;
            var2 = {};
            var2['guildProfile'] = var7;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 8:
            var9 = _closure1_slot1;
            var10 = _closure1_slot2;
            var2 = 12;
            var2 = var10[var2];
            var5 = var9.bind(var4)(var2);
            var3 = var5.getGuildDiscoverySplashSource;
            var2 = {};
            var11 = var7.id;
            var2['id'] = var11;
            var7 = var7.customBanner;
            var2['splash'] = var7;
            var7 = 13;
            var7 = var10[var7];
            var7 = var9.bind(var4)(var7);
            var7 = var7.bind(var4)();
            var7 = var7 * var8;
            var2['size'] = var7;
            var5 = var3.bind(var5)(var2);
            var3 = _closure1_slot8;
            var2 = _closure1_slot5;
            var1 = {};
            var6 = var6.imageBanner;
            var1['style'] = var6;
            var1['source'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot14 = var1;
    var1 = function GuildProfileGradient(arg1) {
        var1 = arg1;
        var10 = var1.guildProfile;
        var1 = _closure1_slot11;
        var4 = undefined;
        var8 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var9 = _closure1_slot2;
        var1 = 14;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var7 = var1.bind(var4)();
        var3 = _closure1_slot0;
        var1 = 15;
        var1 = var9[var1];
        var11 = var3.bind(var4)(var1);
        var6 = var11.useToken;
        var1 = 8;
        var1 = var9[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.colors;
        var1 = var1.BACKGROUND_BASE_LOWEST;
        var6 = var6.bind(var11)(var1);
        var1 = 16;
        var1 = var9[var1];
        var3 = var3.bind(var4)(var1);
        var1 = var3.useProfilePrimaryColor;
        var6 = var1.bind(var3)(var10, var6);
        var3 = _closure1_slot8;
        var1 = 17;
        var1 = var9[var1];
        var2 = var2.bind(var4)(var1);
        var1 = {};
        var8 = var8.colorBanner;
        var1['style'] = var8;
        var8 = _closure1_slot12;
        var8 = var8.START;
        var1['start'] = var8;
        var8 = _closure1_slot12;
        var8 = var8.END;
        var1['end'] = var8;
        var5 = _closure1_slot13;
        var5 = var5.bind(var4)(var7, var6);
        var1['colors'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = function JoinForFullAccessCard() {
        var1 = _closure1_slot11;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var3 = _closure1_slot9;
        var12 = _closure1_slot0;
        var13 = _closure1_slot2;
        var1 = 18;
        var1 = var13[var1];
        var1 = var12.bind(var4)(var1);
        var2 = var1.Card;
        var1 = {'variant': 'secondary', 'border': 'none'};
        var5 = var5.joinForFullAccessCard;
        var1['style'] = var5;
        var10 = _closure1_slot8;
        var6 = 19;
        var5 = var13[var6];
        var5 = var12.bind(var4)(var5);
        var8 = var5.Text;
        var5 = {'variant': 'text-md/semibold', 'color': 'text-default'};
        var9 = 20;
        var11 = var13[var9];
        var11 = var12.bind(var4)(var11);
        var15 = var11.intl;
        var14 = var15.string;
        var11 = var13[var9];
        var11 = var12.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.us0bE8;
        var11 = var14.bind(var15)(var11);
        var5['children'] = var11;
        var8 = var10.bind(var4)(var8, var5);
        var5 = new Array(2);
        var5[0] = var8;
        var8 = _closure1_slot8;
        var6 = var13[var6];
        var6 = var12.bind(var4)(var6);
        var7 = var6.Text;
        var6 = {'variant': 'text-sm/normal', 'color': 'text-muted'};
        var10 = var13[var9];
        var10 = var12.bind(var4)(var10);
        var11 = var10.intl;
        var10 = var11.string;
        var9 = var13[var9];
        var9 = var12.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.fTtTTp;
        var9 = var10.bind(var11)(var9);
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot16 = var1;
    var2 = global;
    var10 = var2.Object;
    var7 = var10.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var10)(var3, var1, var4);
    var1 = 0;
    var7 = var9[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.Image;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var9[var4];
    var4 = var14.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var9[var4];
    var4 = var8.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot7 = var4;
    var12 = 4;
    var4 = var9[var12];
    var4 = var8.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.jsxs;
    var _closure1_slot9 = var7;
    var4 = var4.Fragment;
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var9[var4];
    var10 = var8.bind(var1)(var4);
    var7 = var10.createStyles;
    var4 = {};
    var11 = {};
    var13 = 8;
    var15 = var9[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var15;
    var4['container'] = var11;
    var11 = {'height': 140, 'width': '100%'};
    var4['colorBanner'] = var11;
    var11 = {'height': 140, 'width': '100%', 'objectFit': 'cover'};
    var4['imageBanner'] = var11;
    var11 = {'marginTop': 12, 'paddingHorizontal': 16, 'gap': 16};
    var4['body'] = var11;
    var11 = {'display': 'flex', 'flexDirection': 'row', 'alignItems': 'center', 'gap': 8};
    var4['error'] = var11;
    var11 = {};
    var15 = 160;
    var11['marginTop'] = var15;
    var4['buttonContainer'] = var11;
    var11 = {'paddingHorizontal': 16, 'marginTop': 4294967264, 'display': 'flex', 'flexDirection': 'column', 'gap': 0};
    var4['header'] = var11;
    var11 = {'width': 86, 'height': 86, 'borderRadius': 28.666666666666668, 'backgroundColor': null, 'display': 'flex', 'justifyContent': 'center', 'alignItems': 'center', 'overflow': 'hidden'};
    var13 = var9[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BACKGROUND_BASE_LOW;
    var11['backgroundColor'] = var13;
    var4['avatarBackground'] = var11;
    var11 = {};
    var13 = 24;
    var11['fontSize'] = var13;
    var4['restrictedAcronym'] = var11;
    var11 = {};
    var11['gap'] = var12;
    var4['joinForFullAccessCard'] = var11;
    var4 = var7.bind(var10)(var4);
    var _closure1_slot11 = var4;
    var10 = var2.Object;
    var7 = var10.freeze;
    var2 = {};
    var11 = {'x': 0, 'y': 1};
    var2['START'] = var11;
    var11 = {'x': 1.5, 'y': 0};
    var2['END'] = var11;
    var2 = var7.bind(var10)(var2);
    var _closure1_slot12 = var2;
    var7 = 25;
    var7 = var9[var7];
    var9 = var8.bind(var1)(var7);
    var8 = var9.fileFinishedImporting;
    var7 = 'modules/guild_profile/native/components/GuildProfileView.tsx';
    var7 = var8.bind(var9)(var7);
    var6 = function GuildProfileView(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var2 = arg1;
            var18 = var2.guildProfile;
            var _closure2_slot0 = var18;
            var10 = var2.isLurkerServerPreview;
            var4 = undefined;
            if(!(var10 === var4)) { _fun0004_ip = 9; continue _fun0004 }
case 10:
            var10 = false;
case 9:
            var2 = _closure1_slot11;
            var9 = var2.bind(var4)();
            var5 = _closure1_slot3;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var18;
            var1 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = null;
                    if(!(var1 != var2)) { _fun0005_ip = 11; continue _fun0005 }
case 12:
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.getGuildIconSource;
                    var2 = {};
                    var5 = _closure2_slot0;
                    var6 = var5.id;
                    var2['id'] = var6;
                    var5 = var5.icon;
                    var2['icon'] = var5;
                    var5 = 96;
                    var2['size'] = var5;
                    var5 = true;
                    var2['canAnimate'] = var5;
                    var3 = var3.bind(var4)(var2);
                    var5 = 'number';
                    var4 = typeof var3;
                    var2 = null;
                    if(!(var5 !== var4)) { _fun0005_ip = 13; continue _fun0005 }
case 14:
                    var2 = var3.uri;
case 13:
                    return var2;
case 11:
                    return var1;
                }
            };
            var12 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot9;
            var2 = _closure1_slot4;
            var1 = {};
            var5 = var9.container;
            var1['style'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot14;
            var5 = {};
            var5['guildProfile'] = var18;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(4);
            var5[0] = var6;
            var6 = var10;
            if(!var6) { _fun0004_ip = 15; continue _fun0004 }
case 16:
            var13 = _closure1_slot8;
            var8 = _closure1_slot1;
            var14 = _closure1_slot2;
            var7 = 21;
            var7 = var14[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var6 = var13.bind(var4)(var8, var7);
case 15:
            var5[1] = var6;
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 22;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['profile'] = var18;
            var6['guildIconSource'] = var12;
            var6 = var8.bind(var4)(var7, var6);
            var5[2] = var6;
            var8 = _closure1_slot9;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.body;
            var6['style'] = var9;
            var12 = var18.description;
            var9 = null;
            var12 = var9 != var12;
            if(!var12) { _fun0004_ip = 17; continue _fun0004 }
case 18:
            var9 = var18.description;
            var13 = var9.length;
            var9 = 0;
            var12 = var13 > var9;
case 17:
            if(!var12) { _fun0004_ip = 19; continue _fun0004 }
case 20:
            var14 = _closure1_slot8;
            var13 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 19;
            var9 = var15[var9];
            var9 = var13.bind(var4)(var9);
            var13 = var9.Text;
            var9 = {'variant': 'text-md/medium', 'color': 'text-subtle'};
            var15 = var18.description;
            var9['children'] = var15;
            var12 = var14.bind(var4)(var13, var9);
case 19:
            var9 = new Array(2);
            var9[0] = var12;
            if(var10) { _fun0004_ip = 21; continue _fun0004 }
case 22:
            var13 = _closure1_slot9;
            var12 = _closure1_slot10;
            var10 = {};
            var17 = _closure1_slot8;
            var16 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 23;
            var14 = var19[var14];
            var15 = var16.bind(var4)(var14);
            var14 = {};
            var14['profile'] = var18;
            var15 = var17.bind(var4)(var15, var14);
            var14 = new Array(2);
            var14[0] = var15;
            var17 = _closure1_slot8;
            var15 = 24;
            var15 = var19[var15];
            var16 = var16.bind(var4)(var15);
            var15 = {};
            var15['profile'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[1] = var15;
            var10['children'] = var14;
            var10 = var13.bind(var4)(var12, var10);
            _fun0004_ip = 23; continue _fun0004;
case 21:
            var13 = _closure1_slot8;
            var12 = _closure1_slot16;
            var11 = {};
            var10 = var13.bind(var4)(var12, var11);
case 23:
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var6;
    var3['getBackgroundForProfile'] = var5;
    var3['useStyles'] = var4;
    var3['DiagonalGradient'] = var2;
    return var1;
})();