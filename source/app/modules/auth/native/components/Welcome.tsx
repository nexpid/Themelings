// app/modules/auth/native/components/Welcome.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function InviteCard(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var2 = var1.invite;
            var7 = var1.style;
            var1 = _closure1_slot23;
            var4 = undefined;
            var9 = var1.bind(var4)();
            var1 = var2.guild;
            var10 = var2.inviter;
            var3 = var2.channel;
            var5 = var2.state;
            var2 = _closure1_slot17;
            var2 = var2.RESOLVED;
            if(!(var5 === var2)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var2 = null;
            if(!(var2 == var1)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(!(var2 == var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(!(var2 != var10)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var6 = _closure1_slot20;
            var13 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 18;
            var3 = var11[var3];
            var3 = var13.bind(var4)(var3);
            var5 = var3.Avatar;
            var3 = {};
            var8 = _closure1_slot11;
            var14 = var8.prototype;
            var14 = Object.create(var14, {constructor: {value: var8}});
            var20 = var14;
            var19 = var10;
            var8 = new var20[var8](var19, var18);
            var8 = var8 instanceof Object ? var8 : var14;
            var3['user'] = var8;
            var3['guildId'] = var4;
            var6 = var6.bind(var4)(var5, var3);
            var3 = 16;
            var5 = var11[var3];
            var5 = var13.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var3 = var11[var3];
            var3 = var13.bind(var4)(var3);
            var3 = var3.t;
            var3 = var3["+ITYkQ"];
            var17 = var5.bind(var8)(var3);
            var8 = _closure1_slot1;
            var3 = 19;
            var3 = var11[var3];
            var11 = var8.bind(var4)(var3);
            var8 = var11.getFormattedName;
            var3 = true;
            var13 = var8.bind(var11)(var10, var3);
            _fun0001_ip = 10; continue _fun0001;
case 8:
            return var2;
case 6:
            var8 = _closure1_slot1;
            var11 = _closure1_slot2;
            var3 = 17;
            var3 = var11[var3];
            var5 = var8.bind(var4)(var3);
            var3 = var2 != var10;
            var2 = 'Null inviter';
            var2 = var5.bind(var4)(var3, var2);
            var5 = _closure1_slot20;
            var15 = _closure1_slot0;
            var2 = 18;
            var2 = var11[var2];
            var2 = var15.bind(var4)(var2);
            var3 = var2.Avatar;
            var2 = {};
            var14 = _closure1_slot11;
            var16 = var14.prototype;
            var16 = Object.create(var16, {constructor: {value: var14}});
            var20 = var16;
            var19 = var10;
            var14 = new var20[var14](var19, var18);
            var14 = var14 instanceof Object ? var14 : var16;
            var2['user'] = var14;
            var2['guildId'] = var4;
            var6 = var5.bind(var4)(var3, var2);
            var2 = 16;
            var3 = var11[var2];
            var3 = var15.bind(var4)(var3);
            var14 = var3.intl;
            var3 = var14.string;
            var2 = var11[var2];
            var2 = var15.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2.OsdY8B;
            var17 = var3.bind(var14)(var2);
            var2 = 19;
            var2 = var11[var2];
            var8 = var8.bind(var4)(var2);
            var2 = var8.getFormattedName;
            var13 = var2.bind(var8)(var10);
            _fun0001_ip = 10; continue _fun0001;
case 4:
            var5 = _closure1_slot20;
            var3 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 15;
            var2 = var11[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['guild'] = var1;
            var6 = var5.bind(var4)(var3, var2);
            var10 = _closure1_slot0;
            var2 = 16;
            var5 = var11[var2];
            var5 = var10.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.string;
            var2 = var11[var2];
            var2 = var10.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2["3rE1P8"];
            var17 = var5.bind(var8)(var2);
            var13 = var1.name;
case 10:
            var3 = _closure1_slot21;
            var2 = _closure1_slot4;
            var1 = {};
            var8 = var9.container;
            var5 = new Array(2);
            var5[0] = var8;
            var5[1] = var7;
            var1['style'] = var5;
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot4;
            var6 = {};
            var9 = var9.text;
            var6['style'] = var9;
            var16 = _closure1_slot20;
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 20;
            var9 = var14[var10];
            var9 = var11.bind(var4)(var9);
            var15 = var9.Text;
            var9 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
            var9['children'] = var17;
            var15 = var16.bind(var4)(var15, var9);
            var9 = new Array(2);
            var9[0] = var15;
            var12 = _closure1_slot20;
            var10 = var14[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
case 2:
            var1 = null;
            return var1;
        }
    };
    var _closure1_slot24 = var1;
    var1 = function GuildTemplateCard(arg1) {
        var1 = arg1;
        var13 = var1.guildTemplate;
        var6 = var1.style;
        var1 = _closure1_slot23;
        var4 = undefined;
        var9 = var1.bind(var4)();
        var3 = _closure1_slot21;
        var2 = _closure1_slot4;
        var1 = {};
        var7 = var9.container;
        var5 = new Array(2);
        var5[0] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var7 = _closure1_slot20;
        var6 = _closure1_slot5;
        var5 = {};
        var10 = _closure1_slot1;
        var14 = _closure1_slot2;
        var8 = 21;
        var8 = var14[var8];
        var8 = var10.bind(var4)(var8);
        var5['source'] = var8;
        var6 = var7.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var8 = _closure1_slot21;
        var7 = _closure1_slot4;
        var6 = {};
        var9 = var9.text;
        var6['style'] = var9;
        var16 = _closure1_slot20;
        var11 = _closure1_slot0;
        var10 = 20;
        var9 = var14[var10];
        var9 = var11.bind(var4)(var9);
        var15 = var9.Text;
        var9 = {'variant': 'text-sm/medium', 'color': 'text-subtle'};
        var17 = 16;
        var18 = var14[var17];
        var18 = var11.bind(var4)(var18);
        var19 = var18.intl;
        var18 = var19.string;
        var17 = var14[var17];
        var17 = var11.bind(var4)(var17);
        var17 = var17.t;
        var17 = var17.QzUORX;
        var17 = var18.bind(var19)(var17);
        var9['children'] = var17;
        var15 = var16.bind(var4)(var15, var9);
        var9 = new Array(2);
        var9[0] = var15;
        var12 = _closure1_slot20;
        var10 = var14[var10];
        var10 = var11.bind(var4)(var10);
        var11 = var10.Text;
        var10 = {'variant': 'text-md/semibold', 'color': 'mobile-text-heading-primary'};
        var13 = var13.name;
        var10['children'] = var13;
        var10 = var12.bind(var4)(var11, var10);
        var9[1] = var10;
        var6['children'] = var9;
        var6 = var8.bind(var4)(var7, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot25 = var1;
    var1 = function Centerpiece(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var22 = var1.invite;
            var18 = var1.guildTemplate;
            var9 = var1.inlineButtons;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 22;
            var1 = var3[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var20 = var1.bind(var4)();
            var1 = _closure1_slot22;
            var25 = var1.bind(var4)(var20);
            var2 = _closure1_slot0;
            var1 = 23;
            var1 = var3[var1];
            var12 = var2.bind(var4)(var1);
            var14 = null;
            var19 = var14 != var22;
            var16 = var14 != var18;
            if(!var16) { _fun0002_ip = 11; continue _fun0002 }
case 9:
            var2 = var18.state;
            var1 = _closure1_slot18;
            var1 = var1.RESOLVED;
            var16 = var2 === var1;
case 11:
            var3 = _closure1_slot20;
            var2 = _closure1_slot4;
            var1 = {};
            var6 = var25.centerpieceContainer;
            var5 = new Array(1);
            var5[0] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot21;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = false;
            var5['alwaysBounceVertical'] = var8;
            var8 = var25.scrollViewContainer;
            var5['contentContainerStyle'] = var8;
            var11 = _closure1_slot20;
            var10 = _closure1_slot5;
            var8 = {};
            var13 = var25.logo;
            var8['style'] = var13;
            var8['source'] = var12;
            var10 = var11.bind(var4)(var10, var8);
            var8 = new Array(3);
            var8[0] = var10;
            var12 = _closure1_slot21;
            var11 = _closure1_slot4;
            var10 = {};
            var24 = _closure1_slot20;
            var17 = _closure1_slot0;
            var13 = _closure1_slot2;
            var23 = 20;
            var13 = var13[var23];
            var13 = var17.bind(var4)(var13);
            var21 = var13.Heading;
            var13 = {'style': null, 'lineClamp': null, 'variant': 'display-md', 'color': 'text-overlay-light', 'maxFontSizeMultiplier': 1};
            var17 = var25.header;
            var13['style'] = var17;
            var17 = 2;
            if(!var20) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var17 = 1;
case 12:
            var13['lineClamp'] = var17;
            var20 = _closure1_slot0;
            var17 = _closure1_slot2;
            var27 = 16;
            var26 = var17[var27];
            var26 = var20.bind(var4)(var26);
            var29 = var26.intl;
            var28 = var29.string;
            var26 = var17[var27];
            var26 = var20.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26["3S2xmm"];
            var26 = var28.bind(var29)(var26);
            var13['children'] = var26;
            var21 = var24.bind(var4)(var21, var13);
            var13 = new Array(4);
            var13[0] = var21;
            var21 = _closure1_slot20;
            var17 = var17[var23];
            var17 = var20.bind(var4)(var17);
            var20 = var17.Text;
            var17 = {'variant': 'text-md/medium', 'color': 'text-overlay-light', 'style': null, 'maxFontSizeMultiplier': 3};
            var24 = var25.subHeader;
            var23 = new Array(2);
            var23[0] = var24;
            if(var19) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var24 = null;
            if(!var16) { _fun0002_ip = 16; continue _fun0002 }
case 14:
            var24 = var25.subHeaderWithInvite;
case 16:
            var23[1] = var24;
            var17['style'] = var23;
            var26 = _closure1_slot0;
            var23 = _closure1_slot2;
            var24 = var23[var27];
            var24 = var26.bind(var4)(var24);
            var25 = var24.intl;
            var24 = var25.string;
            var23 = var23[var27];
            var23 = var26.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.Gtcthl;
            var23 = var24.bind(var25)(var23);
            var17['children'] = var23;
            var17 = var21.bind(var4)(var20, var17);
            var13[1] = var17;
            var17 = null;
            if(!var19) { _fun0002_ip = 17; continue _fun0002 }
case 18:
            var21 = _closure1_slot20;
            var20 = _closure1_slot24;
            var19 = {};
            var19['invite'] = var22;
            var17 = var21.bind(var4)(var20, var19);
case 17:
            var13[2] = var17;
            var14 = null;
            if(!var16) { _fun0002_ip = 19; continue _fun0002 }
case 20:
            var17 = _closure1_slot20;
            var16 = _closure1_slot25;
            var15 = {};
            var15['guildTemplate'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 19:
            var13[3] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var8[1] = var10;
            var8[2] = var9;
            var5['children'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot26 = var1;
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
    var7 = var4.Image;
    var _closure1_slot5 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot6 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot9 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot12 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot13 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot14 = var7;
    var7 = var4.StorageKeys;
    var _closure1_slot15 = var7;
    var7 = var4.AuthStates;
    var _closure1_slot16 = var7;
    var4 = var4.InviteStates;
    var _closure1_slot17 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildTemplateStates;
    var _closure1_slot18 = var4;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.InviteTypes;
    var _closure1_slot19 = var4;
    var4 = 12;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot20 = var7;
    var4 = var4.jsxs;
    var _closure1_slot21 = var4;
    var4 = 13;
    var7 = var6[var4];
    var9 = var5.bind(var1)(var7);
    var8 = var9.createStyles;
    var7 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = {};
            var3 = 16;
            var2 = {'height': '100%', 'flex': 1, 'padding': 16};
            var1['container'] = var2;
            var2 = {'flex': 0, 'width': 93, 'height': 70, 'tintColor': 'white', 'alignSelf': 'center', 'marginBottom': 24};
            var1['logo'] = var2;
            var2 = {'flexShrink': 0, 'flexGrow': 1, 'justifyContent': 'center'};
            var1['scrollViewContainer'] = var2;
            var2 = {'textAlign': 'center', 'marginBottom': 8, 'textTransform': 'uppercase'};
            var1['header'] = var2;
            var2 = {'fontSize': 18, 'textAlign': 'center', 'alignSelf': 'center', 'maxWidth': null, 'marginBottom': 24, 'marginHorizontal': 16};
            var4 = 300;
            var5 = arg1;
            if(!var5) { _fun0003_ip = 21; continue _fun0003 }
case 22:
            var4 = 480;
case 21:
            var2['maxWidth'] = var4;
            var1['subHeader'] = var2;
            var2 = {};
            var2['marginBottom'] = var3;
            var1['subHeaderWithInvite'] = var2;
            var2 = {'flexGrow': 1, 'flexShrink': 1, 'justifyContent': 'center'};
            var1['centerpieceContainer'] = var2;
            var2 = {'paddingHorizontal': 28, 'maxWidth': 480, 'alignSelf': 'center', 'width': '100%'};
            var1['buttonContainer'] = var2;
            return var1;
        }
    };
    var7 = var8.bind(var9)(var7);
    var _closure1_slot22 = var7;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'padding': 16, 'flexDirection': 'row'};
    var11 = 14;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWEST;
    var9['backgroundColor'] = var10;
    var10 = 16;
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.radii;
    var11 = var11.sm;
    var9['borderRadius'] = var11;
    var4['container'] = var9;
    var9 = {};
    var9['marginLeft'] = var10;
    var4['text'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot23 = var4;
    var4 = 40;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/auth/native/components/Welcome.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function Welcome() {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var2 = 22;
            var2 = var8[var2];
            var4 = undefined;
            var2 = var6.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var2 = _closure1_slot22;
            var9 = var2.bind(var4)(var10);
            var7 = _closure1_slot0;
            var2 = 24;
            var2 = var8[var2];
            var3 = var7.bind(var4)(var2);
            var2 = var3.useNavigation;
            var2 = var2.bind(var3)();
            var _closure2_slot0 = var2;
            var2 = 25;
            var2 = var8[var2];
            var2 = var6.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var17 = var2.top;
            var13 = var2.bottom;
            var5 = 26;
            var2 = var8[var5];
            var12 = var7.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot13;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot13;
                var1 = var2.getDisplayedInviteCode;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var11.bind(var12)(var3, var2);
            var _closure2_slot1 = var2;
            var2 = var8[var5];
            var12 = var7.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot12;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var3 = var1 != var3;
                    if(!var3) { _fun0005_ip = 23; continue _fun0005 }
case 24:
                    var4 = _closure1_slot12;
                    var3 = var4.getInvite;
                    var2 = _closure2_slot1;
                    var1 = var3.bind(var4)(var2);
case 23:
                    return var1;
                }
            };
            var15 = var11.bind(var12)(var3, var2);
            var _closure2_slot2 = var15;
            var2 = var8[var5];
            var12 = var7.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var1 = var3.getDisplayedGuildTemplateCode;
                var2 = var1.bind(var3)();
                var1 = var3.getGuildTemplate;
                var1 = var1.bind(var3)(var2);
                return var1;
            };
            var14 = var11.bind(var12)(var3, var2);
            var2 = var8[var5];
            var12 = var7.bind(var4)(var2);
            var11 = var12.useStateFromStores;
            var2 = _closure1_slot7;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot7;
                var1 = var2.isUnderageAnonymous;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var11.bind(var12)(var3, var2);
            var _closure2_slot3 = var2;
            var2 = var8[var5];
            var16 = var7.bind(var4)(var2);
            var12 = var16.useStateFromStores;
            var3 = _closure1_slot10;
            var11 = new Array(1);
            var11[0] = var3;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getHasLoggedInAccounts;
                var1 = var1.bind(var2)();
                return var1;
            };
            var2 = var12.bind(var16)(var11, var2);
            var5 = var8[var5];
            var11 = var7.bind(var4)(var5);
            var7 = var11.useStateFromStores;
            var5 = new Array(1);
            var5[0] = var3;
            var3 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCanUseMultiAccountMobile;
                var1 = var1.bind(var2)();
                return var1;
            };
            var3 = var7.bind(var11)(var5, var3);
            var5 = 27;
            var5 = var8[var5];
            var7 = var6.bind(var4)(var5);
            var5 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var2 = 28;
                    var5 = var4[var2];
                    var1 = undefined;
                    var6 = var3.bind(var1)(var5);
                    var5 = var6.trackAppUIViewed;
                    var5 = var5.bind(var6)();
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.trackAppLaunchCompleted;
                    var2 = var2.bind(var3)();
                    var2 = _closure2_slot2;
                    var8 = null;
                    var2 = var8 != var2;
                    var6 = null;
                    if(!var2) { _fun0006_ip = 11; continue _fun0006 }
case 25:
                    var2 = _closure2_slot2;
                    var2 = var2.type;
                    var2 = var8 != var2;
                    var6 = null;
                    if(!var2) { _fun0006_ip = 11; continue _fun0006 }
case 26:
                    var3 = _closure1_slot19;
                    var2 = _closure2_slot2;
                    var2 = var2.type;
                    var6 = var3[var2];
case 11:
                    var3 = _closure1_slot1;
                    var12 = _closure1_slot2;
                    var2 = 29;
                    var2 = var12[var2];
                    var5 = var3.bind(var1)(var2);
                    var4 = var5.track;
                    var2 = _closure1_slot14;
                    var3 = var2.APP_LANDING_VIEWED;
                    var2 = {};
                    var11 = _closure1_slot0;
                    var10 = 30;
                    var10 = var12[var10];
                    var10 = var11.bind(var1)(var10);
                    var11 = var10.Storage;
                    var10 = var11.get;
                    var9 = _closure1_slot15;
                    var9 = var9.LOGOUT_TIMESTAMP_KEY;
                    var9 = var10.bind(var11)(var9);
                    var2['last_logout_ts'] = var9;
                    var2['invite_type'] = var6;
                    var6 = _closure2_slot2;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var9 = _closure2_slot2;
                    var9 = var9.guild;
                    var10 = var8 == var9;
                    var6 = undefined;
                    if(var10) { _fun0006_ip = 27; continue _fun0006 }
case 29:
                    var6 = var9.id;
case 27:
                    var2['guild_id'] = var6;
                    var6 = _closure2_slot2;
                    var9 = var8 == var6;
                    var6 = undefined;
                    if(var9) { _fun0006_ip = 30; continue _fun0006 }
case 31:
                    var9 = _closure2_slot2;
                    var9 = var9.channel;
                    var10 = var8 == var9;
                    var6 = undefined;
                    if(var10) { _fun0006_ip = 30; continue _fun0006 }
case 32:
                    var6 = var9.id;
case 30:
                    var2['channel_id'] = var6;
                    var6 = _closure2_slot2;
                    var8 = var8 == var6;
                    var6 = undefined;
                    if(var8) { _fun0006_ip = 33; continue _fun0006 }
case 34:
                    var7 = _closure2_slot2;
                    var6 = var7.code;
case 33:
                    var2['invite_code'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var5 = var7.bind(var4)(var5);
            var7 = _closure1_slot3;
            var12 = var7.useEffect;
            var11 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 31;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getLocationMetadata;
                var2 = var2.bind(var3)();
                return var1;
            };
            var5 = new Array(0);
            var5 = var12.bind(var7)(var11, var5);
            var5 = 32;
            var5 = var8[var5];
            var6 = var6.bind(var4)(var5);
            var5 = _closure1_slot8;
            var5 = var5.hasLoadedExperiments;
            var5 = var6.bind(var4)(var5);
            var6 = var7.useEffect;
            var5 = function() {
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            var6 = var7.useEffect;
            var5 = function() {
                var1 = undefined;
                return var1;
            };
            var5 = var6.bind(var7)(var5);
            if(!var3) { _fun0004_ip = 35; continue _fun0004 }
case 36:
            if(var2) { _fun0004_ip = 37; continue _fun0004 }
case 35:
            var5 = _closure1_slot20;
            var3 = _closure1_slot4;
            var2 = {};
            var6 = var9.buttonContainer;
            var2['style'] = var6;
            var8 = _closure1_slot21;
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var6 = 35;
            var6 = var19[var6];
            var6 = var18.bind(var4)(var6);
            var7 = var6.ButtonGroup;
            var6 = {};
            var20 = _closure1_slot20;
            var12 = 36;
            var11 = var19[var12];
            var11 = var18.bind(var4)(var11);
            var16 = var11.Button;
            var11 = {'size': 'lg', 'variant': 'primary-overlay'};
            var21 = function handlePressRegister() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0007_ip = 38; continue _fun0007 }
case 39:
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 34;
                    var3 = var6[var3];
                    var5 = undefined;
                    var7 = var4.bind(var5)(var3);
                    var4 = var7.getNextAuthState;
                    var3 = _closure1_slot16;
                    var3 = var3.WELCOME;
                    var7 = var4.bind(var7)(var3);
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var3 = var3.bind(var4)(var7);
                    var4 = _closure1_slot1;
                    var3 = 29;
                    var3 = var6[var3];
                    var5 = var4.bind(var5)(var3);
                    var4 = var5.track;
                    var3 = _closure1_slot14;
                    var3 = var3.REGISTER_VIEWED;
                    var3 = var4.bind(var5)(var3);
                    _fun0007_ip = 40; continue _fun0007;
case 38:
                    var4 = _closure2_slot0;
                    var3 = var4.push;
                    var1 = _closure1_slot16;
                    var2 = var1.AGE_GATE_UNDERAGE;
                    var1 = {};
                    var5 = true;
                    var1['fromRegister'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 40:
                    var1 = undefined;
                    return var1;
                }
            };
            var11['onPress'] = var21;
            var21 = 16;
            var23 = var19[var21];
            var23 = var18.bind(var4)(var23);
            var25 = var23.intl;
            var24 = var25.string;
            var23 = var19[var21];
            var23 = var18.bind(var4)(var23);
            var23 = var23.t;
            var23 = var23.pV8xeR;
            var23 = var24.bind(var25)(var23);
            var11['text'] = var23;
            var16 = var20.bind(var4)(var16, var11);
            var11 = new Array(2);
            var11[0] = var16;
            var20 = _closure1_slot20;
            var12 = var19[var12];
            var12 = var18.bind(var4)(var12);
            var16 = var12.Button;
            var12 = {'size': 'lg', 'variant': 'secondary-overlay'};
            var22 = function handlePressLogin() {
                var4 = _closure2_slot0;
                var3 = var4.push;
                var1 = _closure1_slot16;
                var1 = var1.LOGIN;
                var1 = var3.bind(var4)(var1);
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 29;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot14;
                var3 = var2.LOGIN_VIEWED;
                var2 = {};
                var6 = 'welcome';
                var2['source'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var12['onPress'] = var22;
            var22 = var19[var21];
            var22 = var18.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var21 = var19[var21];
            var21 = var18.bind(var4)(var21);
            var21 = var21.t;
            var21 = var21.dKhVQN;
            var21 = var22.bind(var23)(var21);
            var12['text'] = var21;
            var12 = var20.bind(var4)(var16, var12);
            var11[1] = var12;
            var6['children'] = var11;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var11 = var5.bind(var4)(var3, var2);
            var5 = _closure1_slot20;
            var2 = 37;
            var2 = var19[var2];
            var2 = var18.bind(var4)(var2);
            var3 = var2.ThemeContextProvider;
            var2 = {};
            var6 = 'darker';
            var2['theme'] = var6;
            var8 = _closure1_slot21;
            var7 = _closure1_slot4;
            var6 = {};
            var12 = var9.container;
            var9 = new Array(2);
            var9[0] = var12;
            var12 = {};
            var16 = 38;
            var16 = var19[var16];
            var16 = var18.bind(var4)(var16);
            var16 = var16.NAV_BAR_HEIGHT;
            var16 = var17 + var16;
            var12['paddingTop'] = var16;
            var12['paddingBottom'] = var13;
            var9[1] = var12;
            var6['style'] = var9;
            var13 = _closure1_slot20;
            var12 = _closure1_slot26;
            var9 = {};
            var9['invite'] = var15;
            var9['guildTemplate'] = var14;
            var14 = null;
            if(!var10) { _fun0004_ip = 41; continue _fun0004 }
case 42:
            var14 = var11;
case 41:
            var9['inlineButtons'] = var14;
            var12 = var13.bind(var4)(var12, var9);
            var9 = new Array(3);
            var9[0] = var12;
            var10 = !var10;
            if(!var10) { _fun0004_ip = 43; continue _fun0004 }
case 44:
            var10 = var11;
case 43:
            var9[1] = var10;
            var12 = _closure1_slot20;
            var11 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 39;
            var10 = var13[var10];
            var10 = var11.bind(var4)(var10);
            var11 = var10.TTIFirstContentfulPaint;
            var10 = {};
            var13 = 'welcome';
            var10['label'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var2['children'] = var6;
            var2 = var5.bind(var4)(var3, var2);
            return var2;
case 37:
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var5 = _closure1_slot2;
            var1 = 33;
            var1 = var5[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();