// app/modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeader.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var12 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var12;
    var _closure1_slot2 = var6;
    var1 = function ExpandedHeader(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var3 = arg1;
            var30 = var3.title;
            var31 = var3.subtitle;
            var19 = var3.animatedIndex;
            var _closure2_slot0 = var19;
            var1 = var3.channel;
            var _closure2_slot1 = var1;
            var1 = var3.draftType;
            var _closure2_slot2 = var1;
            var7 = var3.hideScrim;
            var1 = var3.onViewAll;
            var _closure2_slot3 = var1;
            var14 = var3.onPress;
            var _closure2_slot4 = var14;
            var23 = var3.onBack;
            var10 = var3.uploadLimit;
            var _closure2_slot5 = var10;
            var5 = var3.disableWhenReachedLimit;
            var3 = var3.includedUploadIds;
            var _closure2_slot6 = var3;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var3 = _closure1_slot17;
            var13 = var3.bind(var4)();
            var8 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 10;
            var6 = var11[var3];
            var16 = var8.bind(var4)(var6);
            var15 = var16.useStateFromStores;
            var6 = _closure1_slot6;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                var1 = _closure1_slot6;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var20 = var15.bind(var16)(var12, var6);
            var _closure2_slot7 = var20;
            var6 = var11[var3];
            var16 = var8.bind(var4)(var6);
            var15 = var16.useStateFromStores;
            var6 = _closure1_slot7;
            var12 = new Array(1);
            var12[0] = var6;
            var6 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = var3.isPrivate;
                    var1 = var1.bind(var3)();
                    if(var1) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var5 = _closure1_slot7;
                    var4 = var5.can;
                    var3 = _closure1_slot11;
                    var3 = var3.ATTACH_FILES;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 2:
                    return var1;
                }
            };
            var6 = var15.bind(var16)(var12, var6);
            var3 = var11[var3];
            var12 = var8.bind(var4)(var3);
            var11 = var12.useStateFromStoresObject;
            var3 = _closure1_slot8;
            var8 = new Array(1);
            var8[0] = var3;
            var3 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot6;
                    var1 = null;
                    var4 = var1 == var3;
                    var3 = undefined;
                    if(var4) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                    var4 = _closure2_slot6;
                    var3 = var4.length;
case 4:
                    if(!(var1 == var3)) { _fun0003_ip = 6; continue _fun0003 }
case 7:
                    var6 = _closure1_slot8;
                    var5 = var6.getUploadCount;
                    var1 = _closure2_slot1;
                    var4 = var1.id;
                    var1 = _closure2_slot2;
                    var3 = var5.bind(var6)(var4, var1);
case 6:
                    var1 = {};
                    var1['uploadCount'] = var3;
                    var2 = _closure2_slot5;
                    var2 = var3 >= var2;
                    var1['uploadLimitReached'] = var2;
                    return var1;
                }
            };
            var8 = var11.bind(var12)(var8, var3);
            var3 = var8.uploadLimitReached;
            var18 = var8.uploadCount;
            var27 = !var6;
            if(var27) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(!var3) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var3 = var5;
case 10:
            var27 = var3;
case 8:
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var6 = 11;
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var6 = var8.useBottomSheetInternal;
            var6 = var6.bind(var8)();
            var12 = var6.animatedSnapPoints;
            _closure2_slot8 = var12;
            var6 = 12;
            var8 = var5[var6];
            var16 = var3.bind(var4)(var8);
            var11 = var16.useAnimatedStyle;
            var8 = function N() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var2 = _closure2_slot0;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var1 = 13;
                    var1 = var6[var1];
                    var9 = undefined;
                    var7 = var3.bind(var9)(var1);
                    var6 = var7.animatedIndexThreshold;
                    var3 = _closure2_slot8;
                    var1 = 0.7;
                    var1 = var6.bind(var7)(var3, var1);
                    var1 = var2 > var1;
                    var10 = 0;
                    if(!var1) { _fun0004_ip = 12; continue _fun0004 }
case 13:
                    var10 = 1;
case 12:
                    var11 = -30;
                    if(!var1) { _fun0004_ip = 14; continue _fun0004 }
case 15:
                    var11 = 0;
case 14:
                    var8 = 0.9;
                    if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                    var8 = 1;
case 16:
                    var1 = {};
                    var3 = _closure2_slot7;
                    var2 = var10;
                    if(var3) { _fun0004_ip = 18; continue _fun0004 }
