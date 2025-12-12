// app/modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function _createForOfIteratorHelperLoose(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var _closure2_slot0 = var3;
            var5 = global;
            var2 = var5.Symbol;
            var4 = 'undefined';
            var2 = typeof var2;
            var2 = var4 !== var2;
            if(!var2) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var4 = var5.Symbol;
            var4 = var4.iterator;
            var2 = var3[var4];
case 2:
            if(var2) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var2 = var3.@@iterator;
case 4:
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var6 = var5.Array;
            var4 = var6.isArray;
            var6 = var4.bind(var6)(var3);
            var4 = var2;
            if(var6) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = undefined;
            var6 = undefined;
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var9 = 'string';
            var7 = typeof var3;
            if(!(var9 !== var7)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var7 = {};
            var9 = var7.toString;
            var7 = var9.call;
            var11 = var7.bind(var9)(var3);
            var10 = var11.slice;
            var9 = 8;
            var7 = -1;
            var9 = var10.bind(var11)(var9, var7);
            var7 = 'Object';
            var7 = var7 === var9;
            if(!var7) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var7 = var3.constructor;
case 14:
            var10 = var9;
            if(!var7) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var3.constructor;
            var10 = var7.name;
case 16:
            var7 = 'Map';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = 'Set';
            if(!(var7 !== var10)) { _fun0001_ip = 18; continue _fun0001 }
case 20:
            var7 = 'Arguments';
            if(!(var7 !== var10)) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var9 = /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/;
            var7 = var9.test;
            var9 = var7.bind(var9)(var10);
            var7 = undefined;
            if(!var9) { _fun0001_ip = 23; continue _fun0001 }
case 21:
            var9 = _closure1_slot18;
            var7 = var9.bind(var8)(var3, var8);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 18:
            var10 = var5.Array;
            var9 = var10.from;
            var7 = var9.bind(var10)(var3);
case 24:
            var6 = var7;
            _fun0001_ip = 10; continue _fun0001;
case 12:
            var7 = _closure1_slot18;
            var6 = var7.bind(var8)(var3, var8);
case 10:
            var4 = var6;
            if(var4) { _fun0001_ip = 8; continue _fun0001 }
case 25:
            var7 = var5.TypeError;
            var5 = var7.prototype;
            var6 = Object.create(var5, {constructor: {value: var7}});
            var13 = 'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.';
            var14 = var6;
            var5 = new var14[var7](var13, var12);
            var5 = var5 instanceof Object ? var5 : var6;
            throw var5;
case 8:
            if(!var4) { _fun0001_ip = 26; continue _fun0001 }
case 27:
            _closure2_slot0 = var4;
case 26:
            var4 = 0;
            var _closure2_slot1 = var4;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var2 = _closure2_slot1;
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    if(!(!(var2 >= var1))) { _fun0002_ip = 28; continue _fun0002 }
case 29:
                    var1 = {};
                    var2 = false;
                    var1['done'] = var2;
                    var3 = _closure2_slot0;
                    var2 = _closure2_slot1;
                    var2 = parseFloat(var2);
                    var4 = var2 + 1;
                    _closure2_slot1 = var4;
                    var2 = var3[var2];
                    var1['value'] = var2;
                    _fun0002_ip = 30; continue _fun0002;
case 28:
                    var2 = {};
                    var3 = true;
                    var2['done'] = var3;
                    var1 = var2;
case 30:
                    return var1;
                }
            };
            return var1;
