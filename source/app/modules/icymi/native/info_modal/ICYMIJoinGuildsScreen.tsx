// app/modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
    var1 = function SelectedServerIcon(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var12 = var1.guild;
            var2 = var1.index;
            var1 = _closure1_slot16;
            var4 = undefined;
            var13 = var1.bind(var4)();
            var1 = 3;
            var6 = var2 < var1;
            var3 = _closure1_slot12;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var13.selectedServerIcon;
            var7 = new Array(3);
            var7[0] = var5;
            var5 = null;
            var8 = var5 == var12;
            if(!var8) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var8 = var13.noServerContainer;
case 2:
            var7[1] = var8;
            var8 = var5 == var12;
            if(!var8) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var8 = !var6;
case 4:
            if(!var8) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var13.noServerExtraContainer;
case 6:
            var7[2] = var8;
            var1['style'] = var7;
            if(!(var5 == var12)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var5 = null;
            if(!var6) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var8 = _closure1_slot12;
            var7 = _closure1_slot0;
            var14 = _closure1_slot2;
            var6 = 12;
            var6 = var14[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.ServerIcon;
            var6 = {};
            var9 = 'md';
            var6['size'] = var9;
            var11 = _closure1_slot1;
            var9 = 10;
            var9 = var14[var9];
            var9 = var11.bind(var4)(var9);
            var9 = var9.colors;
            var9 = var9.INTERACTIVE_MUTED;
            var6['color'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 10:
            _fun0001_ip = 12; continue _fun0001;
case 8:
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 11;
            var6 = var11[var9];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var13 = var13.guildIconBorder;
            var6['style'] = var13;
            var6['guild'] = var12;
            var10 = _closure1_slot0;
            var9 = var11[var9];
            var9 = var10.bind(var4)(var9);
            var9 = var9.GuildIconSizes;
            var9 = var9.LARGE;
            var6['size'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 12:
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var1 = function SelectedServersRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var1 = arg1;
            var8 = var1.selectedGuilds;
            var _closure2_slot0 = var8;
            var1 = _closure1_slot16;
            var4 = undefined;
            var5 = var1.bind(var4)();
            var7 = _closure1_slot5;
            var6 = var7.useCallback;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function(arg1, arg2) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var5 = arg2;
                    var4 = _closure1_slot12;
                    var3 = _closure1_slot18;
                    var2 = {};
                    var1 = _closure2_slot0;
                    var1 = var1.length;
                    var8 = var5 < var1;
                    var1 = undefined;
                    var6 = undefined;
                    if(!var8) { _fun0003_ip = 13; continue _fun0003 }
case 14:
                    var7 = _closure2_slot0;
                    var6 = var7[var5];
case 13:
                    var2['guild'] = var6;
                    var2['index'] = var5;
                    var1 = var4.bind(var1)(var3, var2);
                    return var1;
                }
            };
            var12 = var6.bind(var7)(var1, var3);
            var6 = _closure1_slot5;
            var3 = var6.useState;
            var1 = var8.length;
            var6 = var3.bind(var6)(var1);
            var3 = _closure1_slot4;
            var1 = 2;
            var3 = var3.bind(var4)(var6, var1);
            var1 = 0;
            var1 = var3[var1];
            var _closure2_slot1 = var1;
            var13 = 1;
            var3 = var3[var13];
            var _closure2_slot2 = var3;
            var7 = _closure1_slot5;
            var6 = var7.useRef;
            var3 = null;
            var10 = var6.bind(var7)(var3);
            var _closure2_slot3 = var10;
            var7 = _closure1_slot5;
            var6 = var7.useEffect;
            var3 = new Array(2);
            var3[0] = var1;
            var1 = var8.length;
            var3[1] = var1;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(!(var3 < var2))) { _fun0004_ip = 15; continue _fun0004 }
case 16:
                    var3 = _closure2_slot1;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    if(!(var3 !== var2)) { _fun0004_ip = 17; continue _fun0004 }
case 18:
                    var4 = _closure2_slot2;
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    _fun0004_ip = 17; continue _fun0004;
case 15:
                    var2 = _closure2_slot3;
                    var4 = var2.current;
                    var2 = null;
                    if(!(var2 != var4)) { _fun0004_ip = 11; continue _fun0004 }
case 19:
                    var3 = var4.scrollToLocation;
                    var2 = {'animated': true, 'section': 0};
                    var5 = _closure2_slot0;
                    var5 = var5.length;
                    var2['item'] = var5;
                    var2 = var3.bind(var4)(var2);
case 11:
                    var3 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var2 = var1.length;
                    var1 = undefined;
                    var1 = var3.bind(var1)(var2);
case 17:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var6.bind(var7)(var1, var3);
            var11 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 13;
            var3 = var14[var1];
            var7 = var11.bind(var4)(var3);
            var3 = var7.useAnimatedStyle;
            var2 = function C() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = {};
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var8 = 14;
                    var2 = var2[var8];
                    var7 = undefined;
                    var9 = var3.bind(var7)(var2);
                    var3 = var9.withTiming;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    var4 = 0;
                    var10 = var2 > var4;
                    var2 = 0;
                    if(!var10) { _fun0005_ip = 20; continue _fun0005 }
case 21:
                    var2 = 1;
case 20:
                    var2 = var3.bind(var9)(var2);
                    var1['opacity'] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var9 = var3.bind(var7)(var2);
                    var3 = var9.withTiming;
                    var2 = _closure2_slot0;
                    var2 = var2.length;
                    var10 = var2 > var4;
                    var2 = 0;
                    if(!var10) { _fun0005_ip = 22; continue _fun0005 }
case 9:
                    var2 = _closure1_slot15;
case 22:
                    var2 = var3.bind(var9)(var2);
                    var1['height'] = var2;
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var8];
                    var3 = var3.bind(var7)(var2);
                    var2 = var3.withTiming;
                    var6 = _closure2_slot0;
                    var6 = var6.length;
                    var6 = var6 > var4;
                    var4 = 0;
                    if(!var6) { _fun0005_ip = 8; continue _fun0005 }
case 23:
                    var6 = _closure1_slot1;
                    var8 = _closure1_slot2;
                    var5 = 10;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.spacing;
                    var4 = var5.PX_24;
case 8:
                    var2 = var2.bind(var3)(var4);
                    var1['marginTop'] = var2;
                    return var1;
                }
            };
            var15 = {};
            var6 = 14;
            var6 = var14[var6];
            var6 = var11.bind(var4)(var6);
            var6 = var6.withTiming;
            var15['withTiming'] = var6;
            var15['selectedGuilds'] = var8;
            var6 = _closure1_slot15;
            var15['SELECTED_SERVER_SIZE_WITH_BORDER'] = var6;
            var6 = _closure1_slot1;
            var11 = 10;
            var16 = var14[var11];
            var16 = var6.bind(var4)(var16);
            var15['tokens'] = var16;
            var2['__closure'] = var15;
            var15 = 12491491924402.0;
            var2['__workletHash'] = var15;
            var15 = _closure1_slot17;
            var2['__initData'] = var15;
            var7 = var3.bind(var7)(var2);
            var3 = _closure1_slot12;
            var1 = var14[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var15 = var5.selectedServersRowContainer;
            var5 = new Array(2);
            var5[0] = var15;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var5 = 15;
            var5 = var14[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var5['ref'] = var10;
            var14 = var8.length;
            var10 = 3;
            var14 = var14 >= var10;
            if(!var14) { _fun0002_ip = 24; continue _fun0002 }
case 25:
            var8 = var8.length;
            var10 = var8 + var13;
case 24:
            var8 = new Array(1);
            var8[0] = var10;
            var5['sections'] = var8;
            var10 = _closure1_slot1;
            var8 = _closure1_slot2;
            var13 = var8[var11];
            var13 = var10.bind(var4)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_24;
            var5['insetStart'] = var13;
            var13 = var8[var11];
            var13 = var10.bind(var4)(var13);
            var13 = var13.spacing;
            var13 = var13.PX_12;
            var5['insetEnd'] = var13;
            var5['renderItem'] = var12;
            var12 = 'windowSize';
            var5['estimatedListSize'] = var12;
            var9 = _closure1_slot15;
            var8 = var8[var11];
            var8 = var10.bind(var4)(var8);
            var8 = var8.spacing;
            var8 = var8.PX_12;
            var8 = var9 + var8;
            var5['itemSize'] = var8;
            var8 = true;
            var5['horizontal'] = var8;
            var8 = 'selected-servers-list';
            var5['listId'] = var8;
            var8 = false;
            var5['showsHorizontalScrollIndicator'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot19 = var1;
    var1 = function CutoutGuildBanner(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var2 = arg1;
            var13 = var2.guild;
            var _closure2_slot0 = var13;
            var2 = _closure1_slot16;
            var4 = undefined;
            var15 = var2.bind(var4)();
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 16;
            var2 = var5[var2];
            var6 = var3.bind(var4)(var2);
            var5 = var6.useStateFromStores;
            var2 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = _closure1_slot8;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var9 = var5.bind(var6)(var3, var2);
            var5 = !var9;
            if(!var5) { _fun0006_ip = 26; continue _fun0006 }
case 5:
            var6 = var13.features;
            var3 = var6.has;
            var2 = _closure1_slot11;
            var2 = var2.ANIMATED_BANNER;
            var5 = var3.bind(var6)(var2);
case 26:
            var2 = var13.banner;
            var10 = null;
            var2 = var10 != var2;
            var16 = undefined;
            if(!var2) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var3 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 17;
            var2 = var6[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.getAnimatableSourceWithFallback;
            var1 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getGuildBannerSource;
                var2 = {};
                var1 = _closure2_slot0;
                var5 = var1.id;
                var2['id'] = var5;
                var1 = var1.banner;
                var2['banner'] = var1;
                var1 = arg1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var16 = var2.bind(var3)(var5, var1);
case 27:
            var3 = _closure1_slot13;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var15.bannerImage;
            var1['style'] = var5;
            var7 = _closure1_slot12;
            var6 = _closure1_slot1;
            var17 = _closure1_slot2;
            var8 = 18;
            var5 = var17[var8];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var12 = {'shape': null, 'x': 8, 'y': 46, 'width': 56, 'height': 56, 'cornerRadius': 20};
            var14 = _closure1_slot0;
            var8 = var17[var8];
            var8 = var14.bind(var4)(var8);
            var8 = var8.CutoutShape;
            var8 = var8.RoundedRect;
            var12['shape'] = var8;
            var8 = new Array(1);
            var8[0] = var12;
            var5['cutouts'] = var8;
            var8 = var13.banner;
            if(!(var10 == var8)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var12 = _closure1_slot12;
            var10 = _closure1_slot6;
            var8 = {};
            var17 = var15.bannerImage;
            var14 = new Array(2);
            var14[0] = var17;
            var17 = var15.emptyBanner;
            var14[1] = var17;
            var8['style'] = var14;
            var8 = var12.bind(var4)(var10, var8);
            _fun0006_ip = 31; continue _fun0006;
case 29:
            var14 = _closure1_slot12;
            var12 = _closure1_slot1;
            var17 = _closure1_slot2;
            var10 = 19;
            var10 = var17[var10];
            var12 = var12.bind(var4)(var10);
            var10 = {};
            var17 = var15.bannerImage;
            var10['style'] = var17;
            var10['source'] = var16;
            var16 = 'cover';
            var10['resizeMode'] = var16;
            var8 = var14.bind(var4)(var12, var10);
case 31:
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot12;
            var7 = _closure1_slot1;
            var12 = _closure1_slot2;
            var10 = 11;
            var6 = var12[var10];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var16 = var15.guildIcon;
            var14 = new Array(2);
            var14[0] = var16;
            var15 = var15.guildIconBorder;
            var14[1] = var15;
            var6['style'] = var14;
            var6['guild'] = var13;
            var11 = _closure1_slot0;
            var10 = var12[var10];
            var10 = var11.bind(var4)(var10);
            var10 = var10.GuildIconSizes;
            var10 = var10.LARGE;
            var6['size'] = var10;
            var9 = !var9;
            var6['animate'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var1;
    var1 = function FeaturedServer(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
            var2 = arg1;
            var15 = var2.guild;
            var _closure2_slot0 = var15;
            var17 = var2.selected;
            var19 = var2.loading;
            var6 = var2.handlePress;
            var _closure2_slot1 = var6;
            var2 = _closure1_slot16;
            var4 = undefined;
            var13 = var2.bind(var4)();
            var14 = _closure1_slot0;
            var21 = _closure1_slot2;
            var2 = 16;
            var2 = var21[var2];
            var7 = var14.bind(var4)(var2);
            var5 = var7.useStateFromStores;
            var2 = _closure1_slot9;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var3 = _closure1_slot9;
                var2 = var3.getGuild;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var2 = var2.bind(var3)(var1);
                var1 = null;
                var1 = var1 != var2;
                return var1;
            };
            var16 = var5.bind(var7)(var3, var2);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var6;
            var1 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var18 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var1 = 20;
            var1 = var21[var1];
            var1 = var14.bind(var4)(var1);
            var2 = var1.PressableHighlight;
            var1 = {};
            var5 = var13.pressableUnderlayColor;
            var5 = var5.backgroundColor;
            var1['underlayColor'] = var5;
            var5 = 50;
            var1['unstable_pressDelay'] = var5;
            var5 = var13.featuredServerContainer;
            var1['style'] = var5;
            var1['onPress'] = var18;
            var7 = _closure1_slot12;
            var6 = _closure1_slot20;
            var5 = {};
            var5['guild'] = var15;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot6;
            var6 = {};
            var9 = var13.featuredServerInnerContainer;
            var6['style'] = var9;
            var12 = _closure1_slot12;
            var10 = 21;
            var9 = var21[var10];
            var9 = var14.bind(var4)(var9);
            var11 = var9.Text;
            var9 = {'maxFontSizeMultiplier': 1, 'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary'};
            var22 = var13.featuredServerTitle;
            var9['style'] = var22;
            var22 = var15.name;
            var9['children'] = var22;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(3);
            var9[0] = var11;
            var12 = _closure1_slot12;
            var10 = var21[var10];
            var10 = var14.bind(var4)(var10);
            var11 = var10.Text;
            var10 = {'maxFontSizeMultiplier': 1, 'lineClamp': 2, 'variant': 'text-xs/normal', 'color': 'header-secondary'};
            var15 = var15.description;
            var10['children'] = var15;
            var10 = var12.bind(var4)(var11, var10);
            var9[1] = var10;
            var12 = _closure1_slot12;
            var11 = _closure1_slot6;
            var10 = {};
            var13 = var13.buttonContainer;
            var10['style'] = var13;
            var15 = _closure1_slot12;
            var13 = 22;
            var13 = var21[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.Button;
            var13 = {};
            var21 = 'checkbox';
            var13['accessibilityHint'] = var21;
            var21 = {};
            var21['checked'] = var17;
            var13['accessibilityState'] = var21;
            var13['disabled'] = var16;
            var21 = undefined;
            if(!var17) { _fun0007_ip = 32; continue _fun0007 }
case 33:
            var24 = _closure1_slot12;
            var23 = _closure1_slot0;
            var27 = _closure1_slot2;
            var22 = 23;
            var22 = var27[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.CircleCheckIcon;
            var22 = {};
            var25 = 'sm';
            var22['size'] = var25;
            var26 = _closure1_slot1;
            var25 = 10;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.colors;
            var25 = var25.REDESIGN_BUTTON_ACTIVE_TEXT;
            var22['color'] = var25;
            var21 = var24.bind(var4)(var23, var22);
case 32:
            var13['icon'] = var21;
            if(!var16) { _fun0007_ip = 34; continue _fun0007 }
case 35:
            if(var19) { _fun0007_ip = 34; continue _fun0007 }
case 36:
            var23 = _closure1_slot0;
            var24 = _closure1_slot2;
            var19 = 24;
            var21 = var24[var19];
            var21 = var23.bind(var4)(var21);
            var22 = var21.intl;
            var21 = var22.string;
            var19 = var24[var19];
            var19 = var23.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.cEnaW1;
            var19 = var21.bind(var22)(var19);
            _fun0007_ip = 37; continue _fun0007;
case 34:
            var21 = _closure1_slot0;
            var24 = _closure1_slot2;
            var20 = 24;
            var22 = var24[var20];
            var22 = var21.bind(var4)(var22);
            var23 = var22.intl;
            var22 = var23.string;
            var20 = var24[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.t;
            if(var17) { _fun0007_ip = 38; continue _fun0007 }
case 39:
            var20 = var21.XqMe3N;
            var20 = var22.bind(var23)(var20);
            _fun0007_ip = 40; continue _fun0007;
case 38:
            var21 = var21.TwueCw;
            var20 = var22.bind(var23)(var21);
case 40:
            var19 = var20;
case 37:
            var13['text'] = var19;
            var19 = 'sm';
            var13['size'] = var19;
            var13['onPress'] = var18;
            if(var16) { _fun0007_ip = 41; continue _fun0007 }
case 42:
            var16 = 'active';
            if(var17) { _fun0007_ip = 43; continue _fun0007 }
case 41:
            var16 = 'secondary';
case 43:
            var13['variant'] = var16;
            var16 = true;
            var13['grow'] = var16;
            var13 = var15.bind(var4)(var14, var13);
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var9[2] = var10;
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot21 = var1;
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
    var4 = var5.bind(var1)(var4);
    var8 = var4.View;
    var _closure1_slot6 = var8;
    var4 = var4.StyleSheet;
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
    var4 = var7.bind(var1)(var4);
    var _closure1_slot10 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.GuildFeatures;
    var _closure1_slot11 = var4;
    var4 = 8;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = 50;
    var _closure1_slot15 = var4;
    var4 = 9;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createICYMIStyles;
    var4 = function(arg1, arg2) {
        var10 = arg1;
        var1 = {};
        var2 = {'backgroundColor': null, 'position': 'relative', 'flex': 1};
        var5 = _closure1_slot1;
        var6 = _closure1_slot2;
        var3 = 10;
        var7 = var6[var3];
        var4 = undefined;
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_BASE_SECONDARY;
        var2['backgroundColor'] = var7;
        var7 = 1;
        var9 = var10.margin;
        var2['marginHorizontal'] = var9;
        var1['container'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['paddingTop'] = var9;
        var1['scrollContentContainer'] = var2;
        var2 = {'position': 'absolute', 'bottom': 0};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['left'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['right'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['paddingBottom'] = var9;
        var1['footer'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['marginTop'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_8;
        var2['marginBottom'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['marginHorizontal'] = var9;
        var1['title'] = var2;
        var2 = {};
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['marginHorizontal'] = var9;
        var1['subtitle'] = var2;
        var2 = {};
        var9 = _closure1_slot7;
        var9 = var9.hairlineWidth;
        var2['height'] = var9;
        var9 = '100%';
        var2['width'] = var9;
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.colors;
        var11 = var11.BORDER_SUBTLE;
        var2['backgroundColor'] = var11;
        var1['separator'] = var2;
        var2 = {};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.radii;
        var11 = var11.lg;
        var2['borderRadius'] = var11;
        var11 = arg2;
        var2['backgroundColor'] = var11;
        var11 = 'hidden';
        var2['overflow'] = var11;
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_8;
        var2['marginHorizontal'] = var11;
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_8;
        var2['marginVertical'] = var11;
        var1['featuredServerContainer'] = var2;
        var2 = {};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_12;
        var2['marginHorizontal'] = var11;
        var11 = 36;
        var2['marginTop'] = var11;
        var1['featuredServerInnerContainer'] = var2;
        var2 = {};
        var11 = var6[var3];
        var11 = var5.bind(var4)(var11);
        var11 = var11.spacing;
        var11 = var11.PX_12;
        var2['marginBottom'] = var11;
        var10 = var10.margin;
        var2['marginTop'] = var10;
        var1['buttonContainer'] = var2;
        var2 = {};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var2['marginBottom'] = var10;
        var1['featuredServerTitle'] = var2;
        var2 = {'position': 'absolute', 'top': 50, 'left': 12};
        var1['guildIcon'] = var2;
        var2 = {'height': 73, 'width': '100%'};
        var1['bannerImage'] = var2;
        var2 = {};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.colors;
        var10 = var10.BG_MOD_SUBTLE;
        var2['backgroundColor'] = var10;
        var1['emptyBanner'] = var2;
        var2 = {};
        var2['flex'] = var7;
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_8;
        var2['marginHorizontal'] = var10;
        var1['guildsScrollContainer'] = var2;
        var2 = {'flex': 1, 'flexDirection': 'column'};
        var10 = var6[var3];
        var10 = var5.bind(var4)(var10);
        var10 = var10.spacing;
        var10 = var10.PX_16;
        var2['gap'] = var10;
        var1['guildsColumn'] = var2;
        var2 = {};
        var10 = _closure1_slot15;
        var2['height'] = var10;
        var2['width'] = var9;
        var9 = var6[var3];
        var9 = var5.bind(var4)(var9);
        var9 = var9.spacing;
        var9 = var9.PX_24;
        var2['marginBottom'] = var9;
        var1['selectedServersRowContainer'] = var2;
        var2 = {'flex': 1, 'width': null, 'height': null, 'alignItems': 'center', 'justifyContent': 'center'};
        var9 = _closure1_slot15;
        var2['width'] = var9;
        var8 = _closure1_slot15;
        var2['height'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.colors;
        var8 = var8.BORDER_STRONG;
        var2['borderColor'] = var8;
        var8 = var6[var3];
        var8 = var5.bind(var4)(var8);
        var8 = var8.radii;
        var8 = var8.md;
        var2['borderRadius'] = var8;
        var2['borderWidth'] = var7;
        var1['selectedServerIcon'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BG_MOD_FAINT;
        var2['backgroundColor'] = var7;
        var7 = 'dashed';
        var2['borderStyle'] = var7;
        var1['noServerContainer'] = var2;
        var2 = {};
        var7 = 0.4;
        var2['opacity'] = var7;
        var1['noServerExtraContainer'] = var2;
        var2 = {};
        var7 = var6[var3];
        var7 = var5.bind(var4)(var7);
        var7 = var7.colors;
        var7 = var7.BACKGROUND_MODIFIER_ACTIVE;
        var2['backgroundColor'] = var7;
        var1['pressableUnderlayColor'] = var2;
        var2 = {};
        var3 = var6[var3];
        var3 = var5.bind(var4)(var3);
        var3 = var3.radii;
        var3 = var3.md;
        var2['borderRadius'] = var3;
        var1['guildIconBorder'] = var2;
        return var1;
    };
    var4 = var7.bind(var8)(var4);
    var _closure1_slot16 = var4;
    var4 = {};
    var7 = 'function ICYMIJoinGuildsScreenTsx1(){const{withTiming,selectedGuilds,SELECTED_SERVER_SIZE_WITH_BORDER,tokens}=this.__closure;return{opacity:withTiming(selectedGuilds.length>0?1:0),height:withTiming(selectedGuilds.length>0?SELECTED_SERVER_SIZE_WITH_BORDER:0),marginTop:withTiming(selectedGuilds.length>0?tokens.spacing.PX_24:0)};}';
    var4['code'] = var7;
    var _closure1_slot17 = var4;
    var4 = 33;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/icymi/native/info_modal/ICYMIJoinGuildsScreen.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ICYMIJoinGuildsScreen() {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var17 = _closure1_slot0;
            var27 = _closure1_slot2;
            var2 = 25;
            var2 = var27[var2];
            var4 = undefined;
            var3 = var17.bind(var4)(var2);
            var2 = var3.useConversationBackgroundColors;
            var2 = var2.bind(var3)();
            var3 = var2.primaryBackground;
            var2 = _closure1_slot16;
            var12 = var2.bind(var4)(var3);
            var26 = _closure1_slot1;
            var2 = 26;
            var2 = var27[var2];
            var2 = var26.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.bottom;
            var3 = 16;
            var2 = var27[var3];
            var8 = var17.bind(var4)(var2);
            var7 = var8.useStateFromStoresArray;
            var2 = _closure1_slot10;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getOnboardingGuilds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var24 = var7.bind(var8)(var6, var5);
            var _closure2_slot0 = var24;
            var5 = var27[var3];
            var8 = var17.bind(var4)(var5);
            var7 = var8.useStateFromStoresArray;
            var6 = new Array(1);
            var6[0] = var2;
            var5 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getOnboardingCategoryIds;
                var1 = var1.bind(var2)();
                return var1;
            };
            var18 = var7.bind(var8)(var6, var5);
            var _closure2_slot1 = var18;
            var3 = var27[var3];
            var6 = var17.bind(var4)(var3);
            var5 = var6.useStateFromStores;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var2 = _closure1_slot10;
                var1 = var2.getCurrentOnboardingGuildOffset;
                var1 = var1.bind(var2)();
                return var1;
            };
            var14 = var5.bind(var6)(var3, var2);
            var _closure2_slot2 = var14;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var2 = global;
            var2 = var2.Set;
            var6 = var2.prototype;
            var6 = Object.create(var6, {constructor: {value: var2}});
            var31 = var6;
            var2 = new var31[var2](var30);
            var2 = var2 instanceof Object ? var2 : var6;
            var3 = var3.bind(var5)(var2);
            var2 = _closure1_slot4;
            var23 = 2;
            var2 = var2.bind(var4)(var3, var23);
            var5 = 0;
            var6 = var2[var5];
            var _closure2_slot3 = var6;
            var7 = 1;
            var2 = var2[var7];
            var _closure2_slot4 = var2;
            var8 = _closure1_slot5;
            var3 = var8.useState;
            var2 = new Array(0);
            var3 = var3.bind(var8)(var2);
            var2 = _closure1_slot4;
            var2 = var2.bind(var4)(var3, var23);
            var16 = var2[var5];
            var2 = var2[var7];
            var _closure2_slot5 = var2;
            var3 = _closure1_slot5;
            var2 = var3.useState;
            var3 = var2.bind(var3)(var5);
            var2 = _closure1_slot4;
            var3 = var2.bind(var4)(var3, var23);
            var2 = var3[var5];
            var _closure2_slot6 = var2;
            var3 = var3[var7];
            var _closure2_slot7 = var3;
            var13 = _closure1_slot5;
            var9 = var13.useCallback;
            var8 = new Array(1);
            var8[0] = var6;
            var3 = function(arg1) {
                _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
                    var4 = arg1;
                    var _closure3_slot0 = var4;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 27;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var8 = var3.ICYMIAnalytics;
                    var7 = var8.trackFeedOnboardingGuildToggled;
                    var5 = {};
                    var3 = var4.id;
                    var5['guildId'] = var3;
                    var6 = _closure2_slot3;
                    var10 = var6.has;
                    var9 = var4.id;
                    var9 = var10.bind(var6)(var9);
                    var9 = !var9;
                    var5['toggled'] = var9;
                    var5 = var7.bind(var8)(var5);
                    var5 = var6.has;
                    var4 = var4.id;
                    var4 = var5.bind(var6)(var4);
                    var5 = _closure2_slot4;
                    if(var4) { _fun0009_ip = 44; continue _fun0009 }
case 45:
                    var4 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.add;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = global;
                        var1 = var1.Set;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var5 = var2;
                        var4 = var3;
                        var1 = new var5[var1](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var4 = var5.bind(var1)(var4);
                    var6 = _closure2_slot5;
                    var4 = function(arg1) {
                        var1 = new Array(1);
                        var5 = arg1;
                        var4 = 0;
                        var6 = var1;
                        var3 = arraySpread(var6, var5, var4);
                        var2 = _closure3_slot0;
                        var1[var3] = var2;
                        var2 = 1;
                        var2 = var3 + var2;
                        return var1;
                    };
                    var4 = var6.bind(var1)(var4);
                    _fun0009_ip = 46; continue _fun0009;
case 44:
                    var4 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.delete;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2.bind(var3)(var1);
                        var1 = global;
                        var1 = var1.Set;
                        var2 = var1.prototype;
                        var2 = Object.create(var2, {constructor: {value: var1}});
                        var5 = var2;
                        var4 = var3;
                        var1 = new var5[var1](var4, var3);
                        var1 = var1 instanceof Object ? var1 : var2;
                        return var1;
                    };
                    var4 = var5.bind(var1)(var4);
                    var3 = _closure2_slot5;
                    var2 = function(arg1) {
                        var3 = arg1;
                        var2 = var3.filter;
                        var1 = function(arg1) {
                            var1 = _closure3_slot0;
                            var2 = var1.id;
                            var1 = arg1;
                            var1 = var1.id;
                            var1 = var2 !== var1;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var2 = var3.bind(var1)(var2);
case 46:
                    return var1;
                }
            };
            var8 = var9.bind(var13)(var3, var8);
            var _closure2_slot8 = var8;
            var9 = _closure1_slot5;
            var3 = var9.useState;
            var21 = false;
            var9 = var3.bind(var9)(var21);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var9, var23);
            var15 = var3[var5];
            var _closure2_slot9 = var15;
            var3 = var3[var7];
            var _closure2_slot10 = var3;
            var13 = _closure1_slot5;
            var9 = var13.useCallback;
            var5 = _closure1_slot3;
            var3 = function* () {
                var1 = function* anon_0_() {
                    _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
                        StartGenerator();
                        ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                        if(var2) { _fun0010_ip = 47; continue _fun0010 }
case 48:
                        var4 = _closure2_slot10;
                        var5 = undefined;
                        var3 = true;
                        var3 = var4.bind(var5)(var3);
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        var7 = 28;
                        var3 = var3[var7];
                        var8 = var4.bind(var5)(var3);
                        var4 = var8.gravityJoinGuild;
                        var3 = global;
                        var9 = var3.Array;
                        var3 = var9.from;
                        var2 = _closure2_slot3;
                        var3 = var3.bind(var9)(var2);
                        var2 = 'icymi_info_modal';
                        var2 = var4.bind(var8)(var3, var2);
                        SaveGenerator(address=93);
case 49:
                        return var2;
case 50:
                        ResumeGenerator(result_out_reg=1, return_bool_out_reg=2);
                        if(var3) { _fun0010_ip = 51; continue _fun0010 }
case 52:
                        var4 = _closure1_slot1;
                        var3 = _closure1_slot2;
                        if(var2) { _fun0010_ip = 53; continue _fun0010 }
case 54:
                        var8 = 29;
                        var8 = var3[var8];
                        var10 = var4.bind(var5)(var8);
                        var9 = var10.open;
                        var8 = {};
                        var11 = 'ICYMIInfoModal';
                        var8['key'] = var11;
                        var11 = _closure1_slot0;
                        var12 = 24;
                        var13 = var3[var12];
                        var13 = var11.bind(var5)(var13);
                        var14 = var13.intl;
                        var13 = var14.string;
                        var12 = var3[var12];
                        var12 = var11.bind(var5)(var12);
                        var12 = var12.t;
                        var12 = var12.CG4Hkp;
                        var12 = var13.bind(var14)(var12);
                        var8['content'] = var12;
                        var8 = var9.bind(var10)(var8);
                        var8 = var3[var7];
                        var9 = var4.bind(var5)(var8);
                        var8 = var9.fetchDehydrated;
                        var8 = var8.bind(var9)();
                        var8 = var3[var7];
                        var9 = var4.bind(var5)(var8);
                        var8 = var9.getGuildChannelScores;
                        var8 = var8.bind(var9)();
                        var8 = var3[var7];
                        var9 = var4.bind(var5)(var8);
                        var8 = var9.getRecommendedGuilds;
                        var8 = var8.bind(var9)();
                        var8 = 30;
                        var8 = var3[var8];
                        var10 = var4.bind(var5)(var8);
                        var9 = var10.popWithKey;
                        var8 = 31;
                        var8 = var3[var8];
                        var8 = var11.bind(var5)(var8);
                        var8 = var8.ICYMI_INFO_MODAL_KEY;
                        var8 = var9.bind(var10)(var8);
                        var8 = undefined;
                        return var8;
case 53:
                        var3 = var3[var7];
                        var8 = var4.bind(var5)(var3);
                        var4 = var8.fetchDehydrated;
                        var3 = {'isReloading': true, 'forceRefresh': true};
                        var3 = var4.bind(var8)(var3);
                        SaveGenerator(address=347);
case 55:
                        return var3;
case 56:
                        ResumeGenerator(result_out_reg=2, return_bool_out_reg=3);
                        if(var4) { _fun0010_ip = 57; continue _fun0010 }
case 58:
                        var8 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var4 = var4[var7];
                        var8 = var8.bind(var5)(var4);
                        var4 = var8.reloadICYMITab;
                        var4 = var4.bind(var8)();
                        SaveGenerator(address=387);
case 59:
                        return var4;
case 60:
                        ResumeGenerator(result_out_reg=3, return_bool_out_reg=7);
                        if(var8) { _fun0010_ip = 61; continue _fun0010 }
case 62:
                        var8 = _closure1_slot1;
                        var10 = _closure1_slot2;
                        var9 = var10[var7];
                        var11 = var8.bind(var5)(var9);
                        var9 = var11.getGuildChannelScores;
                        var9 = var9.bind(var11)();
                        var7 = var10[var7];
                        var9 = var8.bind(var5)(var7);
                        var7 = var9.getRecommendedGuilds;
                        var7 = var7.bind(var9)();
                        var7 = 30;
                        var7 = var10[var7];
                        var8 = var8.bind(var5)(var7);
                        var7 = var8.popWithKey;
                        var9 = _closure1_slot0;
                        var6 = 31;
                        var6 = var10[var6];
                        var6 = var9.bind(var5)(var6);
                        var6 = var6.ICYMI_INFO_MODAL_KEY;
                        var6 = var7.bind(var8)(var6);
                        return var5;
case 61:
                        return var4;
case 57:
                        return var3;
case 51:
                        return var2;
case 47:
                        return var1;
                    }
                };
                return var1;
            };
            var5 = var5.bind(var4)(var3);
            var3 = new Array(1);
            var3[0] = var6;
            var13 = var9.bind(var13)(var5, var3);
            var9 = _closure1_slot5;
            var5 = var9.useCallback;
            var3 = new Array(4);
            var3[0] = var18;
            var3[1] = var14;
            var3[2] = var2;
            var2 = var24.length;
            var3[3] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var2 = _closure2_slot2;
                    if(!(!(var3 > var2))) { _fun0011_ip = 22; continue _fun0011 }
case 63:
                    var2 = _closure2_slot0;
                    var3 = var2.length;
                    var2 = 150;
                    if(!(!(var3 >= var2))) { _fun0011_ip = 22; continue _fun0011 }
case 64:
                    var4 = _closure2_slot2;
                    var7 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var3 = 31;
                    var3 = var6[var3];
                    var5 = undefined;
                    var3 = var7.bind(var5)(var3);
                    var3 = var3.ICYMI_DISCOVERABLE_GUILDS_PAGE_SIZE;
                    var4 = var4 + var3;
                    var3 = _closure2_slot7;
                    var3 = var3.bind(var5)(var4);
                    var3 = _closure1_slot1;
                    var2 = 28;
                    var2 = var6[var2];
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.fetchPopularGuildsFromCategories;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1, var4);
case 22:
                    var1 = undefined;
                    return var1;
                }
            };
            var22 = var5.bind(var9)(var2, var3);
            var5 = _closure1_slot5;
            var3 = var5.useCallback;
            var2 = new Array(3);
            var2[0] = var15;
            var2[1] = var6;
            var2[2] = var8;
            var1 = function(arg1) {
                var1 = arg1;
                var1 = var1.item;
                var5 = _closure1_slot12;
                var4 = _closure1_slot21;
                var3 = {};
                var3['guild'] = var1;
                var6 = _closure2_slot9;
                var3['loading'] = var6;
                var8 = _closure2_slot3;
                var7 = var8.has;
                var6 = var1.id;
                var6 = var7.bind(var8)(var6);
                var3['selected'] = var6;
                var2 = _closure2_slot8;
                var3['handlePress'] = var2;
                var2 = var1.id;
                var1 = undefined;
                var1 = var5.bind(var1)(var4, var3, var2);
                return var1;
            };
            var20 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot14;
            var1 = {};
            var14 = _closure1_slot12;
            var8 = 21;
            var5 = var27[var8];
            var5 = var17.bind(var4)(var5);
            var9 = var5.Text;
            var5 = {'variant': 'heading-xl/semibold', 'color': 'header-primary'};
            var18 = var12.title;
            var5['style'] = var18;
            var18 = 24;
            var19 = var27[var18];
            var19 = var17.bind(var4)(var19);
            var28 = var19.intl;
            var25 = var28.string;
            var19 = var27[var18];
            var19 = var17.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.19ldCA;
            var19 = var25.bind(var28)(var19);
            var5['children'] = var19;
            var9 = var14.bind(var4)(var9, var5);
            var5 = new Array(6);
            var5[0] = var9;
            var14 = _closure1_slot12;
            var8 = var27[var8];
            var8 = var17.bind(var4)(var8);
            var9 = var8.Text;
            var8 = {'variant': 'text-sm/normal', 'color': 'header-muted'};
            var19 = var12.subtitle;
            var8['style'] = var19;
            var19 = var27[var18];
            var19 = var17.bind(var4)(var19);
            var28 = var19.intl;
            var25 = var28.string;
            var19 = var27[var18];
            var19 = var17.bind(var4)(var19);
            var19 = var19.t;
            var19 = var19.u0KPUV;
            var19 = var25.bind(var28)(var19);
            var8['children'] = var19;
            var8 = var14.bind(var4)(var9, var8);
            var5[1] = var8;
            var14 = _closure1_slot12;
            var9 = _closure1_slot19;
            var8 = {};
            var8['selectedGuilds'] = var16;
            var8 = var14.bind(var4)(var9, var8);
            var5[2] = var8;
            var14 = _closure1_slot12;
            var9 = _closure1_slot6;
            var8 = {};
            var16 = var12.separator;
            var8['style'] = var16;
            var8 = var14.bind(var4)(var9, var8);
            var5[3] = var8;
            var14 = _closure1_slot12;
            var9 = _closure1_slot6;
            var8 = {};
            var16 = var12.guildsScrollContainer;
            var8['style'] = var16;
            var19 = _closure1_slot12;
            var16 = 32;
            var16 = var27[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.MasonryFlashList;
            var16 = {};
            var16['data'] = var24;
            var16['extraData'] = var6;
            var24 = var12.scrollContentContainer;
            var16['contentContainerStyle'] = var24;
            var24 = {};
            var25 = 10;
            var25 = var27[var25];
            var25 = var26.bind(var4)(var25);
            var25 = var25.spacing;
            var25 = var25.PX_72;
            var25 = var25 + var11;
            var24['bottom'] = var25;
            var16['contentInset'] = var24;
            var16['numColumns'] = var23;
            var16['onEndReached'] = var22;
            var22 = 0.5;
            var16['onEndReachedThreshold'] = var22;
            var16['showsHorizontalScrollIndicator'] = var21;
            var16['showsVerticalScrollIndicator'] = var21;
            var16['renderItem'] = var20;
            var20 = 229;
            var16['estimatedItemSize'] = var20;
            var16 = var19.bind(var4)(var17, var16);
            var8['children'] = var16;
            var8 = var14.bind(var4)(var9, var8);
            var5[4] = var8;
            var6 = var6.size;
            var6 = var6 >= var7;
            if(!var6) { _fun0008_ip = 65; continue _fun0008 }
case 66:
            var9 = _closure1_slot12;
            var8 = _closure1_slot6;
            var7 = {};
            var14 = {};
            var14['marginBottom'] = var11;
            var11 = new Array(2);
            var11[0] = var14;
            var12 = var12.footer;
            var11[1] = var12;
            var7['style'] = var11;
            var12 = _closure1_slot12;
            var17 = _closure1_slot0;
            var14 = _closure1_slot2;
            var10 = 22;
            var10 = var14[var10];
            var10 = var17.bind(var4)(var10);
            var11 = var10.Button;
            var10 = {};
            var10['loading'] = var15;
            var15 = 'lg';
            var10['size'] = var15;
            var15 = var14[var18];
            var15 = var17.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var14[var18];
            var14 = var17.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.K50GHR;
            var14 = var15.bind(var16)(var14);
            var10['text'] = var14;
            var10['onPress'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 65:
            var5[5] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();