case 19:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var3 = 14;
                    var3 = var7[var3];
                    var7 = var6.bind(var9)(var3);
                    var6 = var7.withSpring;
                    var3 = _closure1_slot16;
                    var2 = var6.bind(var7)(var10, var3);
case 18:
                    var1['opacity'] = var2;
                    var3 = {};
                    var6 = _closure2_slot7;
                    var2 = var11;
                    if(var6) { _fun0004_ip = 20; continue _fun0004 }
case 21:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var10 = var7.bind(var9)(var6);
                    var7 = var10.withSpring;
                    var6 = _closure1_slot16;
                    var2 = var7.bind(var10)(var11, var6);
case 20:
                    var3['translateY'] = var2;
                    var2 = new Array(2);
                    var2[0] = var3;
                    var3 = {};
                    var6 = _closure2_slot7;
                    var4 = var8;
                    if(var6) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var7 = _closure1_slot0;
                    var10 = _closure1_slot2;
                    var6 = 14;
                    var6 = var10[var6];
                    var7 = var7.bind(var9)(var6);
                    var6 = var7.withSpring;
                    var5 = _closure1_slot16;
                    var4 = var6.bind(var7)(var8, var5);
case 22:
                    var3['scale'] = var4;
                    var2[1] = var3;
                    var1['transform'] = var2;
                    return var1;
                }
            };
            var17 = {};
            var17['animatedIndex'] = var19;
            var15 = 13;
            var21 = var5[var15];
            var21 = var3.bind(var4)(var21);
            var21 = var21.animatedIndexThreshold;
            var17['animatedIndexThreshold'] = var21;
            var17['animatedSnapPoints'] = var12;
            var21 = 0.7;
            var17['INDEX_HEADER_CHANGE_THRESHOLD'] = var21;
            var17['reducedMotion'] = var20;
            var20 = 14;
            var20 = var5[var20];
            var20 = var3.bind(var4)(var20);
            var20 = var20.withSpring;
            var17['withSpring'] = var20;
            var20 = _closure1_slot16;
            var17['HEADER_SPRING'] = var20;
            var8['__closure'] = var17;
            var17 = 15115378565476.0;
            var8['__workletHash'] = var17;
            var17 = _closure1_slot18;
            var8['__initData'] = var17;
            var16 = var11.bind(var16)(var8);
            var8 = var5[var6];
            var17 = var3.bind(var4)(var8);
            var11 = var17.useAnimatedStyle;
            var8 = function k() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = var3.get;
                    var2 = var2.bind(var3)();
                    var3 = var2.length;
                    var2 = 1;
                    if(!(var2 !== var3)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var7 = var4.bind(var2)(var3);
                    var6 = var7.interpolate;
                    var3 = _closure2_slot0;
                    var2 = var3.get;
                    var11 = var2.bind(var3)();
                    var10 = [0, 1];
                    var9 = [0, 15];
                    var8 = 'clamp';
                    var12 = var7;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
                    _fun0005_ip = 26; continue _fun0005;
case 24:
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var3 = 12;
                    var4 = var4[var3];
                    var3 = undefined;
                    var7 = var5.bind(var3)(var4);
                    var6 = var7.interpolate;
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var11 = var1.bind(var3)();
                    var4 = new Array(2);
                    var1 = -1;
                    var4[0] = var1;
                    var1 = 0;
                    var4[1] = var1;
                    var9 = [0, 15];
                    var8 = 'clamp';
                    var12 = var7;
                    var10 = var4;
                    var2 = var12[var6](var11, var10, var9, var8, var7);
case 26:
                    var1 = {};
                    var1['borderTopLeftRadius'] = var2;
                    var1['borderTopRightRadius'] = var2;
                    return var1;
                }
            };
            var20 = {};
            var20['animatedSnapPoints'] = var12;
            var21 = var5[var6];
            var21 = var3.bind(var4)(var21);
            var21 = var21.interpolate;
            var20['interpolate'] = var21;
            var20['animatedIndex'] = var19;
            var21 = 15;
            var20['MAX_BORDER_RADIUS'] = var21;
            var8['__closure'] = var20;
            var20 = 1786801672279.0;
            var8['__workletHash'] = var20;
            var20 = _closure1_slot19;
            var8['__initData'] = var20;
            var17 = var11.bind(var17)(var8);
            var20 = _closure1_slot3;
            var11 = var20.useCallback;
            var8 = new Array(4);
            var8[0] = var19;
            var8[1] = var12;
            var8[2] = var14;
            var8[3] = var1;
            var1 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = var3.get;
                    var4 = var1.bind(var3)();
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var1 = 13;
                    var3 = var3[var1];
                    var1 = undefined;
                    var8 = var5.bind(var1)(var3);
                    var6 = var8.animatedIndexThreshold;
                    var5 = _closure2_slot8;
                    var3 = 0.7;
                    var3 = var6.bind(var8)(var5, var3);
                    if(!(!(var4 <= var3))) { _fun0006_ip = 27; continue _fun0006 }