case 6:
            var1 = var2.call;
            var3 = var1.bind(var2)(var3);
            var2 = var3.next;
            var1 = var2.bind;
            var1 = var1.bind(var2)(var3);
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _arrayLikeToArray(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var3 = undefined;
            var1 = var1 == var3;
            if(var1) { _fun0003_ip = 31; continue _fun0003 }
case 32:
            var2 = var4.length;
            var1 = var3 > var2;
case 31:
            var2 = undefined;
            if(!var1) { _fun0003_ip = 33; continue _fun0003 }
case 34:
            var2 = var4.length;
case 33:
            var1 = global;
            var1 = var1.Array;
            var1 = var1.bind(var3)(var2);
            var3 = 0;
            var5 = var3 < var2;
            if(!var5) { _fun0003_ip = 35; continue _fun0003 }
case 4:
            var5 = var4[var3];
            var1[var3] = var5;
            var3 = var3 + 1;
            if(var3 < var2) { _fun0003_ip = 4; continue _fun0003 }
case 35:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
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
    var10 = 1;
    var4 = var6[var10];
    var4 = var5.bind(var1)(var4);
    var7 = var4.View;
    var _closure1_slot4 = var7;
    var4 = var4.ScrollView;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
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
    var4 = var11.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.OnboardingConnectionType;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildOnboardingModalStates;
    var _closure1_slot12 = var4;
    var4 = 9;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot13 = var4;
    var4 = 10;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var13 = var4.Fonts;
    var4 = 11;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot14 = var7;
    var4 = var4.jsxs;
    var _closure1_slot15 = var4;
    var4 = 12;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {};
    var9['flex'] = var10;
    var4['flex'] = var9;
    var9 = {'display': 'flex', 'flex': 1, 'flexGrow': 1};
    var10 = 13;
    var10 = var6[var10];
    var10 = var5.bind(var1)(var10);
    var10 = var10.NAV_BAR_HEIGHT;
    var9['marginTop'] = var10;
    var10 = 14;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['marginBottom'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['container'] = var9;
    var9 = {'display': 'flex', 'flexGrow': 1};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingTop'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var12;
    var4['scrollContainer'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_24;
    var9['marginBottom'] = var12;
    var4['header'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginBottom'] = var12;
    var4['title'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var4['description'] = var9;
    var9 = {};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['marginTop'] = var12;
    var4['connectionsList'] = var9;
    var9 = {'display': 'flex', 'flexDirection': 'column', 'justifyContent': 'flex-end', 'alignItems': 'center', 'bottom': 0, 'paddingBottom': null, 'position': 'absolute', 'width': '100%'};
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var9['paddingBottom'] = var12;
    var12 = '100%';
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var14;
    var4['footer'] = var9;
    var9 = {};
    var9['flexGrow'] = var1;
    var14 = 44;
    var9['height'] = var14;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.sm;
    var9['borderRadius'] = var14;
    var4['footerButton'] = var9;
    var9 = {};
    var14 = 15;
    var14 = var6[var14];
    var16 = var11.bind(var1)(var14);
    var15 = var13.PRIMARY_SEMIBOLD;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.unsafe_rawColors;
    var14 = var13.WHITE_500;
    var13 = 16;
    var18 = var16.bind(var1)(var15, var14, var13);
    var19 = var9;
    var13 = copyDataProperties(var19, var18);
    var4['footerButtonText'] = var9;
    var9 = {};
    var9['width'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_16;
    var9['paddingHorizontal'] = var12;
    var4['footerContent'] = var9;
    var9 = {};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_ACCENT;
    var9['backgroundColor'] = var10;
    var4['buttonSkip'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = 28;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/guild_onboarding/native/GuildOnboardingConnectionPrompt.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GuildOnboardingConnectionPrompt(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var2 = var1.guildId;
            var _closure2_slot0 = var2;
            var11 = var1.onComplete;
            var _closure2_slot1 = var11;
            var20 = var1.isLastStep;
            var _closure2_slot2 = var20;
            var1 = _closure1_slot16;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var5 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 16;
            var1 = var6[var1];
            var3 = var5.bind(var4)(var1);
            var1 = var3.useNavigation;
            var12 = var1.bind(var3)();
            var _closure2_slot3 = var12;
            var7 = _closure1_slot1;
            var1 = 17;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var18 = var1.bottom;
            var1 = 64;
            var3 = var1 + var18;
            var1 = 14;
            var1 = var6[var1];
            var1 = var7.bind(var4)(var1);
            var1 = var1.spacing;
            var1 = var1.PX_8;
            var14 = var3 + var1;
            var8 = _closure1_slot3;
            var3 = var8.useRef;
            var1 = false;
            var1 = var3.bind(var8)(var1);
            var _closure2_slot4 = var1;
            var7 = 18;
            var1 = var6[var7];
            var16 = var5.bind(var4)(var1);
            var15 = var16.useStateFromStores;
            var1 = _closure1_slot10;
            var13 = new Array(1);
            var13[0] = var1;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getConnections;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var23 = var15.bind(var16)(var13, var3);
            var _closure2_slot5 = var23;
            var3 = var6[var7];
            var16 = var5.bind(var4)(var3);
            var15 = var16.useStateFromStoresArray;
            var13 = new Array(1);
            var13[0] = var1;
            var3 = function() {
                var3 = _closure1_slot10;
                var2 = var3.getOnboardingPromptsForOnboarding;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var15.bind(var16)(var13, var3);
            var _closure2_slot6 = var3;
            var13 = var6[var7];
            var17 = var5.bind(var4)(var13);
            var16 = var17.useStateFromStores;
            var13 = _closure1_slot9;
            var15 = new Array(1);
            var15[0] = var13;
            var13 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var16.bind(var17)(var15, var13);
            var _closure2_slot7 = var15;
            var13 = var6[var7];
            var21 = var5.bind(var4)(var13);
            var17 = var21.useStateFromStores;
            var13 = _closure1_slot6;
            var16 = new Array(1);
            var16[0] = var13;
            var13 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getRulesPrompt;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var17.bind(var21)(var16, var13);
            var _closure2_slot8 = var13;
            var16 = var6[var7];
            var21 = var5.bind(var4)(var16);
            var17 = var21.useStateFromStores;
            var16 = new Array(1);
            var16[0] = var1;
            var1 = function() {
                var2 = _closure1_slot10;
                var1 = var2.isLoading;
                var1 = var1.bind(var2)();
                return var1;
            };
            var1 = var17.bind(var21)(var16, var1);
            var _closure2_slot9 = var1;
            var7 = var6[var7];
            var22 = var5.bind(var4)(var7);
            var21 = var22.useStateFromStores;
            var7 = _closure1_slot7;
            var17 = new Array(2);
            var17[0] = var7;
            var7 = _closure1_slot8;
            var17[1] = var7;
            var16 = new Array(1);
            var16[0] = var23;
            var7 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var2 = _closure1_slot17;
                    var1 = _closure2_slot5;
                    var6 = undefined;
                    var5 = var2.bind(var6)(var1);
                    var2 = var5.bind(var6)();
                    var1 = var2.done;
                    var4 = null;
                    var3 = var2;
                    var2 = undefined;
                    if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 37:
                    var1 = var3.value;
                    var9 = var1.connection_type;
                    var8 = _closure1_slot11;
                    var8 = var8.APPLICATION;
                    if(!(var9 !== var8)) { _fun0005_ip = 38; continue _fun0005 }
case 39:
                    var10 = var1.connection_type;
                    var8 = _closure1_slot11;
                    var9 = var8.PROVIDER_CONNECTED_ACCOUNT;
                    var8 = var2;
                    if(!(var10 === var9)) { _fun0005_ip = 40; continue _fun0005 }
case 41:
                    var9 = var1.provider_id;
                    var8 = var2;
                    if(!(var4 != var9)) { _fun0005_ip = 40; continue _fun0005 }
case 42:
                    var11 = _closure1_slot8;
                    var10 = var11.getAccount;
                    var9 = var1.provider_id;
                    var10 = var10.bind(var11)(var4, var9);
                    var8 = var10;
                    if(!(var4 != var8)) { _fun0005_ip = 40; continue _fun0005 }
case 43:
                    var9 = var10.revoked;
                    var8 = var10;
                    if(var9) { _fun0005_ip = 40; continue _fun0005 }
case 44:
                    var9 = true;
                    return var9;
case 38:
                    var10 = _closure1_slot7;
                    var9 = var10.getNewestTokenForApplication;
                    var1 = var1.application_id;
                    var1 = var9.bind(var10)(var1);
                    var8 = var2;
                    if(!(var4 == var1)) { _fun0005_ip = 45; continue _fun0005 }
case 40:
                    var9 = var5.bind(var6)();
                    var1 = var9.done;
                    var2 = var8;
                    var3 = var9;
                    if(var1) { _fun0005_ip = 36; continue _fun0005 }
case 20:
                    _fun0005_ip = 37; continue _fun0005;
case 45:
                    var1 = true;
                    return var1;
case 36:
                    var1 = false;
                    return var1;
                }
            };
            var16 = var21.bind(var22)(var17, var7, var16);
            var _closure2_slot10 = var16;
            var21 = var8.useEffect;
            var17 = new Array(3);
            var17[0] = var2;
            var17[1] = var1;
            var17[2] = var23;
            var7 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot9;
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 47:
                    var2 = _closure2_slot5;
                    var3 = var2.length;
                    var2 = 0;
                    if(!(var2 !== var3)) { _fun0006_ip = 46; continue _fun0006 }
case 48:
                    var2 = _closure2_slot4;
                    var2 = var2.current;
                    if(var2) { _fun0006_ip = 46; continue _fun0006 }
case 2:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot2;
                    var3 = 19;
                    var4 = var11[var3];
                    var9 = undefined;
                    var6 = var10.bind(var9)(var4);
                    var4 = var6.getProviderConnectionState;
                    var5 = _closure2_slot5;
                    var7 = var4.bind(var6)(var5);
                    var3 = var11[var3];
                    var4 = var10.bind(var9)(var3);
                    var3 = var4.getApplicationConnectionState;
                    var6 = var3.bind(var4)(var5);
                    var4 = _closure1_slot1;
                    var3 = 20;
                    var3 = var11[var3];
                    var5 = var4.bind(var9)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot13;
                    var3 = var2.GUILD_ONBOARDING_STEP_VIEWED;
                    var2 = {};
                    var8 = 21;
                    var8 = var11[var8];
                    var13 = var10.bind(var9)(var8);
                    var12 = var13.collectGuildAnalyticsMetadata;
                    var8 = _closure2_slot0;
                    var14 = var12.bind(var13)(var8);
                    var15 = var2;
                    var8 = copyDataProperties(var15, var14);
                    var8 = 22;
                    var8 = var11[var8];
                    var8 = var10.bind(var9)(var8);
                    var9 = var8.CONNECTIONS_STEP;
                    var8 = 'step';
                    var2[var8] = var9;
                    var9 = false;
                    var8 = 'required';
                    var2[var8] = var9;
                    var9 = var7.connected;
                    var8 = 'provider_connections_connected';
                    var2[var8] = var9;
                    var8 = var7.notConnected;
                    var7 = 'provider_connections_not_connected';
                    var2[var7] = var8;
                    var8 = var6.connected;
                    var7 = 'application_connections_connected';
                    var2[var7] = var8;
                    var7 = var6.notConnected;
                    var6 = 'application_connections_not_connected';
                    var2[var6] = var7;
                    var2 = var4.bind(var5)(var3, var2);
                    var2 = _closure2_slot4;
                    var1 = true;
                    var2['current'] = var1;
case 46:
                    var1 = undefined;
                    return var1;
                }
            };
            var7 = var21.bind(var8)(var7, var17);
            var7 = var8.useCallback;
            var17 = var3.length;
            var3 = new Array(9);
            var3[0] = var17;
            var3[1] = var15;
            var3[2] = var13;
            var3[3] = var12;
            var3[4] = var11;
            var3[5] = var23;
            var3[6] = var16;
            var3[7] = var20;
            var3[8] = var2;
            var2 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var12 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var7 = 19;
                    var3 = var13[var7];
                    var1 = undefined;
                    var5 = var12.bind(var1)(var3);
                    var4 = var5.getProviderConnectionState;
                    var6 = _closure2_slot5;
                    var11 = var4.bind(var5)(var6);
                    var4 = var13[var7];
                    var5 = var12.bind(var1)(var4);
                    var4 = var5.getApplicationConnectionState;
                    var10 = var4.bind(var5)(var6);
                    var5 = _closure1_slot1;
                    var4 = 20;
                    var4 = var13[var4];
                    var9 = var5.bind(var1)(var4);
                    var8 = var9.track;
                    var4 = _closure1_slot13;
                    var5 = var4.GUILD_ONBOARDING_STEP_COMPLETED;
                    var4 = {};
                    var6 = 21;
                    var6 = var13[var6];
                    var15 = var12.bind(var1)(var6);
                    var14 = var15.collectGuildAnalyticsMetadata;
                    var6 = _closure2_slot0;
                    var16 = var14.bind(var15)(var6);
                    var17 = var4;
                    var6 = copyDataProperties(var17, var16);
                    var6 = 22;
                    var6 = var13[var6];
                    var6 = var12.bind(var1)(var6);
                    var12 = var6.CONNECTIONS_STEP;
                    var6 = 'step';
                    var4[var6] = var12;
                    var6 = _closure2_slot10;
                    var12 = !var6;
                    var6 = 'skipped';
                    var4[var6] = var12;
                    var12 = false;
                    var6 = 'back';
                    var4[var6] = var12;
                    var6 = 0;
                    var12 = 'options_selected';
                    var4[var12] = var6;
                    var13 = true;
                    var12 = 'in_onboarding';
                    var4[var12] = var13;
                    var13 = _closure2_slot2;
                    var12 = 'is_final_step';
                    var4[var12] = var13;
                    var13 = var11.connected;
                    var12 = 'provider_connections_connected';
                    var4[var12] = var13;
                    var12 = var11.notConnected;
                    var11 = 'provider_connections_not_connected';
                    var4[var11] = var12;
                    var12 = var10.connected;
                    var11 = 'application_connections_connected';
                    var4[var11] = var12;
                    var11 = var10.notConnected;
                    var10 = 'application_connections_not_connected';
                    var4[var10] = var11;
                    var4 = var8.bind(var9)(var5, var4);
                    var4 = _closure2_slot6;
                    var4 = var4.length;
                    if(!(!(var4 > var6))) { _fun0007_ip = 49; continue _fun0007 }
case 50:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var8 = var5.bind(var1)(var4);
                    var7 = var8.showRulesInOnboarding;
                    var5 = _closure2_slot7;
                    var4 = _closure2_slot8;
                    var4 = var7.bind(var8)(var5, var4);
                    if(var4) { _fun0007_ip = 51; continue _fun0007 }
case 52:
                    var4 = _closure2_slot1;
                    var4 = var4.bind(var1)();
                    _fun0007_ip = 53; continue _fun0007;
case 51:
                    var7 = _closure2_slot3;
                    var5 = var7.push;
                    var4 = _closure1_slot12;
                    var4 = var4.RULES;
                    var4 = var5.bind(var7)(var4);
                    _fun0007_ip = 53; continue _fun0007;
case 49:
                    var5 = _closure2_slot3;
                    var4 = var5.push;
                    var2 = _closure1_slot12;
                    var3 = var2.PROMPT;
                    var2 = {};
                    var2['currentPrompt'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
case 53:
                    return var1;
                }
            };
            var15 = var7.bind(var8)(var2, var3);
            var3 = _closure1_slot14;
            var2 = 23;
            var2 = var6[var2];
            var2 = var5.bind(var4)(var2);
            var2 = var2.SafeAreaPaddingView;
            var5 = {};
            var6 = true;
            var5['top'] = var6;
            var7 = var10.flex;
            var6 = new Array(2);
            var6[0] = var7;
            var7 = var10.container;
            var6[1] = var7;
            var5['style'] = var6;
            if(var1) { _fun0004_ip = 54; continue _fun0004 }
case 55:
            var7 = _closure1_slot15;
            var6 = _closure1_slot4;
            var1 = {};
            var8 = var10.flex;
            var1['style'] = var8;
            var11 = _closure1_slot5;
            var8 = {};
            var13 = var10.scrollContainer;
            var12 = new Array(2);
            var12[0] = var13;
            var13 = {};
            var13['paddingBottom'] = var14;
            var12[1] = var13;
            var8['contentContainerStyle'] = var12;
            var13 = {};
            var12 = var10.header;
            var13['style'] = var12;
            var12 = _closure1_slot14;
            var28 = _closure1_slot0;
            var17 = _closure1_slot2;
            var21 = 24;
            var14 = var17[var21];
            var14 = var28.bind(var4)(var14);
            var24 = var14.Text;
            var14 = {'style': null, 'accessibilityRole': 'header', 'variant': 'heading-xl/semibold', 'color': 'mobile-text-heading-primary'};
            var22 = var10.title;
            var14['style'] = var22;
            var22 = 25;
            var25 = var17[var22];
            var25 = var28.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var17[var22];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.eDVMrA;
            var25 = var26.bind(var27)(var25);
            var14['children'] = var25;
            var24 = var12.bind(var4)(var24, var14);
            var14 = new Array(2);
            var14[0] = var24;
            var21 = var17[var21];
            var21 = var28.bind(var4)(var21);
            var24 = var21.Text;
            var21 = {'style': null, 'variant': 'text-md/normal', 'color': 'text-muted'};
            var25 = var10.description;
            var21['style'] = var25;
            var25 = var17[var22];
            var25 = var28.bind(var4)(var25);
            var27 = var25.intl;
            var26 = var27.string;
            var25 = var17[var22];
            var25 = var28.bind(var4)(var25);
            var25 = var25.t;
            var25 = var25.BozOXu;
            var25 = var26.bind(var27)(var25);
            var21['children'] = var25;
            var21 = var12.bind(var4)(var24, var21);
            var14[1] = var21;
            var13['children'] = var14;
            var14 = var7.bind(var4)(var6, var13);
            var13 = new Array(2);
            var13[0] = var14;
            var14 = {};
            var21 = var10.connectionsList;
            var14['style'] = var21;
            var21 = var23.map;
            var19 = function(arg1, arg2) {
                var5 = _closure1_slot14;
                var2 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 26;
                var1 = var3[var1];
                var4 = undefined;
                var3 = var2.bind(var4)(var1);
                var2 = {};
                var1 = arg1;
                var2['connection'] = var1;
                var1 = _closure2_slot0;
                var2['guildId'] = var1;
                var1 = 'guild-onboarding';
                var2['location'] = var1;
                var1 = arg2;
                var1 = var5.bind(var4)(var3, var2, var1);
                return var1;
            };
            var19 = var21.bind(var23)(var19);
            var14['children'] = var19;
            var14 = var12.bind(var4)(var6, var14);
            var13[1] = var14;
            var8['children'] = var13;
            var11 = var7.bind(var4)(var11, var8);
            var8 = new Array(2);
            var8[0] = var11;
            var11 = {};
            var14 = var10.footer;
            var13 = new Array(3);
            var13[0] = var14;
            var14 = var10.footerContent;
            var13[1] = var14;
            var14 = {};
            var14['paddingBottom'] = var18;
            var13[2] = var14;
            var11['style'] = var13;
            var14 = _closure1_slot1;
            var13 = 27;
            var13 = var17[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var17 = var10.footerButtonText;
            var13['textStyle'] = var17;
            var18 = var10.footerButton;
            var17 = new Array(2);
            var17[0] = var18;
            var18 = !var16;
            if(!var18) { _fun0004_ip = 56; continue _fun0004 }
case 57:
            var18 = !var20;
case 56:
            if(!var18) { _fun0004_ip = 58; continue _fun0004 }
case 59:
            var18 = var10.buttonSkip;
case 58:
            var17[1] = var18;
            var13['style'] = var17;
            var21 = _closure1_slot0;
            var17 = _closure1_slot2;
            var18 = var17[var22];
            var18 = var21.bind(var4)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var17 = var17[var22];
            var17 = var21.bind(var4)(var17);
            var17 = var17.t;
            if(var20) { _fun0004_ip = 60; continue _fun0004 }
case 61:
            if(var16) { _fun0004_ip = 62; continue _fun0004 }
case 63:
            var16 = var17.5Wxrcd;
            var16 = var18.bind(var19)(var16);
            _fun0004_ip = 64; continue _fun0004;
case 62:
            var20 = var17.PDTjLN;
            var16 = var18.bind(var19)(var20);
case 64:
            _fun0004_ip = 65; continue _fun0004;
case 60:
            var17 = var17.8SuVoE;
            var20 = var18.bind(var19)(var17);
            var17 = global;
            var17 = var17.HermesInternal;
            var19 = var17.concat;
            var18 = '';
            var17 = ' 🎉';
            var16 = var19.bind(var18)(var20, var17);
case 65:
            var13['text'] = var16;
            var13['onPress'] = var15;
            var13 = var12.bind(var4)(var14, var13);
            var11['children'] = var13;
            var11 = var12.bind(var4)(var6, var11);
            var8[1] = var11;
            var1['children'] = var8;
            var1 = var7.bind(var4)(var6, var1);
            var5['children'] = var1;
            var1 = var5;
            _fun0004_ip = 66; continue _fun0004;
case 54:
            var8 = _closure1_slot14;
            var7 = _closure1_slot4;
            var6 = {};
            var11 = var10.flex;
            var10 = new Array(2);
            var10[0] = var11;
            var11 = {'justifyContent': 'center', 'alignItems': 'center'};
            var10[1] = var11;
            var6['style'] = var10;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var9 = 24;
            var9 = var15[var9];
            var9 = var14.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'text-md/normal', 'color': 'text-muted'};
            var11 = 25;
            var12 = var15[var11];
            var12 = var14.bind(var4)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var11 = var15[var11];
            var11 = var14.bind(var4)(var11);
            var11 = var11.t;
            var11 = var11.ZTNur7;
            var11 = var12.bind(var13)(var11);
            var9['children'] = var11;
            var9 = var8.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5['children'] = var6;
            var1 = var5;
case 66:
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();