case 28:
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 15;
                    var3 = var5[var3];
                    var6 = var4.bind(var1)(var3);
                    var5 = var6.track;
                    var3 = _closure1_slot10;
                    var4 = var3.MEDIA_PICKER_ACTION_SHEET_ENGAGED;
                    var3 = {};
                    var7 = _closure1_slot9;
                    var7 = var7.VIEW_ALL_CLICKED;
                    var3['action'] = var7;
                    var3 = var5.bind(var6)(var4, var3);
                    var4 = _closure2_slot3;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 29; continue _fun0006 }
case 30:
                    var3 = _closure2_slot3;
                    var3 = var3.bind(var1)();
                    _fun0006_ip = 29; continue _fun0006;
case 27:
                    var4 = _closure2_slot4;
                    var3 = null;
                    if(!(var3 != var4)) { _fun0006_ip = 29; continue _fun0006 }
case 31:
                    var2 = _closure2_slot4;
                    var2 = var2.bind(var1)();
case 29:
                    return var1;
                }
            };
            var1 = var11.bind(var20)(var1, var8);
            var6 = var5[var6];
            var8 = var3.bind(var4)(var6);
            var6 = var8.useAnimatedProps;
            var2 = function G() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var1 = {};
                    var4 = _closure2_slot0;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var6 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var4 = 13;
                    var5 = var5[var4];
                    var4 = undefined;
                    var6 = var6.bind(var4)(var5);
                    var5 = var6.animatedIndexThreshold;
                    var4 = _closure2_slot8;
                    var2 = 0.8;
                    var2 = var5.bind(var6)(var4, var2);
                    var3 = var3 > var2;
                    var2 = 'none';
                    if(!var3) { _fun0007_ip = 32; continue _fun0007 }
case 33:
                    var2 = 'box-none';
case 32:
                    var1['pointerEvents'] = var2;
                    return var1;
                }
            };
            var11 = {};
            var11['animatedIndex'] = var19;
            var15 = var5[var15];
            var15 = var3.bind(var4)(var15);
            var15 = var15.animatedIndexThreshold;
            var11['animatedIndexThreshold'] = var15;
            var11['animatedSnapPoints'] = var12;
            var2['__closure'] = var11;
            var11 = 11298163742652.0;
            var2['__workletHash'] = var11;
            var11 = _closure1_slot20;
            var2['__initData'] = var11;
            var11 = var6.bind(var8)(var2);
            var2 = 16;
            var2 = var5[var2];
            var3 = var3.bind(var4)(var2);
            var2 = var3.useGradientBottom;
            var15 = var2.bind(var3)();
            var6 = null;
            if(!(var6 == var30)) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var2 = 0;
            if(!(!(var18 > var2))) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var8 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var3 = var12[var2];
            var3 = var8.bind(var4)(var3);
            var5 = var3.intl;
            var3 = var5.string;
            var2 = var12[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.t;
            var2 = var2["+9QSnj"];
            var2 = var3.bind(var5)(var2);
            _fun0001_ip = 38; continue _fun0001;
case 36:
            var5 = _closure1_slot0;
            var19 = _closure1_slot2;
            var3 = 17;
            var8 = var19[var3];
            var8 = var5.bind(var4)(var8);
            var12 = var8.intl;
            var8 = var12.formatToPlainString;
            var3 = var19[var3];
            var3 = var5.bind(var4)(var3);
            var3 = var3.t;
            var5 = var3.DbUmqv;
            var3 = {};
            var3['num'] = var18;
            var2 = var8.bind(var12)(var5, var3);
case 38:
            var30 = var2;
case 34:
            if(!(var6 == var31)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var3 = _closure1_slot0;
            var12 = _closure1_slot2;
            var2 = 17;
            var5 = var12[var2];
            var5 = var3.bind(var4)(var5);
            var8 = var5.intl;
            var5 = var8.formatToPlainString;
            var2 = var12[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.t;
            var3 = var2["1BlNHb"];
            var2 = {};
            var2['max'] = var10;
            var31 = var5.bind(var8)(var3, var2);
case 39:
            var8 = _closure1_slot13;
            var3 = _closure1_slot14;
            var2 = {};
            var12 = _closure1_slot12;
            var10 = _closure1_slot5;
            var5 = {};
            var18 = var13.headerSideItem;
            var5['style'] = var18;
            var22 = _closure1_slot12;
            var21 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 18;
            var18 = var25[var20];
            var18 = var21.bind(var4)(var18);
            var19 = var18.PressableOpacity;
            var18 = {};
            var24 = 'button';
            var18['accessibilityRole'] = var24;
            var26 = _closure1_slot15;
            var18['hitSlop'] = var26;
            var18['onPress'] = var23;
            var23 = var13.headerLeftPressable;
            var18['style'] = var23;
            var32 = _closure1_slot12;
            var23 = 19;
            var26 = var25[var23];
            var26 = var21.bind(var4)(var26);
            var29 = var26.Text;
            var28 = {'color': 'text-brand', 'variant': 'text-md/semibold'};
            var26 = 17;
            var33 = var25[var26];
            var33 = var21.bind(var4)(var33);
            var35 = var33.intl;
            var34 = var35.string;
            var33 = var25[var26];
            var33 = var21.bind(var4)(var33);
            var33 = var33.t;
            var33 = var33["13/7kX"];
            var33 = var34.bind(var35)(var33);
            var28['children'] = var33;
            var28 = var32.bind(var4)(var29, var28);
            var18['children'] = var28;
            var18 = var22.bind(var4)(var19, var18);
            var5['children'] = var18;
            var5 = var12.bind(var4)(var10, var5);
            var10 = new Array(3);
            var10[0] = var5;
            var19 = _closure1_slot13;
            var18 = _closure1_slot5;
            var12 = {'style': null, 'pointerEvents': 'none', 'accessible': true, 'accessibilityRole': 'header'};
            var5 = var13.headerTextContainer;
            var12['style'] = var5;
            var5 = true;
            var22 = global;
            var22 = var22.HermesInternal;
            var29 = var22.concat;
            var28 = '';
            var22 = ', ';
            var22 = var29.bind(var28)(var30, var22, var31);
            var12['accessibilityLabel'] = var22;
            var29 = _closure1_slot12;
            var22 = var25[var23];
            var22 = var21.bind(var4)(var22);
            var28 = var22.Text;
            var22 = {'style': null, 'color': 'mobile-text-heading-primary', 'variant': 'heading-lg/bold', 'tabularNumbers': true};
            var32 = var13.centerText;
            var22['style'] = var32;
            var22['children'] = var30;
            var28 = var29.bind(var4)(var28, var22);
            var22 = new Array(2);
            var22[0] = var28;
            var30 = _closure1_slot12;
            var28 = var25[var23];
            var28 = var21.bind(var4)(var28);
            var29 = var28.Text;
            var28 = {'style': null, 'variant': 'text-xs/medium', 'color': 'text-muted'};
            var32 = var13.centerText;
            var28['style'] = var32;
            var28['children'] = var31;
            var28 = var30.bind(var4)(var29, var28);
            var22[1] = var28;
            var12['children'] = var22;
            var12 = var19.bind(var4)(var18, var12);
            var10[1] = var12;
            var19 = _closure1_slot12;
            var18 = _closure1_slot5;
            var12 = {};
            var22 = var13.headerSideItem;
            var12['style'] = var22;
            var22 = _closure1_slot12;
            var20 = var25[var20];
            var20 = var21.bind(var4)(var20);
            var21 = var20.PressableOpacity;
            var20 = {};
            var20['accessibilityRole'] = var24;
            var24 = _closure1_slot15;
            var20['hitSlop'] = var24;
            var20['onPress'] = var1;
            var20['disabled'] = var27;
            var24 = var13.headerRightPressable;
            var1 = new Array(2);
            var1[0] = var24;
            var24 = {};
            var25 = 1;
            if(!var27) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var25 = 0.2;
case 41:
            var24['opacity'] = var25;
            var1[1] = var24;
            var20['style'] = var1;
            var25 = _closure1_slot12;
            var29 = _closure1_slot0;
            var1 = _closure1_slot2;
            var23 = var1[var23];
            var23 = var29.bind(var4)(var23);
            var24 = var23.Text;
            var23 = {'color': 'text-brand', 'variant': 'text-md/semibold', 'lineBreakMode': 'tail', 'lineClamp': 1};
            var27 = var1[var26];
            var27 = var29.bind(var4)(var27);
            var28 = var27.intl;
            var27 = var28.string;
            var26 = var1[var26];
            var26 = var29.bind(var4)(var26);
            var26 = var26.t;
            var26 = var26.i9IRUc;
            var26 = var27.bind(var28)(var26);
            var23['children'] = var26;
            var23 = var25.bind(var4)(var24, var23);
            var20['children'] = var23;
            var20 = var22.bind(var4)(var21, var20);
            var12['children'] = var20;
            var12 = var19.bind(var4)(var18, var12);
            var10[2] = var12;
            var2['children'] = var10;
            var10 = var8.bind(var4)(var3, var2);
            var3 = _closure1_slot13;
            var2 = _closure1_slot1;
            var12 = 20;
            var1 = var1[var12];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var18 = var13.headerContainer;
            var8 = new Array(2);
            var8[0] = var18;
            var8[1] = var17;
            var1['style'] = var8;
            var8 = 'box-none';
            var1['pointerEvents'] = var8;
            var6 = null;
            if(!(var5 !== var7)) { _fun0001_ip = 43; continue _fun0001 }
case 44:
            var8 = _closure1_slot12;
            var7 = _closure1_slot5;
            var5 = {};
            var17 = var13.headerScrim;
            var5['style'] = var17;
            var6 = var8.bind(var4)(var7, var5);
case 43:
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot13;
            var7 = _closure1_slot1;
            var6 = _closure1_slot2;
            var6 = var6[var12];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var17 = var13.header;
            var12 = new Array(3);
            var12[0] = var17;
            var12[1] = var16;
            var12[2] = var15;
            var6['style'] = var12;
            var6['animatedProps'] = var11;
            var12 = _closure1_slot12;
            var11 = _closure1_slot4;
            var9 = {};
            var9['onPress'] = var14;
            var13 = var13.pressableHeaderBar;
            var9['style'] = var13;
            var11 = var12.bind(var4)(var11, var9);
            var9 = new Array(2);
            var9[0] = var11;
            var9[1] = var10;
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
    var7 = var4.Pressable;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot7 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var12.bind(var1)(var4);
    var _closure1_slot8 = var4;
    var4 = 5;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MediaPickerActionSheetEngagedActions;
    var _closure1_slot9 = var4;
    var4 = 6;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot10 = var7;
    var4 = var4.Permissions;
    var _closure1_slot11 = var4;
    var4 = 7;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot12 = var7;
    var7 = var4.jsxs;
    var _closure1_slot13 = var7;
    var4 = var4.Fragment;
    var _closure1_slot14 = var4;
    var4 = {'top': 12, 'left': 12, 'right': 12, 'bottom': 12};
    var _closure1_slot15 = var4;
    var4 = {'mass': 0.1, 'damping': 13, 'stiffness': 270, 'overshootClamping': true};
    var _closure1_slot16 = var4;
    var4 = 8;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'height': 15, 'position': 'absolute', 'top': 0, 'right': 0, 'left': 0};
    var11 = 9;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var4['headerScrim'] = var9;
    var9 = {'borderTopLeftRadius': null, 'borderTopRightRadius': null, 'position': 'absolute', 'height': 150, 'overflow': 'hidden', 'top': 0, 'left': 0, 'right': 0};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.none;
    var9['borderTopLeftRadius'] = var10;
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.none;
    var9['borderTopRightRadius'] = var10;
    var4['headerContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'paddingHorizontal': 16, 'paddingVertical': 18, 'backgroundColor': null, 'flexDirection': 'row', 'alignItems': 'center', 'flexShrink': 0, 'flex': 1};
    var10 = var6[var11];
    var10 = var12.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BACKGROUND_BASE_LOWER;
    var9['backgroundColor'] = var10;
    var10 = 'center';
    var4['header'] = var9;
    var9 = {'position': 'absolute', 'top': 0, 'right': 0, 'left': 0, 'bottom': 0};
    var4['pressableHeaderBar'] = var9;
    var9 = {};
    var11 = var6[var11];
    var11 = var12.bind(var1)(var11);
    var11 = var11.spacing;
    var11 = var11.PX_16;
    var9['paddingHorizontal'] = var11;
    var4['headerTextContainer'] = var9;
    var9 = {'flex': 1, 'alignSelf': 'stretch'};
    var4['headerSideItem'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'flex-start'};
    var4['headerLeftPressable'] = var9;
    var9 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'flex-end'};
    var4['headerRightPressable'] = var9;
    var9 = {};
    var9['textAlign'] = var10;
    var4['centerText'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot17 = var4;
    var4 = {};
    var7 = 'function MediaKeyboardBottomSheetHeaderTsx1(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints,INDEX_HEADER_CHANGE_THRESHOLD,reducedMotion,withSpring,HEADER_SPRING}=this.__closure;const nearTop=animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,INDEX_HEADER_CHANGE_THRESHOLD);const targetOpacity=nearTop?1:0;const targetTranslateY=nearTop?0:-30;const targetScale=nearTop?1:0.9;return{opacity:reducedMotion?targetOpacity:withSpring(targetOpacity,HEADER_SPRING),transform:[{translateY:reducedMotion?targetTranslateY:withSpring(targetTranslateY,HEADER_SPRING)},{scale:reducedMotion?targetScale:withSpring(targetScale,HEADER_SPRING)}]};}';
    var4['code'] = var7;
    var _closure1_slot18 = var4;
    var4 = {};
    var7 = "function MediaKeyboardBottomSheetHeaderTsx2(){const{animatedSnapPoints,interpolate,animatedIndex,MAX_BORDER_RADIUS}=this.__closure;const borderRadius=animatedSnapPoints.get().length===1?interpolate(animatedIndex.get(),[-1,0],[0,MAX_BORDER_RADIUS],'clamp'):interpolate(animatedIndex.get(),[0,1],[0,MAX_BORDER_RADIUS],'clamp');return{borderTopLeftRadius:borderRadius,borderTopRightRadius:borderRadius};}";
    var4['code'] = var7;
    var _closure1_slot19 = var4;
    var4 = {};
    var7 = "function MediaKeyboardBottomSheetHeaderTsx3(){const{animatedIndex,animatedIndexThreshold,animatedSnapPoints}=this.__closure;return{pointerEvents:animatedIndex.get()>animatedIndexThreshold(animatedSnapPoints,0.8)?'box-none':'none'};}";
    var4['code'] = var7;
    var _closure1_slot20 = var4;
    var4 = 23;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/media_keyboard/native/components/MediaKeyboardBottomSheetHeader.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MediaKeyboardBottomSheetHeader(arg1) {
        var9 = arg1;
        var4 = _closure1_slot13;
        var3 = _closure1_slot14;
        var2 = {};
        var8 = _closure1_slot12;
        var7 = _closure1_slot21;
        var5 = {};
        var1 = var9.title;
        var5['title'] = var1;
        var1 = var9.subtitle;
        var5['subtitle'] = var1;
        var1 = var9.animatedIndex;
        var5['animatedIndex'] = var1;
        var1 = var9.channel;
        var5['channel'] = var1;
        var1 = var9.draftType;
        var5['draftType'] = var1;
        var1 = var9.hideScrim;
        var5['hideScrim'] = var1;
        var1 = var9.onBack;
        var5['onBack'] = var1;
        var1 = var9.onPress;
        var5['onPress'] = var1;
        var1 = var9.onViewAll;
        var5['onViewAll'] = var1;
        var1 = var9.uploadLimit;
        var5['uploadLimit'] = var1;
        var1 = var9.disableWhenReachedLimit;
        var5['disableWhenReachedLimit'] = var1;
        var1 = var9.includedUploadIds;
        var5['includedUploadIds'] = var1;
        var1 = undefined;
        var7 = var8.bind(var1)(var7, var5);
        var5 = new Array(3);
        var5[0] = var7;
        var12 = _closure1_slot12;
        var7 = _closure1_slot1;
        var10 = _closure1_slot2;
        var8 = 21;
        var8 = var10[var8];
        var11 = var7.bind(var1)(var8);
        var8 = {};
        var13 = var9.animatedIndex;
        var8['animatedIndex'] = var13;
        var13 = var9.overflowButtons;
        var8['overflowButtons'] = var13;
        var8 = var12.bind(var1)(var11, var8);
        var5[1] = var8;
        var8 = _closure1_slot12;
        var6 = 22;
        var6 = var10[var6];
        var7 = var7.bind(var1)(var6);
        var6 = {};
        var10 = var9.animatedIndex;
        var6['animatedIndex'] = var10;
        var9 = var9.onPress;
        var6['onPress'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[2] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var3['default'] = var2;
    return var1;
})();