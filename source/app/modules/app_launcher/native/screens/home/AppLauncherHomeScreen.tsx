// app/modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var14 = native3;
    var8 = native4;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var14;
    var _closure1_slot2 = var8;
    var _closure1_slot3 = var7;
    var1 = function AppRowLabel(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var9 = var1.renderedName;
            var1 = var1.showsPromoted;
            var2 = _closure1_slot26;
            var5 = undefined;
            var12 = var2.bind(var5)();
            if(var1) { _fun0001_ip = 85; continue _fun0001 }
 31:
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var4 = _closure1_slot3;
            var1 = 16;
            var1 = var4[var1];
            var1 = var2.bind(var5)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var1['children'] = var9;
            var1 = var3.bind(var5)(var2, var1);
            _fun0001_ip = 311; continue _fun0001;
 85:
            var4 = _closure1_slot21;
            var3 = _closure1_slot6;
            var2 = {};
            var6 = var12.appRowLabelWithPromotedContainer;
            var2['style'] = var6;
            var8 = _closure1_slot20;
            var16 = _closure1_slot0;
            var17 = _closure1_slot3;
            var10 = 16;
            var6 = var17[var10];
            var6 = var16.bind(var5)(var6);
            var7 = var6.Text;
            var6 = {'style': null, 'variant': 'text-md/semibold', 'color': 'header-primary', 'lineClamp': 1};
            var13 = var12.appRowLabelWithPromotedTextContainer;
            var6['style'] = var13;
            var6['children'] = var9;
            var7 = var8.bind(var5)(var7, var6);
            var6 = new Array(2);
            var6[0] = var7;
            var9 = _closure1_slot20;
            var8 = _closure1_slot6;
            var7 = {};
            var12 = var12.promotedLabel;
            var7['style'] = var12;
            var12 = _closure1_slot20;
            var10 = var17[var10];
            var10 = var16.bind(var5)(var10);
            var11 = var10.Text;
            var10 = {'variant': 'text-xxs/semibold', 'color': 'text-muted'};
            var13 = 17;
            var14 = var17[var13];
            var14 = var16.bind(var5)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var5)(var13);
            var13 = var13.t;
            var13 = var13./eVltr;
            var13 = var14.bind(var15)(var13);
            var10['children'] = var13;
            var10 = var12.bind(var5)(var11, var10);
            var7['children'] = var10;
            var7 = var9.bind(var5)(var8, var7);
            var6[1] = var7;
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
 311:
            return var1;
        }
    };
    var _closure1_slot27 = var1;
    var2 = function BaseAppRow(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var11 = var2.application;
            var _closure2_slot0 = var11;
            var9 = var2.iconSource;
            var5 = var2.onPress;
            var7 = var2.isFirstRow;
            var4 = undefined;
            if(!(var7 === var4)) { _fun0002_ip = 39; continue _fun0002 }
 37:
            var7 = false;
 39:
            var6 = var2.isLastRow;
            if(!(var6 === var4)) { _fun0002_ip = 51; continue _fun0002 }
 49:
            var6 = false;
 51:
            var12 = var2.showsPromoted;
            if(!(var12 === var4)) { _fun0002_ip = 63; continue _fun0002 }
 61:
            var12 = false;
 63:
            var14 = null;
            var10 = var14 != var9;
            if(!var10) { _fun0002_ip = 112; continue _fun0002 }
 72:
            var8 = _closure1_slot20;
            var3 = _closure1_slot1;
            var13 = _closure1_slot3;
            var2 = 18;
            var2 = var13[var2];
            var3 = var3.bind(var4)(var2);
            var2 = {};
            var2['iconSource'] = var9;
            var10 = var8.bind(var4)(var3, var2);
 112:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var16 = 19;
            var2 = var2[var16];
            var9 = var3.bind(var4)(var2);
            var3 = var9.getSectionName;
            var2 = var11;
            if(!(var14 == var11)) { _fun0002_ip = 171; continue _fun0002 }
 148:
            var15 = _closure1_slot0;
            var13 = _closure1_slot3;
            var13 = var13[var16];
            var13 = var15.bind(var4)(var13);
            var2 = var13.FAKE_BUILT_IN_APP;
 171:
            var13 = var3.bind(var9)(var2);
            if(var12) { _fun0002_ip = 237; continue _fun0002 }
 179:
            var3 = _closure1_slot0;
            var2 = _closure1_slot3;
            var2 = var2[var16];
            var9 = var3.bind(var4)(var2);
            var3 = var9.isPromotedApplication;
            var2 = var11;
            if(!(var14 == var2)) { _fun0002_ip = 232; continue _fun0002 }
 209:
            var15 = _closure1_slot0;
            var14 = _closure1_slot3;
            var14 = var14[var16];
            var14 = var15.bind(var4)(var14);
            var2 = var14.FAKE_BUILT_IN_APP;
 232:
            var12 = var3.bind(var9)(var2);
 237:
            var9 = _closure1_slot5;
            var3 = var9.useMemo;
            var2 = new Array(1);
            var2[0] = var11;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var3 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var9 = 19;
                    var1 = var1[var9];
                    var7 = undefined;
                    var5 = var3.bind(var7)(var1);
                    var3 = var5.getSectionDescription;
                    var1 = _closure2_slot0;
                    var4 = null;
                    if(!(var4 == var1)) { _fun0003_ip = 69; continue _fun0003 }
 44:
                    var8 = _closure1_slot0;
                    var1 = _closure1_slot3;
                    var1 = var1[var9];
                    var1 = var8.bind(var7)(var1);
                    var1 = var1.FAKE_BUILT_IN_APP;
                    _fun0003_ip = 73; continue _fun0003;
 69:
                    var1 = _closure2_slot0;
 73:
                    var5 = var3.bind(var5)(var1);
                    var3 = var4 != var5;
                    var1 = null;
                    if(!var3) { _fun0003_ip = 180; continue _fun0003 }
 87:
                    var3 = '';
                    var1 = null;
                    if(!(var3 !== var5)) { _fun0003_ip = 180; continue _fun0003 }
 97:
                    var6 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 20;
                    var2 = var8[var2];
                    var4 = var6.bind(var7)(var2);
                    var3 = var4.renderMessagePreviewMarkup;
                    var2 = {};
                    var2['content'] = var5;
                    var5 = false;
                    var2['muted'] = var5;
                    var5 = 21;
                    var5 = var8[var5];
                    var5 = var6.bind(var7)(var5);
                    var5 = var5.ChannelListLayoutTypes;
                    var5 = var5.COMPACT;
                    var2['layout'] = var5;
                    var5 = 'text-muted';
                    var2['color'] = var5;
                    var1 = var3.bind(var4)(var2);
 180:
                    return var1;
                }
            };
            var9 = var3.bind(var9)(var1, var2);
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var11 = _closure1_slot3;
            var1 = 22;
            var1 = var11[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['icon'] = var10;
            var11 = _closure1_slot20;
            var10 = _closure1_slot27;
            var8 = {};
            var8['renderedName'] = var13;
            var8['showsPromoted'] = var12;
            var8 = var11.bind(var4)(var10, var8);
            var1['label'] = var8;
            var8 = 1;
            var1['labelLineClamp'] = var8;
            var1['subLabel'] = var9;
            var1['subLabelLineClamp'] = var8;
            var1['start'] = var7;
            var1['end'] = var6;
            var6 = true;
            var1['arrow'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot28 = var2;
    var1 = function AppRow(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var1 = arg1;
            var9 = var1.section;
            var7 = var1.onPress;
            var6 = var1.isFirstRow;
            var4 = undefined;
            if(!(var6 === var4)) { _fun0004_ip = 27; continue _fun0004 }
 25:
            var6 = false;
 27:
            var5 = var1.isLastRow;
            if(!(var5 === var4)) { _fun0004_ip = 39; continue _fun0004 }
 37:
            var5 = false;
 39:
            var3 = _closure1_slot0;
            var8 = _closure1_slot3;
            var2 = 23;
            var2 = var8[var2];
            var8 = var3.bind(var4)(var2);
            var3 = var8.getAppLauncherIconSource;
            var2 = var9.application;
            var8 = var3.bind(var8)(var2);
            var3 = _closure1_slot20;
            var2 = _closure1_slot28;
            var1 = {};
            var9 = var9.application;
            var1['application'] = var9;
            var1['iconSource'] = var8;
            var1['onPress'] = var7;
            var1['isFirstRow'] = var6;
            var1['isLastRow'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot29 = var1;
    var1 = function ActivityRow(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var10 = var1.section;
            var _closure2_slot0 = var10;
            var13 = var1.onPress;
            var _closure2_slot1 = var13;
            var8 = var1.isFirstRow;
            var4 = undefined;
            if(!(var8 === var4)) { _fun0005_ip = 37; continue _fun0005 }
 35:
            var8 = false;
 37:
            var7 = var1.isLastRow;
            if(!(var7 === var4)) { _fun0005_ip = 49; continue _fun0005 }
 47:
            var7 = false;
 49:
            var5 = _closure1_slot1;
            var6 = _closure1_slot3;
            var3 = 24;
            var3 = var6[var3];
            var11 = var5.bind(var4)(var3);
            var9 = var11.getApplicationIconSource;
            var5 = {};
            var3 = var10.application;
            var3 = var3.id;
            var5['id'] = var3;
            var3 = var10.application;
            var3 = var3.icon;
            var5['icon'] = var3;
            var12 = var10.application;
            var3 = null;
            var14 = var3 == var12;
            var6 = undefined;
            if(var14) { _fun0005_ip = 130; continue _fun0005 }
 124:
            var6 = var12.bot;
 130:
            var5['bot'] = var6;
            var6 = true;
            var5['botIconFirst'] = var6;
            var12 = var9.bind(var11)(var5);
            var11 = var3 != var12;
            if(!var11) { _fun0005_ip = 191; continue _fun0005 }
 154:
            var9 = _closure1_slot20;
            var5 = _closure1_slot1;
            var14 = _closure1_slot3;
            var3 = 18;
            var3 = var14[var3];
            var5 = var5.bind(var4)(var3);
            var3 = {};
            var3['iconSource'] = var12;
            var11 = var9.bind(var4)(var5, var3);
 191:
            var12 = _closure1_slot5;
            var9 = var12.useMemo;
            var5 = new Array(1);
            var5[0] = var10;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var1 = _closure2_slot0;
                    var1 = var1.application;
                    var5 = var1.description;
                    var3 = null;
                    var2 = var3 != var5;
                    var1 = null;
                    if(!var2) { _fun0006_ip = 126; continue _fun0006 }
 28:
                    var2 = '';
                    var1 = null;
                    if(!(var2 !== var5)) { _fun0006_ip = 126; continue _fun0006 }
 38:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 20;
                    var2 = var8[var2];
                    var6 = undefined;
                    var4 = var7.bind(var6)(var2);
                    var3 = var4.renderMessagePreviewMarkup;
                    var2 = {};
                    var2['content'] = var5;
                    var5 = false;
                    var2['muted'] = var5;
                    var5 = 21;
                    var5 = var8[var5];
                    var5 = var7.bind(var6)(var5);
                    var5 = var5.ChannelListLayoutTypes;
                    var5 = var5.COMPACT;
                    var2['layout'] = var5;
                    var5 = 'text-muted';
                    var2['color'] = var5;
                    var1 = var3.bind(var4)(var2);
 126:
                    return var1;
                }
            };
            var9 = var9.bind(var12)(var3, var5);
            var12 = _closure1_slot5;
            var5 = var12.useCallback;
            var3 = new Array(2);
            var3[0] = var10;
            var3[1] = var13;
            var2 = function() {
                var3 = _closure2_slot1;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var5 = var5.bind(var12)(var2, var3);
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var12 = _closure1_slot3;
            var1 = 22;
            var1 = var12[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.TableRow;
            var1 = {};
            var1['icon'] = var11;
            var10 = var10.application;
            var10 = var10.name;
            var1['label'] = var10;
            var1['subLabel'] = var9;
            var9 = 1;
            var1['subLabelLineClamp'] = var9;
            var1['start'] = var8;
            var1['end'] = var7;
            var1['arrow'] = var6;
            var1['onPress'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot30 = var1;
    var1 = function ActivityItemTuple(arg1) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var2 = arg1;
            var20 = var2.context;
            var19 = var2.sectionName;
            var18 = var2.onPress;
            var17 = var2.usesHandleActivityItemSelected;
            var16 = var2.onActivityItemSelected;
            var21 = var2.shelfItem1;
            var15 = var2.shelfItem2;
            var8 = var2.isLastTuple;
            var14 = var2.entrypoint;
            var6 = var2.containerWidth;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot26;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0008_ip = 103; continue _fun0008 }
 13:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 25;
                    var5 = var7[var3];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var8 = _closure2_slot0;
                    var1 = 2;
                    var8 = var8 / var1;
                    var1 = _closure1_slot15;
                    var8 = var8 - var1;
                    var1 = 6;
                    var1 = var8 - var1;
                    var5 = var5.bind(var4)(var1);
                    var1 = {};
                    var1['width'] = var5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var2 = _closure1_slot23;
                    var2 = var5 / var2;
                    var2 = var3.bind(var4)(var2);
                    var1['height'] = var2;
                    return var1;
 103:
                    var1 = {};
                    var2 = undefined;
                    var1['width'] = var2;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var11.activityItemTupleContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = 12;
            if(!var8) { _fun0007_ip = 144; continue _fun0007 }
 142:
            var7 = undefined;
 144:
            var6['marginBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var11.activityItemTupleShelfItemContainer;
            var5['style'] = var8;
            var12 = _closure1_slot20;
            var9 = _closure1_slot32;
            var8 = {};
            var8['context'] = var20;
            var8['sectionName'] = var19;
            var8['onPress'] = var18;
            var8['usesHandleActivityItemSelected'] = var17;
            var8['onActivityItemSelected'] = var16;
            var8['shelfItem'] = var21;
            var8['entrypoint'] = var14;
            var21 = var13.width;
            var8['imageWidth'] = var21;
            var21 = var13.height;
            var8['imageHeight'] = var21;
            var8 = var12.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var15;
            if(!var6) { _fun0007_ip = 371; continue _fun0007 }
 272:
            var9 = _closure1_slot20;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.activityItemTupleShelfItemContainer;
            var7['style'] = var11;
            var12 = _closure1_slot20;
            var11 = _closure1_slot32;
            var10 = {};
            var10['context'] = var20;
            var10['sectionName'] = var19;
            var10['onPress'] = var18;
            var10['usesHandleActivityItemSelected'] = var17;
            var10['onActivityItemSelected'] = var16;
            var10['shelfItem'] = var15;
            var10['entrypoint'] = var14;
            var14 = var13.width;
            var10['imageWidth'] = var14;
            var13 = var13.height;
            var10['imageHeight'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 371:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot31 = var1;
    var1 = function ActivityItem(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var1 = arg1;
            var26 = var1.context;
            var _closure2_slot0 = var26;
            var12 = var1.shelfItem;
            var _closure2_slot1 = var12;
            var25 = var1.sectionName;
            var13 = var1.onPress;
            var _closure2_slot2 = var13;
            var2 = var1.usesHandleActivityItemSelected;
            var4 = undefined;
            if(!(var2 === var4)) { _fun0009_ip = 53; continue _fun0009 }
 51:
            var2 = false;
 53:
            var _closure2_slot3 = var2;
            var22 = var1.onActivityItemSelected;
            var21 = var1.entrypoint;
            var18 = var1.imageWidth;
            var15 = var1.imageHeight;
            var _closure2_slot4 = var4;
            var _closure2_slot5 = var4;
            var1 = _closure1_slot26;
            var11 = var1.bind(var4)();
            var3 = _closure1_slot0;
            var10 = _closure1_slot3;
            var1 = 26;
            var1 = var10[var1];
            var3 = var3.bind(var4)(var1);
            var1 = var3.useHeroMediaDimensions;
            var17 = var1.bind(var3)();
            var3 = _closure1_slot5;
            var1 = var3.useState;
            var19 = false;
            var3 = var1.bind(var3)(var19);
            var1 = _closure1_slot4;
            var16 = 2;
            var3 = var1.bind(var4)(var3, var16);
            var6 = 0;
            var1 = var3[var6];
            var5 = 1;
            var3 = var3[var5];
            _closure2_slot4 = var3;
            var8 = _closure1_slot1;
            var3 = 27;
            var3 = var10[var3];
            var8 = var8.bind(var4)(var3);
            var3 = {};
            var10 = var12.application;
            var10 = var10.id;
            var3['applicationId'] = var10;
            var14 = null;
            var10 = var18;
            if(!(var14 == var10)) { _fun0009_ip = 222; continue _fun0009 }
 217:
            var10 = var17.width;
 222:
            var3['size'] = var10;
            var10 = ['embedded_cover'];
            var3['names'] = var10;
            var8 = var8.bind(var4)(var3);
            var10 = _closure1_slot5;
            var3 = var10.useId;
            var20 = var3.bind(var10)();
            var10 = _closure1_slot0;
            var17 = _closure1_slot3;
            var3 = 28;
            var3 = var17[var3];
            var23 = var10.bind(var4)(var3);
            var17 = var23.useStateFromStoresArray;
            var3 = _closure1_slot8;
            var10 = new Array(1);
            var10[0] = var3;
            var3 = function() {
                _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                    var3 = _closure1_slot8;
                    var1 = var3.isLaunchingActivity;
                    var3 = var1.bind(var3)();
                    var1 = new Array(2);
                    var1[0] = var3;
                    var5 = _closure1_slot8;
                    var4 = var5.getLaunchState;
                    var2 = _closure2_slot1;
                    var2 = var2.application;
                    var3 = var2.id;
                    var2 = _closure2_slot0;
                    var8 = var2.type;
                    var7 = 'channel';
                    var2 = undefined;
                    if(!(var7 === var8)) { _fun0010_ip = 85; continue _fun0010 }
 71:
                    var6 = _closure2_slot0;
                    var6 = var6.channel;
                    var2 = var6.id;
 85:
                    var2 = var4.bind(var5)(var3, var2);
                    var1[1] = var2;
                    return var1;
                }
            };
            var10 = var17.bind(var23)(var10, var3);
            var3 = _closure1_slot4;
            var3 = var3.bind(var4)(var10, var16);
            var6 = var3[var6];
            var3 = var3[var5];
            var17 = var14 != var3;
            if(!var17) { _fun0009_ip = 341; continue _fun0009 }
 335:
            var17 = var3.isLaunching;
 341:
            if(!var17) { _fun0009_ip = 354; continue _fun0009 }
 344:
            var3 = var3.componentId;
            var17 = var3 === var20;
 354:
            var23 = _closure1_slot0;
            var24 = _closure1_slot3;
            var3 = 19;
            var3 = var24[var3];
            var10 = var23.bind(var4)(var3);
            var5 = var10.getShelfBadgeTypeIfActive;
            var3 = var12.application;
            var16 = var5.bind(var10)(var3);
            var3 = 23;
            var3 = var24[var3];
            var10 = var23.bind(var4)(var3);
            var5 = var10.useHandleActivityItemSelected;
            var3 = {};
            var27 = var12.application;
            var27 = var27.id;
            var3['applicationId'] = var27;
            var3['context'] = var26;
            var3['sectionName'] = var25;
            var3['onActivityItemSelected'] = var22;
            var22 = 29;
            var22 = var24[var22];
            var22 = var23.bind(var4)(var22);
            var22 = var22.ApplicationCommandTriggerLocations;
            var22 = var22.APP_LAUNCHER_HOME;
            var3['location'] = var22;
            var3['entrypoint'] = var21;
            var3['launchingComponentId'] = var20;
            var3['fetchesApplication'] = var19;
            var3 = var5.bind(var10)(var3);
            var19 = var3.handleActivityItemSelected;
            _closure2_slot5 = var19;
            var10 = _closure1_slot5;
            var5 = var10.useCallback;
            var3 = new Array(4);
            var3[0] = var19;
            var3[1] = var13;
            var3[2] = var12;
            var3[3] = var2;
            var2 = function() {
                _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                    var2 = _closure2_slot3;
                    if(!var2) { _fun0011_ip = 20; continue _fun0011 }
 10:
                    var3 = _closure2_slot5;
                    var2 = undefined;
                    var2 = var3.bind(var2)();
 20:
                    var3 = _closure2_slot2;
                    var2 = _closure2_slot1;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                }
            };
            var5 = var5.bind(var10)(var2, var3);
            var3 = var8.state;
            var2 = 'not-found';
            var2 = var2 === var3;
            if(var2) { _fun0009_ip = 559; continue _fun0009 }
 556:
            var2 = var1;
 559:
            var3 = var8.state;
            var1 = 'loading';
            var1 = var1 === var3;
            if(var1) { _fun0009_ip = 584; continue _fun0009 }
 575:
            var3 = var8.url;
            var1 = var14 == var3;
 584:
            if(var2) { _fun0009_ip = 673; continue _fun0009 }
 587:
            var10 = null;
            if(var1) { _fun0009_ip = 671; continue _fun0009 }
 592:
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var13 = _closure1_slot3;
            var1 = 31;
            var1 = var13[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var7 = function onError() {
                var3 = _closure2_slot4;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['onError'] = var7;
            var7 = var11.activityItemImage;
            var1['style'] = var7;
            var7 = {};
            var8 = var8.url;
            var7['uri'] = var8;
            var1['source'] = var7;
            var7 = 'cover';
            var1['resizeMode'] = var7;
            var10 = var3.bind(var4)(var2, var1);
 671:
            _fun0009_ip = 705; continue _fun0009;
 673:
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var7 = _closure1_slot3;
            var1 = 30;
            var1 = var7[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var10 = var3.bind(var4)(var2, var1);
 705:
            var3 = _closure1_slot21;
            var2 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 32;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableScale;
            var1 = {};
            var7 = var11.activityItemContainer;
            var1['style'] = var7;
            var1['disabled'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot21;
            var6 = _closure1_slot6;
            var5 = {};
            var13 = var11.activityImageContainer;
            var8 = new Array(2);
            var8[0] = var13;
            var13 = var14 != var18;
            if(!var13) { _fun0009_ip = 790; continue _fun0009 }
 786:
            var13 = var14 != var15;
 790:
            if(!var13) { _fun0009_ip = 806; continue _fun0009 }
 793:
            var14 = {};
            var14['width'] = var18;
            var14['height'] = var15;
            var13 = var14;
 806:
            var8[1] = var13;
            var5['style'] = var8;
            var8 = new Array(3);
            var8[0] = var10;
            var15 = _closure1_slot20;
            var14 = _closure1_slot1;
            var13 = _closure1_slot3;
            var10 = 33;
            var10 = var13[var10];
            var14 = var14.bind(var4)(var10);
            var10 = {};
            var10['labelType'] = var16;
            var10 = var15.bind(var4)(var14, var10);
            var8[1] = var10;
            var16 = _closure1_slot20;
            var10 = _closure1_slot0;
            var14 = 34;
            var14 = var13[var14];
            var14 = var10.bind(var4)(var14);
            var15 = var14.SubmittingOverlay;
            var14 = {};
            var14['submitting'] = var17;
            var17 = var11.submittingOverlay;
            var14['style'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var8[2] = var14;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var6 = {};
            var11 = var11.activityDetailsContainer;
            var6['style'] = var11;
            var11 = _closure1_slot20;
            var9 = 16;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'heading-sm/bold', 'color': 'header-primary'};
            var12 = var12.application;
            var12 = var12.name;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot32 = var1;
    var1 = function RecommendationItemTuple(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
            var2 = arg1;
            var18 = var2.context;
            var17 = var2.sectionName;
            var16 = var2.onPress;
            var19 = var2.item1;
            var15 = var2.item2;
            var8 = var2.isLastTuple;
            var14 = var2.entrypoint;
            var6 = var2.containerWidth;
            var _closure2_slot0 = var6;
            var2 = _closure1_slot26;
            var4 = undefined;
            var11 = var2.bind(var4)();
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(1);
            var2[0] = var6;
            var1 = function() {
                _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                    var3 = _closure2_slot0;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0013_ip = 103; continue _fun0013 }
 13:
                    var6 = _closure1_slot1;
                    var7 = _closure1_slot3;
                    var3 = 25;
                    var5 = var7[var3];
                    var4 = undefined;
                    var5 = var6.bind(var4)(var5);
                    var8 = _closure2_slot0;
                    var1 = 2;
                    var8 = var8 / var1;
                    var1 = _closure1_slot15;
                    var8 = var8 - var1;
                    var1 = 6;
                    var1 = var8 - var1;
                    var5 = var5.bind(var4)(var1);
                    var1 = {};
                    var1['width'] = var5;
                    var3 = var7[var3];
                    var3 = var6.bind(var4)(var3);
                    var2 = _closure1_slot23;
                    var2 = var5 / var2;
                    var2 = var3.bind(var4)(var2);
                    var1['height'] = var2;
                    return var1;
 103:
                    var1 = {};
                    var2 = undefined;
                    var1['width'] = var2;
                    var1['height'] = var2;
                    return var1;
                }
            };
            var13 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot6;
            var1 = {};
            var6 = var11.activityItemTupleContainer;
            var5 = new Array(2);
            var5[0] = var6;
            var6 = {};
            var7 = 12;
            if(!var8) { _fun0012_ip = 132; continue _fun0012 }
 130:
            var7 = undefined;
 132:
            var6['marginBottom'] = var7;
            var5[1] = var6;
            var1['style'] = var5;
            var7 = _closure1_slot20;
            var6 = _closure1_slot6;
            var5 = {};
            var8 = var11.activityItemTupleShelfItemContainer;
            var5['style'] = var8;
            var12 = _closure1_slot20;
            var9 = _closure1_slot34;
            var8 = {};
            var8['context'] = var18;
            var8['sectionName'] = var17;
            var8['onPress'] = var16;
            var8['item'] = var19;
            var8['entrypoint'] = var14;
            var19 = var13.width;
            var8['imageWidth'] = var19;
            var19 = var13.height;
            var8['imageHeight'] = var19;
            var8 = var12.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var6 = null;
            var6 = var6 != var15;
            if(!var6) { _fun0012_ip = 337; continue _fun0012 }
 249:
            var9 = _closure1_slot20;
            var8 = _closure1_slot6;
            var7 = {};
            var11 = var11.activityItemTupleShelfItemContainer;
            var7['style'] = var11;
            var12 = _closure1_slot20;
            var11 = _closure1_slot34;
            var10 = {};
            var10['context'] = var18;
            var10['sectionName'] = var17;
            var10['onPress'] = var16;
            var10['item'] = var15;
            var10['entrypoint'] = var14;
            var14 = var13.width;
            var10['imageWidth'] = var14;
            var13 = var13.height;
            var10['imageHeight'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 337:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot33 = var1;
    var1 = function RecommendationItem(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
            var1 = arg1;
            var5 = var1.item;
            var2 = var1.sectionName;
            var _closure2_slot0 = var2;
            var13 = var1.onPress;
            var _closure2_slot1 = var13;
            var17 = var1.imageWidth;
            var16 = var1.imageHeight;
            var3 = var1.context;
            var1 = var1.entrypoint;
            var1 = _closure1_slot26;
            var4 = undefined;
            var10 = var1.bind(var4)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var1 = 26;
            var1 = var8[var1];
            var3 = var7.bind(var4)(var1);
            var1 = var3.useHeroMediaDimensions;
            var14 = var1.bind(var3)();
            var11 = _closure1_slot5;
            var3 = var11.useState;
            var1 = false;
            var11 = var3.bind(var11)(var1);
            var3 = _closure1_slot4;
            var1 = 2;
            var11 = var3.bind(var4)(var11, var1);
            var1 = 0;
            var1 = var11[var1];
            var3 = 1;
            var3 = var11[var3];
            var _closure2_slot2 = var3;
            var12 = var5.application;
            var _closure2_slot3 = var12;
            var18 = 19;
            var3 = var8[var18];
            var7 = var7.bind(var4)(var3);
            var3 = var7.isEmbeddedApp;
            var11 = var3.bind(var7)(var12);
            var7 = _closure1_slot1;
            var3 = 27;
            var3 = var8[var3];
            var7 = var7.bind(var4)(var3);
            var3 = {};
            var8 = var12.id;
            var3['applicationId'] = var8;
            var15 = null;
            var8 = var17;
            if(!(var15 == var8)) { _fun0014_ip = 214; continue _fun0014 }
 209:
            var8 = var14.width;
 214:
            var3['size'] = var8;
            var8 = ['embedded_cover'];
            var3['names'] = var8;
            var7 = var7.bind(var4)(var3);
            var3 = var5.overrideImageUrl;
            if(!(var15 != var3)) { _fun0014_ip = 270; continue _fun0014 }
 247:
            var3 = {};
            var8 = 'loaded';
            var3['state'] = var8;
            var5 = var5.overrideImageUrl;
            var3['url'] = var5;
            var7 = var3;
 270:
            var8 = _closure1_slot5;
            var5 = var8.useCallback;
            var3 = new Array(3);
            var3[0] = var13;
            var3[1] = var12;
            var3[2] = var2;
            var2 = function() {
                var4 = _closure2_slot1;
                var3 = _closure2_slot3;
                var2 = _closure2_slot0;
                var1 = undefined;
                var2 = var4.bind(var1)(var3, var2);
                return var1;
            };
            var5 = var5.bind(var8)(var2, var3);
            var3 = var7.state;
            var2 = 'not-found';
            var2 = var2 === var3;
            if(var2) { _fun0014_ip = 329; continue _fun0014 }
 326:
            var2 = var1;
 329:
            var3 = var7.state;
            var1 = 'loading';
            var1 = var1 === var3;
            if(var1) { _fun0014_ip = 354; continue _fun0014 }
 345:
            var3 = var7.url;
            var1 = var15 == var3;
 354:
            if(var2) { _fun0014_ip = 443; continue _fun0014 }
 357:
            var13 = null;
            if(var1) { _fun0014_ip = 441; continue _fun0014 }
 362:
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var8 = _closure1_slot3;
            var1 = 31;
            var1 = var8[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var6 = function onError() {
                var3 = _closure2_slot2;
                var2 = undefined;
                var1 = true;
                var1 = var3.bind(var2)(var1);
                return var1;
            };
            var1['onError'] = var6;
            var6 = var10.activityItemImage;
            var1['style'] = var6;
            var6 = {};
            var7 = var7.url;
            var6['uri'] = var7;
            var1['source'] = var6;
            var6 = 'cover';
            var1['resizeMode'] = var6;
            var13 = var3.bind(var4)(var2, var1);
 441:
            _fun0014_ip = 475; continue _fun0014;
 443:
            var3 = _closure1_slot20;
            var2 = _closure1_slot1;
            var6 = _closure1_slot3;
            var1 = 30;
            var1 = var6[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var13 = var3.bind(var4)(var2, var1);
 475:
            var3 = _closure1_slot21;
            var2 = _closure1_slot0;
            var6 = _closure1_slot3;
            var1 = 32;
            var1 = var6[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.PressableScale;
            var1 = {};
            var6 = var10.activityItemContainer;
            var1['style'] = var6;
            var1['onPress'] = var5;
            var7 = _closure1_slot21;
            var6 = _closure1_slot6;
            var5 = {};
            var14 = var10.activityImageContainer;
            var8 = new Array(2);
            var8[0] = var14;
            var14 = var15 != var17;
            if(!var14) { _fun0014_ip = 556; continue _fun0014 }
 552:
            var14 = var15 != var16;
 556:
            if(!var14) { _fun0014_ip = 572; continue _fun0014 }
 559:
            var15 = {};
            var15['width'] = var17;
            var15['height'] = var16;
            var14 = var15;
 572:
            var8[1] = var14;
            var5['style'] = var8;
            var8 = new Array(2);
            var8[0] = var13;
            if(!var11) { _fun0014_ip = 652; continue _fun0014 }
 591:
            var15 = _closure1_slot20;
            var14 = _closure1_slot1;
            var16 = _closure1_slot3;
            var13 = 33;
            var13 = var16[var13];
            var14 = var14.bind(var4)(var13);
            var13 = {};
            var17 = _closure1_slot0;
            var16 = var16[var18];
            var17 = var17.bind(var4)(var16);
            var16 = var17.getShelfBadgeTypeIfActive;
            var16 = var16.bind(var17)(var12);
            var13['labelType'] = var16;
            var11 = var15.bind(var4)(var14, var13);
 652:
            var8[1] = var11;
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            var8 = _closure1_slot20;
            var7 = _closure1_slot6;
            var6 = {};
            var10 = var10.activityDetailsContainer;
            var6['style'] = var10;
            var11 = _closure1_slot20;
            var10 = _closure1_slot0;
            var13 = _closure1_slot3;
            var9 = 16;
            var9 = var13[var9];
            var9 = var10.bind(var4)(var9);
            var10 = var9.Text;
            var9 = {'variant': 'heading-sm/bold', 'color': 'header-primary'};
            var12 = var12.name;
            var9['children'] = var12;
            var9 = var11.bind(var4)(var10, var9);
            var6['children'] = var9;
            var6 = var8.bind(var4)(var7, var6);
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot34 = var1;
    var1 = function Divider() {
        var1 = _closure1_slot26;
        var4 = undefined;
        var5 = var1.bind(var4)();
        var2 = _closure1_slot1;
        var3 = _closure1_slot3;
        var1 = 35;
        var1 = var3[var1];
        var1 = var2.bind(var4)(var1);
        var1 = var1.bind(var4)();
        var10 = var1.left;
        var8 = var1.right;
        var3 = _closure1_slot20;
        var2 = _closure1_slot6;
        var1 = {};
        var6 = var5.divider;
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var9 = _closure1_slot15;
        var9 = -var9;
        var9 = var9 - var10;
        var6['marginLeft'] = var9;
        var7 = _closure1_slot15;
        var7 = -var7;
        var7 = var7 - var8;
        var6['marginRight'] = var7;
        var5[1] = var6;
        var1['style'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot35 = var1;
    var1 = function RecommendationSectionHeader(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
 0:
            var1 = arg1;
            var9 = var1.index;
            var5 = var1.children;
            var2 = _closure1_slot26;
            var4 = undefined;
            var6 = var2.bind(var4)();
            var3 = _closure1_slot20;
            var2 = _closure1_slot0;
            var7 = _closure1_slot3;
            var1 = 16;
            var1 = var7[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.Text;
            var1 = {'variant': 'heading-lg/bold', 'color': 'header-primary'};
            var7 = var6.sectionHeader;
            var6 = new Array(2);
            var6[0] = var7;
            var8 = 0;
            var7 = null;
            if(!(var8 !== var9)) { _fun0015_ip = 103; continue _fun0015 }
 91:
            var8 = {};
            var9 = 24;
            var8['marginTop'] = var9;
            var7 = var8;
 103:
            var6[1] = var7;
            var1['style'] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot36 = var1;
    var1 = function getRecommendationItemsWithViewAll(arg1, arg2, arg3) {
        _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
 0:
            var10 = arg1;
            var6 = arg2;
            var4 = arg3;
            var9 = arguments[3];
            var5 = arguments[4];
            var _closure2_slot0 = var6;
            var12 = undefined;
            if(!(var9 === var12)) { _fun0016_ip = 56; continue _fun0016 }
 27:
            var2 = _closure1_slot0;
            var3 = _closure1_slot3;
            var1 = 81;
            var1 = var3[var1];
            var1 = var2.bind(var12)(var1);
            var9 = var1.COLLAPSED_LIST_ITEM_MAX;
 56:
            if(!(var5 === var12)) { _fun0016_ip = 62; continue _fun0016 }
 60:
            var5 = undefined;
 62:
            var _closure2_slot1 = var5;
            var _closure2_slot2 = var12;
            var _closure2_slot3 = var12;
            var _closure2_slot4 = var12;
            var3 = var10.length;
            var14 = 0;
            if(!(var14 !== var3)) { _fun0016_ip = 368; continue _fun0016 }
 92:
            var8 = global;
            var2 = var8.Math;
            var1 = var2.min;
            var11 = var1.bind(var2)(var3, var9);
            _closure2_slot2 = var11;
            var2 = var11 < var3;
            _closure2_slot3 = var2;
            var1 = new Array(0);
            _closure2_slot4 = var1;
            var15 = {};
            var17 = _closure1_slot0;
            var16 = _closure1_slot3;
            var13 = 44;
            var16 = var16[var13];
            var16 = var17.bind(var12)(var16);
            var16 = var16.AppLauncherHomeListItemType;
            var16 = var16.RECOMMENDATION_SECTION_HEADER;
            var15['type'] = var16;
            var15['section'] = var4;
            var15['sectionName'] = var6;
            var15['numItems'] = var3;
            var15['numVisibleItems'] = var11;
            var3 = var1.push;
            var3 = var3.bind(var1)(var15);
            var3 = var10.slice;
            var14 = var3.bind(var10)(var14, var11);
            var11 = var14.forEach;
            var3 = function(arg1, arg2) {
                _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
 0:
                    var7 = arg1;
                    var6 = arg2;
                    var4 = _closure2_slot4;
                    var3 = var4.push;
                    var2 = {};
                    var9 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 44;
                    var8 = var8[var1];
                    var1 = undefined;
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.AppLauncherHomeListItemType;
                    var8 = var8.RECOMMENDATION_APP;
                    var2['type'] = var8;
                    var8 = var7.application;
                    var2['application'] = var8;
                    var7 = var7.showsPromoted;
                    var2['showsPromoted'] = var7;
                    var7 = 0;
                    var7 = var7 === var6;
                    var2['isFirstRow'] = var7;
                    var8 = _closure2_slot2;
                    var7 = 1;
                    var7 = var8 - var7;
                    var7 = var6 === var7;
                    if(!var7) { _fun0017_ip = 117; continue _fun0017 }
 110:
                    var8 = _closure2_slot3;
                    var7 = !var8;
 117:
                    var2['isLastRow'] = var7;
                    var7 = _closure2_slot0;
                    var2['sectionName'] = var7;
                    var2['sectionPosition'] = var6;
                    var5 = _closure2_slot1;
                    var2['sectionOverallPosition'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var3 = var11.bind(var14)(var3);
            if(!var2) { _fun0016_ip = 366; continue _fun0016 }
 235:
            var3 = var1.push;
            var2 = {};
            var11 = _closure1_slot0;
            var9 = _closure1_slot3;
            var9 = var9[var13];
            var9 = var11.bind(var12)(var9);
            var9 = var9.AppLauncherHomeListItemType;
            var9 = var9.VIEW_ALL;
            var2['type'] = var9;
            var11 = var10.map;
            var9 = function(arg1) {
                var1 = arg1;
                var1 = var1.application;
                return var1;
            };
            var9 = var11.bind(var10)(var9);
            var2['applications'] = var9;
            var9 = var10.reduce;
            var8 = var8.Set;
            var11 = var8.prototype;
            var11 = Object.create(var11, {constructor: {value: var8}});
            var20 = var11;
            var8 = new var20[var8](var19);
            var8 = var8 instanceof Object ? var8 : var11;
            var7 = function(arg1, arg2) {
                _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
 0:
                    var1 = arg1;
                    var2 = arg2;
                    var3 = var2.showsPromoted;
                    if(!var3) { _fun0018_ip = 35; continue _fun0018 }
 15:
                    var3 = var1.add;
                    var2 = var2.application;
                    var2 = var2.id;
                    var2 = var3.bind(var1)(var2);
 35:
                    return var1;
                }
            };
            var7 = var9.bind(var10)(var7, var8);
            var2['promotedApplicationIds'] = var7;
            var2['sectionName'] = var6;
            var2['sectionOverallPosition'] = var5;
            var2['title'] = var4;
            var2 = var3.bind(var1)(var2);
 366:
            return var1;
 368:
            var1 = new Array(0);
            return var1;
        }
    };
    var _closure1_slot37 = var1;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var12 = 0;
    var5 = var7[var12];
    var1 = undefined;
    var5 = var14.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var11 = 1;
    var5 = var7[var11];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot5 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.View;
    var _closure1_slot6 = var8;
    var5 = var5.useWindowDimensions;
    var _closure1_slot7 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot8 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.useContextIndexState;
    var _closure1_slot9 = var8;
    var5 = var5.useUserIndexState;
    var _closure1_slot10 = var5;
    var5 = 5;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot11 = var5;
    var5 = 6;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot12 = var5;
    var5 = 7;
    var5 = var7[var5];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot13 = var5;
    var17 = 8;
    var5 = var7[var17];
    var5 = var14.bind(var1)(var5);
    var _closure1_slot14 = var5;
    var5 = 9;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var16 = var5.DEFAULT_CONTENT_PADDING;
    var _closure1_slot15 = var16;
    var5 = var5.FLASH_LIST_ITEM_IMPRESSION_VIEWABILITY_CONFIG;
    var _closure1_slot16 = var5;
    var5 = 10;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.AnalyticEvents;
    var _closure1_slot17 = var8;
    var5 = var5.Permissions;
    var _closure1_slot18 = var5;
    var5 = 11;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ContentDismissActionType;
    var _closure1_slot19 = var5;
    var5 = 12;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.jsx;
    var _closure1_slot20 = var8;
    var8 = var5.jsxs;
    var _closure1_slot21 = var8;
    var5 = var5.Fragment;
    var _closure1_slot22 = var5;
    var13 = 13;
    var5 = var7[var13];
    var5 = var14.bind(var1)(var5);
    var5 = var5.spacing;
    var15 = var5.PX_4;
    var5 = 1.7777777777777777;
    var _closure1_slot23 = var5;
    var5 = new Array(0);
    var _closure1_slot24 = var5;
    var5 = 14;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ApplicationCollectionSurface;
    var5 = var5.APP_LAUNCHER_IN_TEXT;
    var _closure1_slot25 = var5;
    var5 = 15;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {};
    var18 = var7[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var18;
    var10['flex'] = var11;
    var5['container'] = var10;
    var10 = {'backgroundColor': null, 'position': 'absolute', 'top': 4294967280, 'left': 0, 'right': 0, 'height': 16};
    var18 = var7[var13];
    var18 = var14.bind(var1)(var18);
    var18 = var18.colors;
    var18 = var18.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var18;
    var5['topBackgroundFill'] = var10;
    var10 = {};
    var10['marginBottom'] = var17;
    var5['serverAppsHeader'] = var10;
    var10 = {'marginBottom': 8, 'marginTop': 8};
    var5['sectionHeader'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var16;
    var17 = var7[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var17;
    var5['list'] = var10;
    var10 = {};
    var17 = var7[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BACKGROUND_PRIMARY;
    var10['backgroundColor'] = var17;
    var5['activitiesRow'] = var10;
    var10 = {'backgroundColor': null, 'marginBottom': 16, 'flexGrow': 0, 'flexShrink': 1, 'flexDirection': 'row'};
    var17 = var7[var13];
    var17 = var14.bind(var1)(var17);
    var17 = var17.colors;
    var17 = var17.BG_BASE_SECONDARY;
    var10['backgroundColor'] = var17;
    var5['activitiesRowContainer'] = var10;
    var10 = {};
    var10['paddingHorizontal'] = var16;
    var10['paddingBottom'] = var16;
    var5['searchBarContainer'] = var10;
    var10 = {};
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.DIVIDER_STRONG;
    var10['borderColor'] = var16;
    var10['borderTopWidth'] = var11;
    var16 = var7[var13];
    var16 = var14.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_24;
    var10['marginTop'] = var16;
    var5['divider'] = var10;
    var10 = {'overflow': 'hidden', 'flexDirection': 'row', 'alignItems': 'center'};
    var10['gap'] = var15;
    var5['appRowLabelWithPromotedContainer'] = var10;
    var10 = {};
    var10['flexShrink'] = var11;
    var5['appRowLabelWithPromotedTextContainer'] = var10;
    var10 = {'alignSelf': 'center', 'justifyContent': 'center', 'paddingVertical': 2};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_4;
    var10['paddingHorizontal'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BACKGROUND_MODIFIER_ACTIVE;
    var10['backgroundColor'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.lg;
    var10['borderRadius'] = var15;
    var5['promotedLabel'] = var10;
    var10 = {'borderRadius': null, 'overflow': 'hidden', 'height': '100%'};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var10['borderRadius'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_SURFACE_RAISED;
    var10['backgroundColor'] = var15;
    var5['activityItemContainer'] = var10;
    var10 = {'justifyContent': 'center', 'alignItems': 'center', 'height': 120};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.colors;
    var15 = var15.BG_BASE_TERTIARY;
    var10['backgroundColor'] = var15;
    var5['activityImageContainer'] = var10;
    var10 = {};
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var10['borderBottomLeftRadius'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var10['borderBottomEndRadius'] = var15;
    var15 = var7[var13];
    var15 = var14.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var10['padding'] = var15;
    var10['flexGrow'] = var11;
    var10['flexShrink'] = var11;
    var13 = var7[var13];
    var13 = var14.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var10['borderColor'] = var13;
    var10['borderTopWidth'] = var12;
    var10['borderRightWidth'] = var11;
    var10['borderBottomWidth'] = var11;
    var10['borderLeftWidth'] = var11;
    var5['activityDetailsContainer'] = var10;
    var10 = {'flexDirection': 'row', 'gap': 12};
    var5['activityItemTupleContainer'] = var10;
    var10 = {'width': '50%', 'flexShrink': 1};
    var5['activityItemTupleShelfItemContainer'] = var10;
    var10 = {'height': '100%', 'width': '100%'};
    var5['activityItemImage'] = var10;
    var10 = {'position': 'absolute', 'top': 0, 'left': 0, 'height': '100%', 'width': '100%'};
    var5['submittingOverlay'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot26 = var5;
    var5 = 86;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/app_launcher/native/screens/home/AppLauncherHomeScreen.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function AppLauncherHomeScreen(arg1) {
        _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
 0:
            var2 = arg1;
            var1 = var2.route;
            var1 = var1.params;
            var18 = var1.context;
            var _closure2_slot0 = var18;
            var1 = var1.initialSearchQuery;
            var _closure2_slot1 = var1;
            var22 = var2.navigation;
            var _closure2_slot2 = var22;
            var4 = undefined;
            var _closure2_slot29 = var4;
            var _closure2_slot30 = var4;
            var _closure2_slot31 = var4;
            var _closure2_slot32 = var4;
            var _closure2_slot33 = var4;
            var _closure2_slot34 = var4;
            var _closure2_slot35 = var4;
            var _closure2_slot36 = var4;
            var11 = _closure1_slot0;
            var14 = _closure1_slot3;
            var2 = 38;
            var2 = var14[var2];
            var3 = var11.bind(var4)(var2);
            var2 = var3.useViewableAppLauncherHomeItems;
            var2 = var2.bind(var3)();
            var8 = var2.hasViewedActivityItem;
            var5 = var2.hasViewedLearnMoreItem;
            var15 = var2.handleViewableItemsChanged;
            var _closure2_slot3 = var15;
            var3 = _closure1_slot1;
            var2 = 39;
            var6 = var14[var2];
            var6 = var3.bind(var4)(var6);
            var17 = var6.bind(var4)(var8);
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var24 = var2.bind(var4)(var5);
            var _closure2_slot4 = var24;
            var2 = _closure1_slot26;
            var41 = var2.bind(var4)();
            var _closure2_slot5 = var41;
            var2 = 40;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var10 = var2.bind(var4)();
            var _closure2_slot6 = var10;
            var2 = 35;
            var2 = var14[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var2 = var2.bottom;
            var3 = 41;
            var3 = var14[var3];
            var5 = var11.bind(var4)(var3);
            var3 = var5.useRequiredAppLauncherContext;
            var6 = var3.bind(var5)();
            var16 = var6.chatInputRef;
            var _closure2_slot7 = var16;
            var5 = var6.keyboardCloseReasonRef;
            var _closure2_slot8 = var5;
            var3 = var6.width;
            var _closure2_slot9 = var3;
            var8 = var6.entrypoint;
            var _closure2_slot10 = var8;
            var21 = var6.onActivityItemSelected;
            var _closure2_slot11 = var21;
            var6 = _closure1_slot7;
            var12 = var6.bind(var4)();
            var9 = var12.width;
            var6 = var12.height;
            var23 = var9 > var6;
            var _closure2_slot12 = var23;
            var19 = _closure1_slot5;
            var13 = var19.useEffect;
            var9 = new Array(1);
            var9[0] = var8;
            var6 = function() {
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
 0:
                    var4 = _closure2_slot10;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 37;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.AppLauncherEntrypoint;
                    var3 = var3.VOICE;
                    if(!(var4 === var3)) { _fun0020_ip = 78; continue _fun0020 }
 48:
                    var3 = _closure1_slot2;
                    var4 = _closure1_slot3;
                    var2 = 42;
                    var2 = var4[var2];
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.dismissNewActivityIndicator;
                    var2 = var2.bind(var3)();
 78:
                    return var1;
                }
            };
            var6 = var13.bind(var19)(var6, var9);
            var13 = _closure1_slot5;
            var9 = var13.useCallback;
            var6 = new Array(2);
            var6[0] = var16;
            var6[1] = var5;
            var5 = function() {
                _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
 0:
                    var4 = _closure2_slot8;
                    var5 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 41;
                    var3 = var3[var1];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var3 = var3.AppLauncherKeyboardCloseReason;
                    var3 = var3.COMMAND;
                    var4['current'] = var3;
                    var2 = _closure2_slot7;
                    var3 = var2.current;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0021_ip = 75; continue _fun0021 }
 65:
                    var2 = var3.closeCustomKeyboard;
                    var2 = var2.bind(var3)();
 75:
                    return var1;
                }
            };
            var16 = var9.bind(var13)(var5, var6);
            var13 = _closure1_slot5;
            var9 = var13.useCallback;
            var6 = new Array(3);
            var6[0] = var18;
            var6[1] = var8;
            var6[2] = var22;
            var5 = function(arg1, arg2) {
                _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
 0:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 23;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var7.bind(var1)(var2);
                    var3 = var4.handleApplicationSelected;
                    var2 = {};
                    var5 = 29;
                    var5 = var8[var5];
                    var5 = var7.bind(var1)(var5);
                    var5 = var5.ApplicationCommandTriggerLocations;
                    var5 = var5.APP_LAUNCHER_HOME;
                    var2['location'] = var5;
                    var5 = arg1;
                    var5 = var5.application;
                    var7 = null;
                    if(!(var7 == var5)) { _fun0022_ip = 101; continue _fun0022 }
 75:
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 19;
                    var6 = var8[var6];
                    var6 = var7.bind(var1)(var6);
                    var5 = var6.FAKE_BUILT_IN_APP;
 101:
                    var2['application'] = var5;
                    var6 = _closure2_slot2;
                    var2['navigation'] = var6;
                    var6 = _closure2_slot0;
                    var2['context'] = var6;
                    var6 = arg2;
                    var2['sectionName'] = var6;
                    var5 = _closure2_slot10;
                    var2['entrypoint'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var19 = var9.bind(var13)(var5, var6);
            var _closure2_slot13 = var19;
            var13 = _closure1_slot5;
            var9 = var13.useCallback;
            var6 = new Array(3);
            var6[0] = var18;
            var6[1] = var8;
            var6[2] = var22;
            var5 = function(arg1) {
                _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.shelfData;
                    var7 = var1.sectionName;
                    var6 = var1.navigates;
                    var1 = undefined;
                    if(!(var6 === var1)) { _fun0023_ip = 29; continue _fun0023 }
 27:
                    var6 = true;
 29:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 23;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.handleApplicationSelected;
                    var2 = {};
                    var8 = 29;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.ApplicationCommandTriggerLocations;
                    var8 = var8.APP_LAUNCHER_HOME;
                    var2['location'] = var8;
                    var5 = var5.application;
                    var2['application'] = var5;
                    var8 = _closure2_slot2;
                    var2['navigation'] = var8;
                    var8 = _closure2_slot0;
                    var2['context'] = var8;
                    var2['sectionName'] = var7;
                    var2['navigates'] = var6;
                    var5 = _closure2_slot10;
                    var2['entrypoint'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var20 = var9.bind(var13)(var5, var6);
            var _closure2_slot14 = var20;
            var6 = {};
            var6['context'] = var18;
            var6['entrypoint'] = var8;
            var5 = function useHomeData(arg1) {
                _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
 0:
                    var2 = arg1;
                    var18 = var2.context;
                    var _closure3_slot0 = var18;
                    var16 = var2.entrypoint;
                    var _closure3_slot1 = var16;
                    var20 = undefined;
                    var _closure3_slot2 = var20;
                    var _closure3_slot3 = var20;
                    var _closure3_slot4 = var20;
                    var _closure3_slot5 = var20;
                    var _closure3_slot6 = var20;
                    var _closure3_slot7 = var20;
                    var _closure3_slot8 = var20;
                    var _closure3_slot9 = var20;
                    var _closure3_slot10 = var20;
                    var _closure3_slot11 = var20;
                    var _closure3_slot12 = var20;
                    var _closure3_slot13 = var20;
                    var _closure3_slot14 = var20;
                    var _closure3_slot15 = var20;
                    var _closure3_slot16 = var20;
                    var3 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var2 = 73;
                    var2 = var4[var2];
                    var3 = var3.bind(var20)(var2);
                    var2 = var3.useFetchDeveloperActivityShelfItems;
                    var2 = var2.bind(var3)();
                    var3 = _closure1_slot1;
                    var2 = 74;
                    var2 = var4[var2];
                    var3 = var3.bind(var20)(var2);
                    var2 = {};
                    var5 = var18.type;
                    var21 = 'channel';
                    var4 = undefined;
                    if(!(var21 === var5)) { _fun0024_ip = 162; continue _fun0024 }
 152:
                    var5 = var18.channel;
                    var4 = var5.guild_id;
 162:
                    var2['guildId'] = var4;
                    var13 = var3.bind(var20)(var2);
                    _closure3_slot2 = var13;
                    var4 = _closure1_slot0;
                    var6 = _closure1_slot3;
                    var2 = 37;
                    var3 = var6[var2];
                    var3 = var4.bind(var20)(var3);
                    var3 = var3.AppLauncherEntrypoint;
                    var3 = var3.VOICE;
                    var15 = var16 === var3;
                    _closure3_slot3 = var15;
                    var5 = _closure1_slot1;
                    var3 = 75;
                    var3 = var6[var3];
                    var7 = var5.bind(var20)(var3);
                    var3 = {};
                    var3['context'] = var18;
                    var3['onlyActivityApps'] = var15;
                    var7 = var7.bind(var20)(var3);
                    var10 = var7.frecencyCommands;
                    var3 = var7.frecentApps;
                    _closure3_slot4 = var3;
                    var8 = var7.sectionDescriptors;
                    var7 = var7.loading;
                    var2 = var6[var2];
                    var2 = var4.bind(var20)(var2);
                    var2 = var2.AppLauncherEntrypoint;
                    var2 = var2.TEXT;
                    var17 = var16 === var2;
                    _closure3_slot5 = var17;
                    var2 = 76;
                    var2 = var6[var2];
                    var5 = var5.bind(var20)(var2);
                    var2 = {};
                    var2['context'] = var18;
                    var2 = var5.bind(var20)(var2);
                    var2 = var2.appsInThisServer;
                    _closure3_slot6 = var2;
                    var12 = _closure1_slot5;
                    var9 = var12.useMemo;
                    var5 = new Array(2);
                    var5[0] = var2;
                    var5[1] = var17;
                    var2 = function() {
                        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
 0:
                            var2 = _closure3_slot5;
                            if(var2) { _fun0025_ip = 19; continue _fun0025 }
 10:
                            var8 = _closure1_slot24;
                            _fun0025_ip = 23; continue _fun0025;
 19:
                            var8 = _closure3_slot6;
 23:
                            var2 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var3 = 17;
                            var4 = var7[var3];
                            var6 = undefined;
                            var4 = var2.bind(var6)(var4);
                            var5 = var4.intl;
                            var4 = var5.string;
                            var3 = var7[var3];
                            var3 = var2.bind(var6)(var3);
                            var3 = var3.t;
                            var3 = var3.oJyzCg;
                            var10 = var4.bind(var5)(var3);
                            var4 = _closure1_slot37;
                            var3 = var8.map;
                            var1 = function(arg1) {
                                var1 = {};
                                var2 = arg1;
                                var2 = var2.application;
                                var1['application'] = var2;
                                return var1;
                            };
                            var3 = var3.bind(var8)(var1);
                            var1 = 67;
                            var1 = var7[var1];
                            var1 = var2.bind(var6)(var1);
                            var9 = var1.IN_THIS_SERVER_ITEM_MAX;
                            var11 = 'in_this_server';
                            var13 = undefined;
                            var12 = var3;
                            var1 = var13[var4](var12, var11, var10, var9, var8);
                            return var1;
                        }
                    };
                    var2 = var9.bind(var12)(var2, var5);
                    var14 = _closure1_slot5;
                    var12 = var14.useMemo;
                    var9 = new Array(1);
                    var9[0] = var3;
                    var5 = function() {
                        var3 = _closure3_slot4;
                        var2 = var3.map;
                        var1 = function(arg1, arg2) {
                            var2 = arg1;
                            var3 = arg2;
                            var1 = {};
                            var6 = _closure1_slot0;
                            var5 = _closure1_slot3;
                            var4 = 44;
                            var5 = var5[var4];
                            var4 = undefined;
                            var4 = var6.bind(var4)(var5);
                            var4 = var4.AppLauncherHomeListItemType;
                            var4 = var4.APP;
                            var1['type'] = var4;
                            var4 = var2.id;
                            var1['applicationId'] = var4;
                            var1['section'] = var2;
                            var2 = 0;
                            var2 = var2 === var3;
                            var1['isFirstRow'] = var2;
                            var2 = _closure3_slot4;
                            var4 = var2.length;
                            var2 = 1;
                            var2 = var4 - var2;
                            var2 = var3 === var2;
                            var1['isLastRow'] = var2;
                            var2 = 'recents';
                            var1['sectionName'] = var2;
                            return var1;
                        };
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var9 = var12.bind(var14)(var5, var9);
                    var14 = _closure1_slot5;
                    var12 = var14.useMemo;
                    var5 = new Array(2);
                    var5[0] = var17;
                    var5[1] = var3;
                    var3 = function() {
                        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
 0:
                            var3 = _closure3_slot5;
                            var1 = !var3;
                            if(!var3) { _fun0026_ip = 40; continue _fun0026 }
 13:
                            var4 = _closure3_slot4;
                            var3 = var4.some;
                            var2 = function(arg1) {
                                var1 = arg1;
                                var2 = var1.application;
                                var1 = null;
                                var1 = var1 != var2;
                                return var1;
                            };
                            var2 = var3.bind(var4)(var2);
                            var1 = !var2;
 40:
                            return var1;
                        }
                    };
                    var5 = var12.bind(var14)(var3, var5);
                    var3 = 77;
                    var3 = var6[var3];
                    var6 = var4.bind(var20)(var3);
                    var4 = var6.useIsActivitiesInTextEnabled;
                    var12 = var18.type;
                    var3 = undefined;
                    if(!(var21 === var12)) { _fun0024_ip = 474; continue _fun0024 }
 464:
                    var12 = var18.channel;
                    var3 = var12.id;
 474:
                    var3 = var4.bind(var6)(var3);
                    _closure3_slot7 = var3;
                    var12 = _closure1_slot5;
                    var6 = var12.useEffect;
                    var4 = new Array(3);
                    var4[0] = var3;
                    var4[1] = var18;
                    var4[2] = var16;
                    var3 = function() {
                        _fun0027: for(var _fun0027_ip = 0; ; ) switch(_fun0027_ip) {
 0:
                            var1 = _closure3_slot7;
                            if(var1) { _fun0027_ip = 55; continue _fun0027 }
 10:
                            var3 = _closure3_slot1;
                            var6 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 37;
                            var4 = var4[var2];
                            var2 = undefined;
                            var2 = var6.bind(var2)(var4);
                            var2 = var2.AppLauncherEntrypoint;
                            var2 = var2.VOICE;
                            var1 = var3 === var2;
 55:
                            if(!var1) { _fun0027_ip = 138; continue _fun0027 }
 58:
                            var2 = _closure1_slot0;
                            var3 = _closure1_slot3;
                            var1 = 42;
                            var1 = var3[var1];
                            var4 = undefined;
                            var3 = var2.bind(var4)(var1);
                            var2 = var3.fetchShelf;
                            var1 = {};
                            var6 = _closure3_slot0;
                            var7 = var6.type;
                            var6 = 'channel';
                            if(!(var6 === var7)) { _fun0027_ip = 122; continue _fun0027 }
 108:
                            var5 = _closure3_slot0;
                            var5 = var5.channel;
                            var4 = var5.guild_id;
 122:
                            var1['guildId'] = var4;
                            var4 = true;
                            var1['force'] = var4;
                            var1 = var2.bind(var3)(var1);
 138:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var3 = var6.bind(var12)(var3, var4);
                    var3 = function useAppCollectionsActiveState() {
                        _fun0028: for(var _fun0028_ip = 0; ; ) switch(_fun0028_ip) {
 0:
                            var3 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var2 = 28;
                            var2 = var6[var2];
                            var5 = undefined;
                            var7 = var3.bind(var5)(var2);
                            var4 = var7.useStateFromStores;
                            var2 = _closure1_slot11;
                            var3 = new Array(1);
                            var3[0] = var2;
                            var2 = function() {
                                var3 = _closure1_slot11;
                                var2 = var3.get;
                                var1 = 'only_show_preview_app_collections';
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var3 = var4.bind(var7)(var3, var2);
                            var4 = _closure1_slot1;
                            var2 = 71;
                            var2 = var6[var2];
                            var7 = var4.bind(var5)(var2);
                            var6 = var7.getCurrentConfig;
                            var4 = {};
                            var2 = 'App Launcher Home (Mobile)';
                            var4['location'] = var2;
                            var2 = {};
                            var8 = false;
                            var2['autoTrackExposure'] = var8;
                            var2 = var6.bind(var7)(var4, var2);
                            var2 = var2.enabled;
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var1 = 72;
                            var1 = var6[var1];
                            var1 = var4.bind(var5)(var1);
                            var1 = var1.ApplicationCollectionActiveState;
                            if(var3) { _fun0028_ip = 159; continue _fun0028 }
 140:
                            if(var2) { _fun0028_ip = 151; continue _fun0028 }
 143:
                            var2 = var1.ACTIVE;
                            return var2;
 151:
                            var2 = var1.NON_STAFF_PREVIEW;
                            return var2;
 159:
                            var1 = var1.PREVIEW;
                            return var1;
                        }
                    };
                    var3 = var3.bind(var20)();
                    _closure3_slot8 = var3;
                    var6 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var22 = 28;
                    var4 = var4[var22];
                    var14 = var6.bind(var20)(var4);
                    var12 = var14.useStateFromStores;
                    var4 = _closure1_slot12;
                    var6 = new Array(1);
                    var6[0] = var4;
                    var4 = function() {
                        var3 = _closure1_slot12;
                        var2 = var3.getCollections;
                        var1 = {};
                        var4 = _closure1_slot25;
                        var1['surface'] = var4;
                        var4 = _closure3_slot8;
                        var1['activeState'] = var4;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var4 = var12.bind(var14)(var6, var4);
                    _closure3_slot9 = var4;
                    var14 = _closure1_slot5;
                    var12 = var14.useMemo;
                    var6 = new Array(2);
                    var6[0] = var4;
                    var6[1] = var15;
                    var4 = function() {
                        _fun0029: for(var _fun0029_ip = 0; ; ) switch(_fun0029_ip) {
 0:
                            var1 = _closure3_slot3;
                            if(var1) { _fun0029_ip = 16; continue _fun0029 }
 10:
                            var1 = _closure3_slot9;
                            _fun0029_ip = 56; continue _fun0029;
 16:
                            var5 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var3 = 19;
                            var4 = var4[var3];
                            var3 = undefined;
                            var4 = var5.bind(var3)(var4);
                            var3 = var4.ensureRecommendationSectionsOnlyContainActivities;
                            var2 = _closure3_slot9;
                            var1 = var3.bind(var4)(var2);
 56:
                            return var1;
                        }
                    };
                    var12 = var12.bind(var14)(var4, var6);
                    _closure3_slot10 = var12;
                    var14 = _closure1_slot5;
                    var6 = var14.useEffect;
                    var4 = new Array(2);
                    var4[0] = var3;
                    var4[1] = var16;
                    var3 = function() {
                        _fun0030: for(var _fun0030_ip = 0; ; ) switch(_fun0030_ip) {
 0:
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 19;
                            var2 = var2[var1];
                            var1 = undefined;
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.appLauncherShowsRecommendations;
                            var2 = _closure3_slot1;
                            var2 = var3.bind(var4)(var2);
                            if(!var2) { _fun0030_ip = 97; continue _fun0030 }
 46:
                            var3 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var2 = 78;
                            var2 = var4[var2];
                            var4 = var3.bind(var1)(var2);
                            var3 = var4.fetchCollections;
                            var2 = {};
                            var6 = _closure1_slot25;
                            var2['surface'] = var6;
                            var5 = _closure3_slot8;
                            var2['activeState'] = var5;
                            var2 = var3.bind(var4)(var2);
 97:
                            return var1;
                        }
                    };
                    var3 = var6.bind(var14)(var3, var4);
                    var6 = var13.length;
                    var17 = _closure1_slot5;
                    var14 = var17.useMemo;
                    var4 = new Array(2);
                    var4[0] = var16;
                    var4[1] = var13;
                    var3 = function() {
                        _fun0031: for(var _fun0031_ip = 0; ; ) switch(_fun0031_ip) {
 0:
                            var6 = function getTupleItem(arg1) {
                                var1 = arg1;
                                var5 = var1.shelfItem1;
                                var4 = var1.shelfItem2;
                                var3 = var1.shelfItem1SectionPosition;
                                var2 = var1.shelfItem2SectionPosition;
                                var1 = {};
                                var8 = _closure1_slot0;
                                var7 = _closure1_slot3;
                                var6 = 44;
                                var7 = var7[var6];
                                var6 = undefined;
                                var6 = var8.bind(var6)(var7);
                                var6 = var6.AppLauncherHomeListItemType;
                                var6 = var6.SHELF_ITEM_TUPLE;
                                var1['type'] = var6;
                                var1['shelfItem1'] = var5;
                                var1['shelfItem2'] = var4;
                                var4 = 'activities';
                                var1['sectionName'] = var4;
                                var1['shelfItem1SectionPosition'] = var3;
                                var1['shelfItem2SectionPosition'] = var2;
                                var2 = 0;
                                var1['sectionOverallPosition'] = var2;
                                var2 = false;
                                var1['isLastTuple'] = var2;
                                return var1;
                            };
                            var2 = _closure3_slot2;
                            var2 = var2.length;
                            var8 = 0;
                            if(!(var8 !== var2)) { _fun0031_ip = 441; continue _fun0031 }
 30:
                            var3 = _closure3_slot1;
                            var4 = _closure1_slot0;
                            var7 = _closure1_slot3;
                            var2 = 37;
                            var2 = var7[var2];
                            var9 = undefined;
                            var2 = var4.bind(var9)(var2);
                            var2 = var2.AppLauncherEntrypoint;
                            var2 = var2.VOICE;
                            if(!(var3 === var2)) { _fun0031_ip = 441; continue _fun0031 }
 78:
                            var3 = new Array(0);
                            var2 = _closure3_slot2;
                            var4 = var2.length;
                            var2 = 1;
                            var4 = var4 - var2;
                            var7 = 2;
                            var8 = 0;
                            if(!(var8 < var4)) { _fun0031_ip = 185; continue _fun0031 }
 107:
                            var10 = var8 + var2;
                            var4 = {};
                            var11 = _closure3_slot2;
                            var11 = var11[var8];
                            var4['shelfItem1'] = var11;
                            var11 = _closure3_slot2;
                            var11 = var11[var10];
                            var4['shelfItem2'] = var11;
                            var4['shelfItem1SectionPosition'] = var8;
                            var4['shelfItem2SectionPosition'] = var10;
                            var10 = var6.bind(var9)(var4);
                            var4 = var3.push;
                            var4 = var4.bind(var3)(var10);
                            var8 = var8 + var7;
                            var4 = _closure3_slot2;
                            var4 = var4.length;
                            var4 = var4 - var2;
                            if(var8 < var4) { _fun0031_ip = 107; continue _fun0031 }
 185:
                            var4 = _closure3_slot2;
                            var4 = var4.length;
                            var4 = var4 % var7;
                            if(!(var4 === var2)) { _fun0031_ip = 269; continue _fun0031 }
 202:
                            var4 = {};
                            var8 = _closure3_slot2;
                            var7 = var8.length;
                            var7 = var7 - var2;
                            var7 = var8[var7];
                            var4['shelfItem1'] = var7;
                            var4['shelfItem2'] = var9;
                            var7 = _closure3_slot2;
                            var7 = var7.length;
                            var7 = var7 - var2;
                            var4['shelfItem1SectionPosition'] = var7;
                            var4['shelfItem2SectionPosition'] = var9;
                            var6 = var6.bind(var9)(var4);
                            var4 = var3.push;
                            var4 = var4.bind(var3)(var6);
 269:
                            var4 = var3.length;
                            var4 = var4 - var2;
                            var6 = var3[var4];
                            var4 = true;
                            var6['isLastTuple'] = var4;
                            var4 = {};
                            var8 = _closure1_slot0;
                            var10 = _closure1_slot3;
                            var5 = 44;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.AppLauncherHomeListItemType;
                            var5 = var5.SECTION_HEADER;
                            var4['type'] = var5;
                            var5 = 17;
                            var6 = var10[var5];
                            var6 = var8.bind(var9)(var6);
                            var7 = var6.intl;
                            var6 = var7.string;
                            var5 = var10[var5];
                            var5 = var8.bind(var9)(var5);
                            var5 = var5.t;
                            var5 = var5.aeuOoq;
                            var5 = var6.bind(var7)(var5);
                            var4['section'] = var5;
                            var5 = 'activities';
                            var4['sectionName'] = var5;
                            var5 = _closure3_slot2;
                            var5 = var5.length;
                            var4['numItems'] = var5;
                            var1 = _closure3_slot2;
                            var1 = var1.length;
                            var4['numVisibleItems'] = var1;
                            var1 = new Array(1);
                            var1[0] = var4;
                            var14 = var1;
                            var13 = var3;
                            var12 = var2;
                            var2 = arraySpread(var14, var13, var12);
                            return var1;
 441:
                            var1 = new Array(0);
                            return var1;
                        }
                    };
                    var14 = var14.bind(var17)(var3, var4);
                    _closure3_slot11 = var14;
                    var3 = _closure1_slot9;
                    var19 = true;
                    var17 = false;
                    var4 = var3.bind(var20)(var18, var19, var17);
                    _closure3_slot12 = var4;
                    var3 = _closure1_slot10;
                    var3 = var3.bind(var20)(var19, var17);
                    _closure3_slot13 = var3;
                    var23 = _closure1_slot5;
                    var19 = var23.useMemo;
                    var4 = var4.result;
                    var17 = null;
                    var25 = var17 == var4;
                    var24 = undefined;
                    if(var25) { _fun0024_ip = 770; continue _fun0024 }
 764:
                    var24 = var4.sections;
 770:
                    var4 = new Array(2);
                    var4[0] = var24;
                    var24 = var3.result;
                    var25 = var17 == var24;
                    var3 = undefined;
                    if(var25) { _fun0024_ip = 799; continue _fun0024 }
 793:
                    var3 = var24.sections;
 799:
                    var4[1] = var3;
                    var3 = function() {
                        _fun0032: for(var _fun0032_ip = 0; ; ) switch(_fun0032_ip) {
 0:
                            var1 = _closure3_slot12;
                            var5 = var1.result;
                            var2 = null;
                            var6 = var2 == var5;
                            var4 = undefined;
                            var1 = undefined;
                            if(var6) { _fun0032_ip = 32; continue _fun0032 }
 26:
                            var1 = var5.sections;
 32:
                            if(!(var2 == var1)) { _fun0032_ip = 38; continue _fun0032 }
 36:
                            var1 = {};
 38:
                            var3 = _closure3_slot13;
                            var5 = var3.result;
                            var6 = var2 == var5;
                            var3 = undefined;
                            if(var6) { _fun0032_ip = 63; continue _fun0032 }
 57:
                            var3 = var5.sections;
 63:
                            if(!(var2 == var3)) { _fun0032_ip = 69; continue _fun0032 }
 67:
                            var3 = {};
 69:
                            var2 = function hasCommands(arg1) {
                                var1 = global;
                                var3 = var1.Object;
                                var2 = var3.values;
                                var1 = arg1;
                                var3 = var2.bind(var3)(var1);
                                var2 = var3.some;
                                var1 = function(arg1) {
                                    var1 = global;
                                    var3 = var1.Object;
                                    var2 = var3.keys;
                                    var1 = arg1;
                                    var1 = var1.commands;
                                    var1 = var2.bind(var3)(var1);
                                    var2 = var1.length;
                                    var1 = 0;
                                    var1 = var2 > var1;
                                    return var1;
                                };
                                var1 = var2.bind(var3)(var1);
                                return var1;
                            };
                            var1 = var2.bind(var4)(var1);
                            if(var1) { _fun0032_ip = 91; continue _fun0032 }
 86:
                            var1 = var2.bind(var4)(var3);
 91:
                            return var1;
                        }
                    };
                    var4 = var19.bind(var23)(var3, var4);
                    var19 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var22];
                    var22 = var19.bind(var20)(var3);
                    var20 = var22.useStateFromStores;
                    var3 = _closure1_slot13;
                    var19 = new Array(1);
                    var19[0] = var3;
                    var3 = function() {
                        _fun0033: for(var _fun0033_ip = 0; ; ) switch(_fun0033_ip) {
 0:
                            var1 = _closure3_slot0;
                            var2 = var1.type;
                            var1 = 'channel';
                            var1 = var1 === var2;
                            if(!var1) { _fun0033_ip = 108; continue _fun0033 }
 23:
                            var2 = _closure3_slot0;
                            var4 = var2.channel;
                            var2 = var4.isDM;
                            var2 = var2.bind(var4)();
                            if(var2) { _fun0033_ip = 64; continue _fun0033 }
 45:
                            var4 = _closure3_slot0;
                            var5 = var4.channel;
                            var4 = var5.isMultiUserDM;
                            var2 = var4.bind(var5)();
 64:
                            if(var2) { _fun0033_ip = 105; continue _fun0033 }
 67:
                            var6 = _closure1_slot13;
                            var5 = var6.can;
                            var4 = _closure1_slot18;
                            var4 = var4.USE_APPLICATION_COMMANDS;
                            var3 = _closure3_slot0;
                            var3 = var3.channel;
                            var2 = var5.bind(var6)(var4, var3);
 105:
                            var1 = var2;
 108:
                            return var1;
                        }
                    };
                    var3 = var20.bind(var22)(var19, var3);
                    var20 = var18.type;
                    var19 = null;
                    if(!(var21 === var20)) { _fun0024_ip = 879; continue _fun0024 }
 874:
                    var19 = var18.channel;
 879:
                    var18 = var4;
                    if(!var18) { _fun0024_ip = 888; continue _fun0024 }
 885:
                    var18 = var5;
 888:
                    if(var18) { _fun0024_ip = 894; continue _fun0024 }
 891:
                    var18 = !var3;
 894:
                    var4 = var5;
                    if(!var5) { _fun0024_ip = 903; continue _fun0024 }
 900:
                    var4 = !var18;
 903:
                    if(!var4) { _fun0024_ip = 926; continue _fun0024 }
 906:
                    var3 = var17 != var19;
                    if(!var3) { _fun0024_ip = 923; continue _fun0024 }
 913:
                    var20 = var19.isPrivate;
                    var3 = var20.bind(var19)();
 923:
                    var4 = !var3;
 926:
                    if(!var4) { _fun0024_ip = 932; continue _fun0024 }
 929:
                    var4 = !var15;
 932:
                    var3 = var5;
                    if(!var3) { _fun0024_ip = 941; continue _fun0024 }
 938:
                    var3 = var18;
 941:
                    if(!var3) { _fun0024_ip = 964; continue _fun0024 }
 944:
                    var17 = var17 != var19;
                    if(!var17) { _fun0024_ip = 961; continue _fun0024 }
 951:
                    var18 = var19.isPrivate;
                    var17 = var18.bind(var19)();
 961:
                    var3 = !var17;
 964:
                    if(!var3) { _fun0024_ip = 970; continue _fun0024 }
 967:
                    var3 = !var15;
 970:
                    _closure3_slot14 = var3;
                    var18 = _closure1_slot5;
                    var17 = var18.useMemo;
                    var15 = new Array(3);
                    var15[0] = var12;
                    var15[1] = var13;
                    var15[2] = var3;
                    var13 = function() {
                        _fun0034: for(var _fun0034_ip = 0; ; ) switch(_fun0034_ip) {
 0:
                            var4 = _closure3_slot14;
                            var1 = new Array(0);
                            if(var4) { _fun0034_ip = 96; continue _fun0034 }
 16:
                            var _closure4_slot0 = var1;
                            var4 = global;
                            var4 = var4.Set;
                            var5 = var4.prototype;
                            var5 = Object.create(var5, {constructor: {value: var4}});
                            var8 = var5;
                            var4 = new var8[var4](var7);
                            var4 = var4 instanceof Object ? var4 : var5;
                            var _closure4_slot1 = var4;
                            var6 = _closure3_slot10;
                            var5 = var6.forEach;
                            var4 = function(arg1) {
                                var1 = arg1;
                                var3 = var1.application_directory_collection_items;
                                var2 = var3.forEach;
                                var1 = function(arg1) {
                                    _fun0035: for(var _fun0035_ip = 0; ; ) switch(_fun0035_ip) {
 0:
                                        var2 = arg1;
                                        var4 = var2.type;
                                        var5 = _closure1_slot0;
                                        var3 = _closure1_slot3;
                                        var1 = 79;
                                        var3 = var3[var1];
                                        var1 = undefined;
                                        var3 = var5.bind(var1)(var3);
                                        var3 = var3.ApplicationDirectoryCollectionItemType;
                                        var3 = var3.APPLICATION;
                                        if(!(var4 === var3)) { _fun0035_ip = 76; continue _fun0035 }
 49:
                                        var4 = _closure4_slot1;
                                        var3 = var4.add;
                                        var2 = var2.application;
                                        var2 = var2.id;
                                        var2 = var3.bind(var4)(var2);
 76:
                                        return var1;
                                    }
                                };
                                var1 = var2.bind(var3)(var1);
                                var1 = undefined;
                                return var1;
                            };
                            var4 = var5.bind(var6)(var4);
                            var4 = _closure3_slot2;
                            var3 = var4.forEach;
                            var2 = function(arg1) {
                                _fun0036: for(var _fun0036_ip = 0; ; ) switch(_fun0036_ip) {
 0:
                                    var3 = arg1;
                                    var5 = _closure4_slot1;
                                    var4 = var5.has;
                                    var2 = var3.application;
                                    var2 = var2.id;
                                    var2 = var4.bind(var5)(var2);
                                    if(var2) { _fun0036_ip = 47; continue _fun0036 }
 33:
                                    var2 = _closure4_slot0;
                                    var1 = var2.push;
                                    var1 = var1.bind(var2)(var3);
 47:
                                    var1 = undefined;
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            return var1;
 96:
                            return var1;
                        }
                    };
                    var18 = var17.bind(var18)(var13, var15);
                    _closure3_slot15 = var18;
                    var17 = _closure1_slot5;
                    var15 = var17.useMemo;
                    var13 = new Array(3);
                    var13[0] = var18;
                    var13[1] = var12;
                    var13[2] = var3;
                    var12 = function() {
                        _fun0037: for(var _fun0037_ip = 0; ; ) switch(_fun0037_ip) {
 0:
                            var1 = new Array(0);
                            var _closure4_slot0 = var1;
                            var4 = _closure3_slot14;
                            if(var4) { _fun0037_ip = 43; continue _fun0037 }
 20:
                            var4 = _closure3_slot10;
                            var3 = var4.forEach;
                            var2 = function(arg1, arg2) {
                                _fun0038: for(var _fun0038_ip = 0; ; ) switch(_fun0038_ip) {
 0:
                                    var20 = arg1;
                                    var19 = arg2;
                                    var4 = var20.type;
                                    var18 = var20.application_directory_collection_items;
                                    var5 = _closure1_slot0;
                                    var1 = _closure1_slot3;
                                    var6 = 80;
                                    var3 = var1[var6];
                                    var1 = undefined;
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.ApplicationDirectoryCollectionType;
                                    var3 = var3.BANNER_CARDS;
                                    if(!(var4 !== var3)) { _fun0038_ip = 313; continue _fun0038 }
 63:
                                    var5 = _closure1_slot0;
                                    var3 = _closure1_slot3;
                                    var3 = var3[var6];
                                    var3 = var5.bind(var1)(var3);
                                    var3 = var3.ApplicationDirectoryCollectionType;
                                    var3 = var3.EXPANDABLE_LIST;
                                    if(!(var4 === var3)) { _fun0038_ip = 1076; continue _fun0038 }
 99:
                                    var5 = var20.application_directory_collection_items;
                                    var4 = var5.map;
                                    var3 = function(arg1) {
                                        _fun0039: for(var _fun0039_ip = 0; ; ) switch(_fun0039_ip) {
 0:
                                            var2 = arg1;
                                            var4 = var2.type;
                                            var5 = _closure1_slot0;
                                            var6 = _closure1_slot3;
                                            var1 = 79;
                                            var1 = var6[var1];
                                            var7 = undefined;
                                            var1 = var5.bind(var7)(var1);
                                            var1 = var1.ApplicationDirectoryCollectionItemType;
                                            var1 = var1.APPLICATION;
                                            if(!(var4 !== var1)) { _fun0039_ip = 51; continue _fun0039 }
 49:
                                            return var7;
 51:
                                            var1 = {};
                                            var4 = var2.application;
                                            var1['application'] = var4;
                                            var6 = _closure1_slot0;
                                            var8 = _closure1_slot3;
                                            var3 = 83;
                                            var3 = var8[var3];
                                            var5 = var6.bind(var7)(var3);
                                            var4 = var5.hasFlag;
                                            var3 = var2.flags;
                                            var2 = 84;
                                            var2 = var8[var2];
                                            var2 = var6.bind(var7)(var2);
                                            var2 = var2.ApplicationCollectionItemFlags;
                                            var2 = var2.PROMOTED;
                                            var2 = var4.bind(var5)(var3, var2);
                                            var1['showsPromoted'] = var2;
                                            return var1;
                                        }
                                    };
                                    var5 = var4.bind(var5)(var3);
                                    var4 = var5.filter;
                                    var8 = _closure1_slot0;
                                    var9 = _closure1_slot3;
                                    var3 = 66;
                                    var3 = var9[var3];
                                    var3 = var8.bind(var1)(var3);
                                    var3 = var3.isNotNullish;
                                    var5 = var4.bind(var5)(var3);
                                    var _closure5_slot0 = var5;
                                    var3 = 83;
                                    var3 = var9[var3];
                                    var7 = var8.bind(var1)(var3);
                                    var6 = var7.hasFlag;
                                    var4 = var20.flags;
                                    var3 = 85;
                                    var3 = var9[var3];
                                    var3 = var8.bind(var1)(var3);
                                    var3 = var3.ApplicationCollectionFlags;
                                    var3 = var3.APPENDS_REMAINING_ACTIVITIES;
                                    var3 = var6.bind(var7)(var4, var3);
                                    if(!var3) { _fun0038_ip = 242; continue _fun0038 }
 218:
                                    var4 = _closure3_slot15;
                                    var3 = var4.forEach;
                                    var2 = function(arg1) {
                                        var3 = _closure5_slot0;
                                        var2 = var3.push;
                                        var1 = {};
                                        var4 = arg1;
                                        var4 = var4.application;
                                        var1['application'] = var4;
                                        var4 = false;
                                        var1['showsPromoted'] = var4;
                                        var1 = var2.bind(var3)(var1);
                                        var1 = undefined;
                                        return var1;
                                    };
                                    var2 = var3.bind(var4)(var2);
 242:
                                    var4 = _closure1_slot37;
                                    var36 = var20.title;
                                    var35 = var20.title;
                                    var38 = undefined;
                                    var37 = var5;
                                    var34 = undefined;
                                    var33 = var19;
                                    var36 = var38[var4](var37, var36, var35, var34, var33, var32);
                                    var4 = _closure4_slot0;
                                    var3 = var4.push;
                                    var2 = new Array(0);
                                    var35 = 0;
                                    var37 = var2;
                                    var5 = arraySpread(var37, var36, var35);
                                    var37 = var3;
                                    var36 = var2;
                                    var35 = var4;
                                    var2 = apply(var37, var36, var35);
                                    _fun0038_ip = 1076; continue _fun0038;
 313:
                                    var3 = var18.length;
                                    var2 = global;
                                    var7 = var2.Math;
                                    var4 = var7.min;
                                    var6 = _closure1_slot0;
                                    var5 = _closure1_slot3;
                                    var2 = 81;
                                    var2 = var5[var2];
                                    var2 = var6.bind(var1)(var2);
                                    var2 = var2.COLLAPSED_LIST_ITEM_MAX;
                                    var2 = var4.bind(var7)(var3, var2);
                                    var4 = {};
                                    var16 = 44;
                                    var5 = var5[var16];
                                    var5 = var6.bind(var1)(var5);
                                    var5 = var5.AppLauncherHomeListItemType;
                                    var5 = var5.RECOMMENDATION_SECTION_HEADER;
                                    var4['type'] = var5;
                                    var5 = var20.title;
                                    var4['section'] = var5;
                                    var5 = var20.title;
                                    var4['sectionName'] = var5;
                                    var4['numItems'] = var3;
                                    var4['numVisibleItems'] = var2;
                                    var3 = _closure4_slot0;
                                    var2 = var3.push;
                                    var2 = var2.bind(var3)(var4);
                                    var2 = var18.length;
                                    var14 = 0;
                                    var2 = var14 < var2;
                                    var13 = 2;
                                    var12 = null;
                                    var11 = 83;
                                    var10 = 84;
                                    var9 = 82;
                                    var8 = 79;
                                    var7 = 1;
                                    var6 = undefined;
                                    var5 = undefined;
                                    var4 = undefined;
                                    var3 = undefined;
                                    if(!var2) { _fun0038_ip = 1076; continue _fun0038 }
 484:
                                    var22 = var18[var14];
                                    var29 = var14 + var7;
                                    var2 = var18.length;
                                    var2 = var29 < var2;
                                    var28 = undefined;
                                    if(!var2) { _fun0038_ip = 510; continue _fun0038 }
 506:
                                    var28 = var18[var29];
 510:
                                    var23 = var22.type;
                                    var21 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var2 = var2[var8];
                                    var2 = var21.bind(var1)(var2);
                                    var2 = var2.ApplicationDirectoryCollectionItemType;
                                    var2 = var2.APPLICATION;
                                    var21 = var3;
                                    if(!(var23 === var2)) { _fun0038_ip = 1057; continue _fun0038 }
 554:
                                    var2 = var22.id;
                                    var2 = var12 != var2;
                                    if(!var2) { _fun0038_ip = 576; continue _fun0038 }
 566:
                                    var23 = var22.image_hash;
                                    var2 = var12 != var23;
 576:
                                    var24 = undefined;
                                    if(!var2) { _fun0038_ip = 631; continue _fun0038 }
 581:
                                    var23 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var2 = var2[var9];
                                    var25 = var23.bind(var1)(var2);
                                    var23 = var25.getCollectionItemAssetUrl;
                                    var2 = {};
                                    var26 = var22.id;
                                    var2['itemId'] = var26;
                                    var26 = var22.image_hash;
                                    var2['hash'] = var26;
                                    var24 = var23.bind(var25)(var2);
 631:
                                    var23 = {};
                                    var2 = var22.application;
                                    var23['application'] = var2;
                                    var27 = _closure1_slot0;
                                    var2 = _closure1_slot3;
                                    var25 = var2[var11];
                                    var26 = var27.bind(var1)(var25);
                                    var25 = var26.hasFlag;
                                    var22 = var22.flags;
                                    var2 = var2[var10];
                                    var2 = var27.bind(var1)(var2);
                                    var2 = var2.ApplicationCollectionItemFlags;
                                    var2 = var2.PROMOTED;
                                    var2 = var25.bind(var26)(var22, var2);
                                    var23['showsPromoted'] = var2;
                                    var23['overrideImageUrl'] = var24;
                                    var25 = var12 != var28;
                                    var22 = undefined;
                                    var2 = var3;
                                    if(!var25) { _fun0038_ip = 927; continue _fun0038 }
 722:
                                    var26 = var28.type;
                                    var27 = _closure1_slot0;
                                    var25 = _closure1_slot3;
                                    var25 = var25[var8];
                                    var25 = var27.bind(var1)(var25);
                                    var25 = var25.ApplicationDirectoryCollectionItemType;
                                    var25 = var25.APPLICATION;
                                    var22 = undefined;
                                    var2 = var3;
                                    if(!(var26 === var25)) { _fun0038_ip = 927; continue _fun0038 }
 768:
                                    var25 = var28.id;
                                    var26 = var12 != var25;
                                    if(!var26) { _fun0038_ip = 790; continue _fun0038 }
 780:
                                    var25 = var28.image_hash;
                                    var26 = var12 != var25;
 790:
                                    var25 = undefined;
                                    if(!var26) { _fun0038_ip = 845; continue _fun0038 }
 795:
                                    var27 = _closure1_slot0;
                                    var26 = _closure1_slot3;
                                    var26 = var26[var9];
                                    var30 = var27.bind(var1)(var26);
                                    var27 = var30.getCollectionItemAssetUrl;
                                    var26 = {};
                                    var31 = var28.id;
                                    var26['itemId'] = var31;
                                    var31 = var28.image_hash;
                                    var26['hash'] = var31;
                                    var25 = var27.bind(var30)(var26);
 845:
                                    var26 = {};
                                    var27 = var28.application;
                                    var26['application'] = var27;
                                    var32 = _closure1_slot0;
                                    var27 = _closure1_slot3;
                                    var30 = var27[var11];
                                    var31 = var32.bind(var1)(var30);
                                    var30 = var31.hasFlag;
                                    var28 = var28.flags;
                                    var27 = var27[var10];
                                    var27 = var32.bind(var1)(var27);
                                    var27 = var27.ApplicationCollectionItemFlags;
                                    var27 = var27.PROMOTED;
                                    var27 = var30.bind(var31)(var28, var27);
                                    var26['showsPromoted'] = var27;
                                    var26['overrideImageUrl'] = var25;
                                    var2 = var25;
                                    var22 = var26;
 927:
                                    var27 = _closure4_slot0;
                                    var26 = var27.push;
                                    var25 = {};
                                    var30 = _closure1_slot0;
                                    var28 = _closure1_slot3;
                                    var28 = var28[var16];
                                    var28 = var30.bind(var1)(var28);
                                    var28 = var28.AppLauncherHomeListItemType;
                                    var28 = var28.RECOMMENDATION_TUPLE;
                                    var25['type'] = var28;
                                    var28 = var20.title;
                                    var25['sectionName'] = var28;
                                    var25['sectionOverallPosition'] = var19;
                                    var25['item1'] = var23;
                                    var25['item2'] = var22;
                                    var30 = var18.length;
                                    var28 = var14 + var13;
                                    var28 = var28 >= var30;
                                    var25['isLastTuple'] = var28;
                                    var25['item1SectionPosition'] = var14;
                                    var30 = var12 != var22;
                                    var28 = undefined;
                                    if(!var30) { _fun0038_ip = 1033; continue _fun0038 }
 1030:
                                    var28 = var29;
 1033:
                                    var25['item2SectionPosition'] = var28;
                                    var25 = var26.bind(var27)(var25);
                                    var6 = var24;
                                    var5 = var23;
                                    var4 = var22;
                                    var21 = var2;
 1057:
                                    var14 = var14 + var13;
                                    var2 = var18.length;
                                    var3 = var21;
                                    if(var14 < var2) { _fun0038_ip = 484; continue _fun0038 }
 1076:
                                    return var1;
                                }
                            };
                            var2 = var3.bind(var4)(var2);
                            _fun0037_ip = 47; continue _fun0037;
 43:
                            var1 = new Array(0);
 47:
                            return var1;
                        }
                    };
                    var15 = var15.bind(var17)(var12, var13);
                    _closure3_slot16 = var15;
                    var13 = _closure1_slot5;
                    var12 = var13.useMemo;
                    var11 = new Array(3);
                    var11[0] = var16;
                    var11[1] = var15;
                    var11[2] = var14;
                    var1 = function() {
                        _fun0040: for(var _fun0040_ip = 0; ; ) switch(_fun0040_ip) {
 0:
                            var2 = _closure1_slot0;
                            var4 = _closure1_slot3;
                            var1 = 19;
                            var1 = var4[var1];
                            var5 = undefined;
                            var6 = var2.bind(var5)(var1);
                            var4 = var6.appLauncherShowsRecommendations;
                            var2 = _closure3_slot1;
                            var2 = var4.bind(var6)(var2);
                            if(var2) { _fun0040_ip = 65; continue _fun0040 }
 46:
                            var8 = _closure3_slot11;
                            var2 = new Array(0);
                            var7 = 0;
                            var9 = var2;
                            var4 = arraySpread(var9, var8, var7);
                            return var2;
 65:
                            var2 = {};
                            var4 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var3 = 44;
                            var3 = var6[var3];
                            var3 = var4.bind(var5)(var3);
                            var3 = var3.AppLauncherHomeListItemType;
                            var3 = var3.LEARN_MORE;
                            var2['type'] = var3;
                            var8 = _closure3_slot16;
                            var1 = new Array(1);
                            var7 = 0;
                            var9 = var1;
                            var3 = arraySpread(var9, var8, var7);
                            var1[var3] = var2;
                            var2 = 1;
                            var2 = var3 + var2;
                            return var1;
                        }
                    };
                    var11 = var12.bind(var13)(var1, var11);
                    var1 = {};
                    var1['list'] = var11;
                    var1['frecencyCommands'] = var10;
                    var1['frecencyUsedAppList'] = var9;
                    var1['sectionDescriptors'] = var8;
                    var1['loading'] = var7;
                    var1['hasNoCommands'] = var5;
                    var5 = 0;
                    var5 = var5 === var6;
                    var1['hasNoShelfItems'] = var5;
                    var1['showsEmptyState'] = var4;
                    var1['showNoPermsState'] = var3;
                    var1['inThisServerItems'] = var2;
                    return var1;
                }
            };
            var5 = var5.bind(var4)(var6);
            var26 = var5.list;
            var _closure2_slot15 = var26;
            var48 = var5.frecencyCommands;
            var _closure2_slot16 = var48;
            var46 = var5.frecencyUsedAppList;
            var _closure2_slot17 = var46;
            var49 = var5.sectionDescriptors;
            var _closure2_slot18 = var49;
            var47 = var5.loading;
            var39 = var5.showsEmptyState;
            var36 = var5.showNoPermsState;
            var44 = var5.inThisServerItems;
            var _closure2_slot19 = var44;
            var5 = {};
            var5['entrypoint'] = var8;
            var27 = var5.entrypoint;
            var5 = 36;
            var5 = var14[var5];
            var6 = var11.bind(var4)(var5);
            var5 = var6.useFontScale;
            var25 = var5.bind(var6)();
            var5 = {};
            var13 = 37;
            var6 = var14[var13];
            var6 = var11.bind(var4)(var6);
            var6 = var6.AppLauncherEntrypoint;
            var9 = var6.VOICE;
            var6 = 120;
            if(!(var27 !== var9)) { _fun0019_ip = 638; continue _fun0019 }
 631:
            var9 = 24;
            var6 = var9 * var25;
 638:
            var5['estimatedItemSize'] = var6;
            var25 = var5.estimatedItemSize;
            var27 = _closure1_slot5;
            var9 = var27.useCallback;
            var6 = new Array(4);
            var6[0] = var18;
            var6[1] = var8;
            var6[2] = var22;
            var6[3] = var49;
            var5 = function(arg1) {
                _fun0041: for(var _fun0041_ip = 0; ; ) switch(_fun0041_ip) {
 0:
                    var1 = arg1;
                    var5 = var1.application;
                    var _closure3_slot0 = var5;
                    var6 = var1.sectionName;
                    var7 = _closure1_slot0;
                    var4 = _closure1_slot3;
                    var1 = 19;
                    var4 = var4[var1];
                    var1 = undefined;
                    var7 = var7.bind(var1)(var4);
                    var4 = var7.isEmbeddedApp;
                    var4 = var4.bind(var7)(var5);
                    var7 = !var4;
                    if(!var7) { _fun0041_ip = 92; continue _fun0041 }
 62:
                    var8 = _closure2_slot18;
                    var4 = var8.find;
                    var3 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.id;
                        var1 = _closure3_slot0;
                        var1 = var1.id;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var4 = var4.bind(var8)(var3);
                    var3 = null;
                    var7 = var3 != var4;
 92:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var2 = 23;
                    var2 = var10[var2];
                    var4 = var9.bind(var1)(var2);
                    var3 = var4.handleApplicationSelected;
                    var2 = {};
                    var8 = 29;
                    var8 = var10[var8];
                    var8 = var9.bind(var1)(var8);
                    var8 = var8.ApplicationCommandTriggerLocations;
                    var8 = var8.APP_LAUNCHER_HOME;
                    var2['location'] = var8;
                    var2['application'] = var5;
                    var8 = _closure2_slot2;
                    var2['navigation'] = var8;
                    var8 = _closure2_slot0;
                    var2['context'] = var8;
                    var7 = !var7;
                    var2['installOnDemand'] = var7;
                    var2['sectionName'] = var6;
                    var5 = _closure2_slot10;
                    var2['entrypoint'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var43 = var9.bind(var27)(var5, var6);
            var _closure2_slot20 = var43;
            var5 = 43;
            var5 = var14[var5];
            var6 = var11.bind(var4)(var5);
            var5 = var6.useClickOnHomeActivityOpensAppDetails;
            var27 = var5.bind(var6)();
            var _closure2_slot21 = var27;
            var9 = _closure1_slot5;
            var6 = var9.useCallback;
            var5 = new Array(14);
            var5[0] = var27;
            var5[1] = var18;
            var5[2] = var8;
            var5[3] = var24;
            var5[4] = var23;
            var23 = var26.length;
            var5[5] = var23;
            var5[6] = var22;
            var5[7] = var21;
            var5[8] = var20;
            var5[9] = var19;
            var5[10] = var43;
            var5[11] = var10;
            var10 = var41.sectionHeader;
            var5[12] = var10;
            var5[13] = var3;
            var3 = function(arg1) {
                _fun0042: for(var _fun0042_ip = 0; ; ) switch(_fun0042_ip) {
 0:
                    var1 = arg1;
                    var6 = var1.item;
                    var _closure3_slot0 = var6;
                    var7 = var1.index;
                    var5 = var6.type;
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var9 = 44;
                    var3 = var3[var9];
                    var4 = undefined;
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.PLACEHOLDER;
                    if(!(var3 !== var5)) { _fun0042_ip = 1405; continue _fun0042 }
 68:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.SECTION_HEADER;
                    if(!(var3 !== var5)) { _fun0042_ip = 1296; continue _fun0042 }
 104:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.SHELF_ITEM;
                    if(!(var3 !== var5)) { _fun0042_ip = 1220; continue _fun0042 }
 140:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.SHELF_ITEM_TUPLE;
                    if(!(var3 !== var5)) { _fun0042_ip = 1014; continue _fun0042 }
 176:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_TUPLE;
                    if(!(var3 !== var5)) { _fun0042_ip = 912; continue _fun0042 }
 212:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.APP;
                    if(!(var3 !== var5)) { _fun0042_ip = 824; continue _fun0042 }
 248:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_SECTION_HEADER;
                    if(!(var3 !== var5)) { _fun0042_ip = 793; continue _fun0042 }
 284:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_BANNER_CARD;
                    if(!(var3 !== var5)) { _fun0042_ip = 678; continue _fun0042 }
 320:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.RECOMMENDATION_APP;
                    if(!(var3 !== var5)) { _fun0042_ip = 580; continue _fun0042 }
 356:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.VIEW_ALL;
                    if(!(var3 !== var5)) { _fun0042_ip = 535; continue _fun0042 }
 392:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.DIVIDER_ITEM;
                    if(!(var3 !== var5)) { _fun0042_ip = 517; continue _fun0042 }
 425:
                    var8 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var3 = var3[var9];
                    var3 = var8.bind(var4)(var3);
                    var3 = var3.AppLauncherHomeListItemType;
                    var3 = var3.LEARN_MORE;
                    if(!(var3 !== var5)) { _fun0042_ip = 462; continue _fun0042 }
 458:
                    var3 = null;
                    return var3;
 462:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 51;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = {};
                    var10 = _closure2_slot4;
                    var9 = var10.valueOf;
                    var9 = var9.bind(var10)();
                    var3['visible'] = var9;
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 517:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot35;
                    var3 = {};
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 535:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 48;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = {};
                    var9 = function onPress() {
                        var5 = _closure3_slot0;
                        var3 = var5.applications;
                        var2 = var3.map;
                        var1 = function(arg1) {
                            var1 = arg1;
                            return var1;
                        };
                        var8 = var2.bind(var3)(var1);
                        var9 = _closure1_slot0;
                        var10 = _closure1_slot3;
                        var1 = 23;
                        var2 = var10[var1];
                        var1 = undefined;
                        var4 = var9.bind(var1)(var2);
                        var3 = var4.handleViewAllSelected;
                        var2 = {};
                        var7 = 29;
                        var7 = var10[var7];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.ApplicationCommandTriggerLocations;
                        var7 = var7.APP_LAUNCHER_HOME;
                        var2['location'] = var7;
                        var11 = _closure2_slot2;
                        var2['navigation'] = var11;
                        var7 = _closure2_slot0;
                        var2['context'] = var7;
                        var7 = var5.sectionName;
                        var2['sectionName'] = var7;
                        var7 = var5.sectionOverallPosition;
                        var2['sectionOverallPosition'] = var7;
                        var2['applications'] = var8;
                        var7 = 49;
                        var7 = var10[var7];
                        var7 = var9.bind(var1)(var7);
                        var7 = var7.SectionItemType;
                        var7 = var7.APPS;
                        var2['sectionItemType'] = var7;
                        var7 = new Array(0);
                        var2['commands'] = var7;
                        var7 = var8.map;
                        var6 = function(arg1) {
                            var3 = _closure1_slot0;
                            var2 = _closure1_slot3;
                            var1 = 50;
                            var2 = var2[var1];
                            var1 = undefined;
                            var3 = var3.bind(var1)(var2);
                            var2 = var3.getApplicationCommandSection;
                            var1 = arg1;
                            var1 = var2.bind(var3)(var1);
                            return var1;
                        };
                        var6 = var7.bind(var8)(var6);
                        var2['sectionDescriptors'] = var6;
                        var6 = var5.title;
                        var2['title'] = var6;
                        var5 = var5.promotedApplicationIds;
                        var2['promotedApplicationIds'] = var5;
                        var2 = var3.bind(var4)(var2);
                        return var1;
                    };
                    var3['onPress'] = var9;
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 580:
                    var9 = _closure1_slot20;
                    var5 = _closure1_slot1;
                    var8 = _closure1_slot3;
                    var3 = 47;
                    var3 = var8[var3];
                    var8 = var5.bind(var4)(var3);
                    var5 = {};
                    var3 = var6.application;
                    var5['application'] = var3;
                    var3 = var6.isFirstRow;
                    var5['isFirstRow'] = var3;
                    var3 = var6.isLastRow;
                    var5['isLastRow'] = var3;
                    var3 = function onPress() {
                        var3 = _closure2_slot20;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var4 = var1.application;
                        var2['application'] = var4;
                        var1 = var1.sectionName;
                        var2['sectionName'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var5['onPress'] = var3;
                    var3 = var6.showsPromoted;
                    var5['showsPromoted'] = var3;
                    var3 = var6.application;
                    var3 = var3.id;
                    var3 = var9.bind(var4)(var8, var5, var3);
                    return var3;
 678:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot1;
                    var9 = _closure1_slot3;
                    var3 = 46;
                    var3 = var9[var3];
                    var5 = var5.bind(var4)(var3);
                    var3 = {};
                    var9 = var6.item;
                    var9 = var9.application;
                    var3['application'] = var9;
                    var9 = var6.isFirst;
                    var3['isFirst'] = var9;
                    var9 = var6.isLast;
                    var3['isLast'] = var9;
                    var9 = function onPress() {
                        var3 = _closure2_slot20;
                        var2 = {};
                        var1 = _closure3_slot0;
                        var4 = var1.item;
                        var4 = var4.application;
                        var2['application'] = var4;
                        var1 = var1.sectionName;
                        var2['sectionName'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var9;
                    var9 = _closure2_slot12;
                    var3['isLandscape'] = var9;
                    var9 = var6.showsPromoted;
                    var3['showsPromoted'] = var9;
                    var9 = var6.overrideImageUrl;
                    var3['overrideImageUrl'] = var9;
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 793:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot36;
                    var3 = {};
                    var3['index'] = var7;
                    var9 = var6.section;
                    var3['children'] = var9;
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 824:
                    var9 = _closure1_slot20;
                    var8 = _closure1_slot29;
                    var5 = {};
                    var3 = var6.section;
                    var5['section'] = var3;
                    var3 = function onPress() {
                        var4 = _closure2_slot13;
                        var1 = _closure3_slot0;
                        var3 = var1.section;
                        var5 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 37;
                        var2 = var2[var1];
                        var1 = undefined;
                        var2 = var5.bind(var1)(var2);
                        var2 = var2.AppLauncherSectionName;
                        var2 = var2.INSTALLED;
                        var2 = var4.bind(var1)(var3, var2);
                        return var1;
                    };
                    var5['onPress'] = var3;
                    var3 = var6.isFirstRow;
                    var5['isFirstRow'] = var3;
                    var3 = var6.isLastRow;
                    var5['isLastRow'] = var3;
                    var3 = {};
                    var10 = _closure2_slot6;
                    var3['height'] = var10;
                    var5['style'] = var3;
                    var3 = var6.section;
                    var3 = var3.id;
                    var3 = var9.bind(var4)(var8, var5, var3);
                    return var3;
 912:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot33;
                    var3 = {};
                    var10 = _closure2_slot0;
                    var3['context'] = var10;
                    var10 = var6.sectionName;
                    var3['sectionName'] = var10;
                    var10 = function onPress(arg1, arg2) {
                        var3 = _closure2_slot20;
                        var2 = {};
                        var1 = arg1;
                        var2['application'] = var1;
                        var1 = arg2;
                        var2['sectionName'] = var1;
                        var1 = undefined;
                        var1 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var10;
                    var10 = var6.item1;
                    var3['item1'] = var10;
                    var10 = var6.item2;
                    var3['item2'] = var10;
                    var10 = var6.isLastTuple;
                    var3['isLastTuple'] = var10;
                    var10 = _closure2_slot10;
                    var3['entrypoint'] = var10;
                    var9 = _closure2_slot9;
                    var3['containerWidth'] = var9;
                    var3 = var8.bind(var4)(var5, var3);
                    return var3;
 1014:
                    var9 = _closure1_slot20;
                    var8 = _closure1_slot31;
                    var5 = {};
                    var10 = _closure2_slot0;
                    var5['context'] = var10;
                    var11 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var14 = 37;
                    var10 = var10[var14];
                    var10 = var11.bind(var4)(var10);
                    var10 = var10.AppLauncherSectionName;
                    var10 = var10.ACTIVITIES;
                    var5['sectionName'] = var10;
                    var10 = function onPress(arg1) {
                        _fun0043: for(var _fun0043_ip = 0; ; ) switch(_fun0043_ip) {
 0:
                            var3 = _closure2_slot14;
                            var2 = {};
                            var1 = arg1;
                            var2['shelfData'] = var1;
                            var1 = _closure3_slot0;
                            var1 = var1.sectionName;
                            var2['sectionName'] = var1;
                            var1 = _closure2_slot21;
                            var5 = !var1;
                            var1 = !var5;
                            if(!var5) { _fun0043_ip = 93; continue _fun0043 }
 48:
                            var5 = _closure2_slot10;
                            var7 = _closure1_slot0;
                            var6 = _closure1_slot3;
                            var4 = 37;
                            var6 = var6[var4];
                            var4 = undefined;
                            var4 = var7.bind(var4)(var6);
                            var4 = var4.AppLauncherEntrypoint;
                            var4 = var4.VOICE;
                            var1 = var5 !== var4;
 93:
                            var2['navigates'] = var1;
                            var1 = undefined;
                            var2 = var3.bind(var1)(var2);
                            return var1;
                        }
                    };
                    var5['onPress'] = var10;
                    var10 = _closure2_slot21;
                    var10 = !var10;
                    if(!var10) { _fun0042_ip = 1130; continue _fun0042 }
 1093:
                    var12 = _closure2_slot10;
                    var13 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var11 = var11[var14];
                    var11 = var13.bind(var4)(var11);
                    var11 = var11.AppLauncherEntrypoint;
                    var11 = var11.VOICE;
                    var10 = var12 === var11;
 1130:
                    var5['usesHandleActivityItemSelected'] = var10;
                    var10 = _closure2_slot11;
                    var5['onActivityItemSelected'] = var10;
                    var10 = var6.shelfItem1;
                    var5['shelfItem1'] = var10;
                    var10 = var6.shelfItem2;
                    var5['shelfItem2'] = var10;
                    var10 = var6.isLastTuple;
                    var5['isLastTuple'] = var10;
                    var10 = _closure2_slot10;
                    var5['entrypoint'] = var10;
                    var3 = _closure2_slot9;
                    var5['containerWidth'] = var3;
                    var3 = var6.shelfItem1;
                    var3 = var3.application;
                    var3 = var3.id;
                    var3 = var9.bind(var4)(var8, var5, var3);
                    return var3;
 1220:
                    var8 = _closure1_slot20;
                    var5 = _closure1_slot30;
                    var3 = {};
                    var9 = var6.section;
                    var3['section'] = var9;
                    var2 = function onPress(arg1) {
                        var3 = _closure2_slot14;
                        var2 = {};
                        var1 = arg1;
                        var2['shelfData'] = var1;
                        var1 = _closure3_slot0;
                        var1 = var1.sectionName;
                        var2['sectionName'] = var1;
                        var1 = undefined;
                        var2 = var3.bind(var1)(var2);
                        return var1;
                    };
                    var3['onPress'] = var2;
                    var2 = var6.isFirstRow;
                    var3['isFirstRow'] = var2;
                    var2 = var6.isLastRow;
                    var3['isLastRow'] = var2;
                    var2 = var6.section;
                    var2 = var2.application;
                    var2 = var2.id;
                    var2 = var8.bind(var4)(var5, var3, var2);
                    return var2;
 1296:
                    var5 = _closure1_slot20;
                    var3 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var2 = 16;
                    var2 = var8[var2];
                    var2 = var3.bind(var4)(var2);
                    var3 = var2.Text;
                    var2 = {'variant': 'text-lg/bold', 'color': 'header-primary'};
                    var8 = _closure2_slot5;
                    var9 = var8.sectionHeader;
                    var8 = new Array(2);
                    var8[0] = var9;
                    var10 = 0;
                    var9 = null;
                    if(!(var10 !== var7)) { _fun0042_ip = 1380; continue _fun0042 }
 1368:
                    var10 = {};
                    var11 = 24;
                    var10['marginTop'] = var11;
                    var9 = var10;
 1380:
                    var8[1] = var9;
                    var2['style'] = var8;
                    var6 = var6.section;
                    var2['children'] = var6;
                    var2 = var5.bind(var4)(var3, var2);
                    return var2;
 1405:
                    var3 = _closure1_slot20;
                    var2 = _closure1_slot1;
                    var5 = _closure1_slot3;
                    var1 = 45;
                    var1 = var5[var1];
                    var2 = var2.bind(var4)(var1);
                    var1 = {};
                    var5 = 0;
                    var5 = var5 === var7;
                    var1['isFirstRow'] = var5;
                    var5 = _closure2_slot15;
                    var8 = var5.length;
                    var5 = 1;
                    var5 = var8 - var5;
                    var5 = var7 === var5;
                    var1['isLastRow'] = var5;
                    var5 = {};
                    var6 = _closure2_slot6;
                    var5['height'] = var6;
                    var1['style'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                }
            };
            var28 = var6.bind(var9)(var3, var5);
            var5 = _closure1_slot5;
            var3 = var5.useRef;
            var35 = null;
            var19 = var3.bind(var5)(var35);
            var _closure2_slot22 = var19;
            var5 = _closure1_slot5;
            var3 = var5.useState;
            var23 = false;
            var5 = var3.bind(var5)(var23);
            var3 = _closure1_slot4;
            var10 = 2;
            var6 = var3.bind(var4)(var5, var10);
            var5 = 0;
            var9 = var6[var5];
            var3 = 1;
            var6 = var6[var3];
            var _closure2_slot23 = var6;
            var22 = _closure1_slot5;
            var21 = var22.useMemo;
            var20 = new Array(1);
            var20[0] = var8;
            var6 = function() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot3;
                var1 = 52;
                var2 = var2[var1];
                var1 = undefined;
                var5 = var3.bind(var1)(var2);
                var4 = var5.debounce;
                var3 = function(arg1) {
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot3;
                    var1 = 53;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot17;
                    var3 = var2.APP_LAUNCHER_SEARCH_QUERY_TYPED;
                    var2 = {};
                    var6 = arg1;
                    var2['query'] = var6;
                    var6 = _closure2_slot10;
                    var2['source'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = 400;
                var1 = {'leading': false, 'trailing': true};
                var1 = var4.bind(var5)(var3, var2, var1);
                return var1;
            };
            var6 = var21.bind(var22)(var6, var20);
            var _closure2_slot24 = var6;
            var21 = _closure1_slot5;
            var20 = var21.useRef;
            var20 = var20.bind(var21)(var35);
            var _closure2_slot25 = var20;
            var24 = _closure1_slot5;
            var22 = var24.useEffect;
            var21 = function() {
                var1 = function() {
                    _fun0044: for(var _fun0044_ip = 0; ; ) switch(_fun0044_ip) {
 0:
                        var1 = _closure2_slot25;
                        var2 = var1.current;
                        var1 = null;
                        if(!(var1 != var2)) { _fun0044_ip = 28; continue _fun0044 }
 18:
                        var1 = var2.cancel;
                        var1 = var1.bind(var2)();
 28:
                        var1 = undefined;
                        return var1;
                    }
                };
                return var1;
            };
            var20 = new Array(0);
            var20 = var22.bind(var24)(var21, var20);
            var22 = _closure1_slot5;
            var21 = var22.useCallback;
            var20 = new Array(1);
            var20[0] = var6;
            var6 = function(arg1) {
                _fun0045: for(var _fun0045_ip = 0; ; ) switch(_fun0045_ip) {
 0:
                    var3 = arg1;
                    var _closure3_slot0 = var3;
                    var6 = _closure2_slot23;
                    var7 = var3.length;
                    var1 = undefined;
                    var5 = 0;
                    var5 = var5 !== var7;
                    var5 = var6.bind(var1)(var5);
                    var5 = _closure2_slot25;
                    var6 = var5.current;
                    var5 = null;
                    if(!(var5 != var6)) { _fun0045_ip = 59; continue _fun0045 }
 49:
                    var5 = var6.cancel;
                    var5 = var5.bind(var6)();
 59:
                    var5 = _closure2_slot25;
                    var7 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var6 = 54;
                    var6 = var8[var6];
                    var8 = var7.bind(var1)(var6);
                    var7 = var8.runAfterInteractions;
                    var6 = function() {
                        _fun0046: for(var _fun0046_ip = 0; ; ) switch(_fun0046_ip) {
 0:
                            var1 = _closure2_slot22;
                            var3 = var1.current;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0046_ip = 36; continue _fun0046 }
 18:
                            var2 = var3.setQuery;
                            var1 = _closure3_slot0;
                            var1 = var2.bind(var3)(var1);
 36:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var4 = 100;
                    var4 = var7.bind(var8)(var6, var4);
                    var5['current'] = var4;
                    var2 = _closure2_slot24;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var51 = var21.bind(var22)(var6, var20);
            var _closure2_slot26 = var51;
            var20 = _closure1_slot5;
            var6 = var20.useRef;
            var6 = var6.bind(var20)(var51);
            var _closure2_slot27 = var6;
            var22 = _closure1_slot5;
            var21 = var22.useEffect;
            var20 = new Array(1);
            var20[0] = var51;
            var6 = function() {
                var2 = _closure2_slot27;
                var1 = _closure2_slot26;
                var2['current'] = var1;
                var1 = undefined;
                return var1;
            };
            var6 = var21.bind(var22)(var6, var20);
            var22 = _closure1_slot5;
            var21 = var22.useCallback;
            var20 = new Array(1);
            var20[0] = var8;
            var6 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot3;
                var1 = 53;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.trackWithMetadata;
                var2 = _closure1_slot17;
                var3 = var2.APP_LAUNCHER_SEARCH_FOCUSED;
                var2 = {};
                var6 = _closure2_slot10;
                var2['source'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6 = var21.bind(var22)(var6, var20);
            var _closure2_slot28 = var6;
            var6 = 55;
            var6 = var14[var6];
            var14 = var11.bind(var4)(var6);
            var11 = var14.usePinnedSearchBarBottomBorder;
            var6 = {};
            var20 = 'home-scroller';
            if(!var9) { _fun0019_ip = 1109; continue _fun0019 }
 1103:
            var20 = 'search-scroller';
 1109:
            var6['key'] = var20;
            var20 = 5;
            var6['triggerScrollHeight'] = var20;
            var34 = var11.bind(var14)(var6);
            _closure2_slot29 = var34;
            var11 = _closure1_slot5;
            var6 = var11.useRef;
            var53 = var6.bind(var11)(var35);
            _closure2_slot30 = var53;
            var14 = _closure1_slot5;
            var11 = var14.useLayoutEffect;
            var6 = new Array(1);
            var6[0] = var1;
            var1 = function() {
                _fun0047: for(var _fun0047_ip = 0; ; ) switch(_fun0047_ip) {
 0:
                    var3 = _closure2_slot1;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0047_ip = 82; continue _fun0047 }
 13:
                    var3 = _closure2_slot30;
                    var5 = var3.current;
                    if(!(var2 != var5)) { _fun0047_ip = 41; continue _fun0047 }
 26:
                    var4 = var5.setText;
                    var3 = _closure2_slot1;
                    var3 = var4.bind(var5)(var3);
 41:
                    var3 = _closure2_slot30;
                    var3 = var3.current;
                    if(!(var2 != var3)) { _fun0047_ip = 64; continue _fun0047 }
 54:
                    var2 = var3.focus;
                    var2 = var2.bind(var3)();
 64:
                    var3 = _closure2_slot27;
                    var2 = var3.current;
                    var1 = _closure2_slot1;
                    var1 = var2.bind(var3)(var1);
 82:
                    var1 = undefined;
                    return var1;
                }
            };
            var1 = var11.bind(var14)(var1, var6);
            var1 = _closure1_slot15;
            var2 = var2 + var1;
            _closure2_slot31 = var2;
            var52 = _closure1_slot0;
            var24 = _closure1_slot3;
            var1 = 56;
            var1 = var24[var1];
            var6 = var52.bind(var4)(var1);
            var1 = var6.useBottomSheetFlashListBottomViewabilityInset;
            var1 = var1.bind(var6)();
            var20 = var1.flashListRef;
            var21 = var1.bottomVisibilityInsetRef;
            var6 = _closure1_slot1;
            var1 = 57;
            var1 = var24[var1];
            var14 = var6.bind(var4)(var1);
            var11 = {};
            var1 = 58;
            var6 = var24[var1];
            var6 = var52.bind(var4)(var6);
            var6 = var6.ImpressionTypes;
            var6 = var6.VIEW;
            var11['type'] = var6;
            var1 = var24[var1];
            var1 = var52.bind(var4)(var1);
            var1 = var1.ImpressionNames;
            var1 = var1.APP_LAUNCHER_HOME_ACTIVITY_ITEM;
            var11['name'] = var1;
            var6 = {};
            var1 = !var17;
            var6['disableTrack'] = var1;
            var1 = new Array(1);
            var1[0] = var17;
            var1 = var14.bind(var4)(var11, var6, var1);
            var6 = _closure1_slot5;
            var1 = var6.useState;
            var6 = var1.bind(var6)(var23);
            var1 = _closure1_slot4;
            var1 = var1.bind(var4)(var6, var10);
            var38 = var1[var5];
            var1 = var1[var3];
            _closure2_slot32 = var1;
            var6 = _closure1_slot5;
            var5 = var6.useEffect;
            var3 = function() {
                var3 = _closure2_slot32;
                var1 = undefined;
                var2 = true;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var1 = new Array(0);
            var1 = var5.bind(var6)(var3, var1);
            var1 = 28;
            var1 = var24[var1];
            var6 = var52.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot14;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var2 = _closure1_slot14;
                var1 = var2.getTriggeredOnboardingContentMetadata;
                var1 = var1.bind(var2)();
                var1 = var1.willShowGlobalSearchOnboarding;
                return var1;
            };
            var11 = var5.bind(var6)(var3, var1);
            _closure2_slot33 = var11;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var11;
            var1 = function(arg1) {
                _fun0048: for(var _fun0048_ip = 0; ; ) switch(_fun0048_ip) {
 0:
                    var1 = arg1;
                    var9 = var1.actionType;
                    var1 = _closure2_slot33;
                    if(!var1) { _fun0048_ip = 147; continue _fun0048 }
 22:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var1 = 59;
                    var1 = var5[var1];
                    var2 = undefined;
                    var8 = var3.bind(var2)(var1);
                    var7 = var8.UNSAFE_markDismissibleContentAsDismissed;
                    var1 = 60;
                    var1 = var5[var1];
                    var1 = var3.bind(var2)(var1);
                    var1 = var1.DismissibleContent;
                    var6 = var1.APP_LAUNCHER_GLOBAL_SEARCH_ONBOARDING;
                    var1 = {};
                    var1['dismissAction'] = var9;
                    var1 = var7.bind(var8)(var6, var1);
                    var1 = 61;
                    var1 = var5[var1];
                    var3 = var3.bind(var2)(var1);
                    var2 = var3.setTriggeredOnboardingContentMetadata;
                    var1 = {};
                    var5 = _closure1_slot14;
                    var4 = var5.getTriggeredOnboardingContentMetadata;
                    var10 = var4.bind(var5)();
                    var11 = var1;
                    var4 = copyDataProperties(var11, var10);
                    var5 = false;
                    var4 = 'willShowGlobalSearchOnboarding';
                    var1[var4] = var5;
                    var1 = var2.bind(var3)(var1);
 147:
                    var1 = undefined;
                    return var1;
                }
            };
            var10 = var5.bind(var6)(var1, var3);
            _closure2_slot34 = var10;
            var1 = 62;
            var1 = var24[var1];
            var3 = var52.bind(var4)(var1);
            var1 = var3.useTrackAppLauncherHomeItemImpression;
            var1 = var1.bind(var3)();
            var1 = var1.trackAppLauncherHomeItemImpression;
            _closure2_slot35 = var1;
            var14 = _closure1_slot5;
            var6 = var14.useMemo;
            var5 = new Array(2);
            var5[0] = var2;
            var3 = var41.list;
            var5[1] = var3;
            var3 = function() {
                var1 = {};
                var3 = _closure2_slot5;
                var4 = var3.list;
                var5 = var1;
                var3 = copyDataProperties(var5, var4);
                var3 = _closure2_slot31;
                var2 = 'paddingBottom';
                var1[var2] = var3;
                return var1;
            };
            var30 = var6.bind(var14)(var3, var5);
            var6 = _closure1_slot5;
            var5 = var6.useMemo;
            var3 = new Array(1);
            var3[0] = var2;
            var2 = function() {
                var1 = {};
                var2 = _closure2_slot31;
                var1['bottom'] = var2;
                return var1;
            };
            var29 = var5.bind(var6)(var2, var3);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = function(arg1) {
                var1 = arg1;
                var1 = var1.type;
                return var1;
            };
            var2 = new Array(0);
            var27 = var5.bind(var6)(var3, var2);
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var34;
            var2 = function(arg1) {
                var3 = _closure2_slot29;
                var2 = var3.scrollHandler;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = var5.bind(var6)(var2, var3);
            _closure2_slot36 = var14;
            var6 = _closure1_slot5;
            var5 = var6.useCallback;
            var3 = new Array(1);
            var3[0] = var14;
            var2 = function(arg1) {
                var1 = arg1;
                var1 = var1.nativeEvent;
                var3 = {};
                var2 = var1.layoutMeasurement;
                var2 = var2.width;
                var3['width'] = var2;
                var2 = var1.layoutMeasurement;
                var2 = var2.height;
                var3['height'] = var2;
                var2 = var1.contentOffset;
                var2 = var2.y;
                var3['offset'] = var2;
                var2 = var1.contentSize;
                var2 = var2.width;
                var3['contentWidth'] = var2;
                var1 = var1.contentSize;
                var1 = var1.height;
                var3['contentHeight'] = var1;
                var2 = _closure2_slot36;
                var1 = undefined;
                var2 = var2.bind(var1)(var3);
                return var1;
            };
            var17 = var5.bind(var6)(var2, var3);
            var6 = 63;
            var2 = var24[var6];
            var5 = var52.bind(var4)(var2);
            var3 = var5.useAppLauncherFlashListProps;
            var2 = {};
            var2['onScrollHandler'] = var14;
            var14 = var3.bind(var5)(var2);
            var5 = _closure1_slot5;
            var3 = var5.useMemo;
            var2 = new Array(2);
            var2[0] = var15;
            var2[1] = var1;
            var1 = function() {
                var2 = {};
                var1 = {};
                var2['viewabilityConfig'] = var1;
                var1 = _closure2_slot3;
                var2['onViewableItemsChanged'] = var1;
                var1 = new Array(2);
                var1[0] = var2;
                var2 = {};
                var4 = _closure1_slot16;
                var2['viewabilityConfig'] = var4;
                var3 = _closure2_slot35;
                var2['onViewableItemsChanged'] = var3;
                var1[1] = var2;
                return var1;
            };
            var22 = var3.bind(var5)(var1, var2);
            var3 = _closure1_slot21;
            var2 = _closure1_slot6;
            var1 = {};
            var5 = var41.container;
            var1['style'] = var5;
            var31 = _closure1_slot20;
            var15 = _closure1_slot6;
            var5 = {};
            var32 = var41.topBackgroundFill;
            var5['style'] = var32;
            var15 = var31.bind(var4)(var15, var5);
            var5 = new Array(4);
            var5[0] = var15;
            var32 = _closure1_slot21;
            var31 = _closure1_slot22;
            var15 = {};
            var40 = _closure1_slot20;
            var37 = _closure1_slot6;
            var33 = {};
            var41 = var41.searchBarContainer;
            var33['style'] = var41;
            var50 = _closure1_slot20;
            var41 = 64;
            var41 = var24[var41];
            var41 = var52.bind(var4)(var41);
            var45 = var41.SearchField;
            var41 = {};
            var41['ref'] = var53;
            var24 = var24[var13];
            var24 = var52.bind(var4)(var24);
            var24 = var24.AppLauncherEntrypoint;
            var24 = var24.VOICE;
            if(!(var8 !== var24)) { _fun0019_ip = 1922; continue _fun0019 }
 1863:
            var54 = _closure1_slot0;
            var55 = _closure1_slot3;
            var24 = 17;
            var52 = var55[var24];
            var52 = var54.bind(var4)(var52);
            var53 = var52.intl;
            var52 = var53.string;
            var24 = var55[var24];
            var24 = var54.bind(var4)(var24);
            var24 = var24.t;
            var24 = var24.ziyFv7;
            var24 = var52.bind(var53)(var24);
            _fun0019_ip = 1979; continue _fun0019;
 1922:
            var55 = _closure1_slot0;
            var56 = _closure1_slot3;
            var52 = 17;
            var53 = var56[var52];
            var53 = var55.bind(var4)(var53);
            var54 = var53.intl;
            var53 = var54.string;
            var52 = var56[var52];
            var52 = var55.bind(var4)(var52);
            var52 = var52.t;
            var52 = var52.pw+r5e;
            var24 = var53.bind(var54)(var52);
 1979:
            var41['placeholder'] = var24;
            var24 = true;
            var41['isRound'] = var24;
            var52 = 'md';
            var41['size'] = var52;
            var41['onChange'] = var51;
            var51 = function onFocus() {
                var3 = _closure2_slot28;
                var1 = undefined;
                var3 = var3.bind(var1)();
                var3 = _closure2_slot34;
                var2 = {};
                var4 = _closure1_slot19;
                var4 = var4.TAKE_ACTION;
                var2['actionType'] = var4;
                var2 = var3.bind(var1)(var2);
                return var1;
            };
            var41['onFocus'] = var51;
            var41 = var50.bind(var4)(var45, var41);
            var33['children'] = var41;
            var37 = var40.bind(var4)(var37, var33);
            var33 = new Array(2);
            var33[0] = var37;
            var34 = var34.bottomBorderComponent;
            var33[1] = var34;
            var15['children'] = var33;
            var15 = var32.bind(var4)(var31, var15);
            var5[1] = var15;
            var15 = _closure1_slot20;
            if(var9) { _fun0019_ip = 2503; continue _fun0019 }
 2074:
            var40 = _closure1_slot1;
            var45 = _closure1_slot3;
            var6 = var45[var6];
            var9 = var40.bind(var4)(var6);
            var6 = {};
            var33 = _closure1_slot21;
            var32 = _closure1_slot22;
            var31 = {};
            var41 = _closure1_slot20;
            var34 = 49;
            var34 = var45[var34];
            var37 = var40.bind(var4)(var34);
            var34 = {};
            var34['context'] = var18;
            var34['sectionDescriptors'] = var49;
            var34['commands'] = var48;
            var34['loading'] = var47;
            var34['apps'] = var46;
            var34['onAppSelected'] = var43;
            var46 = function onCommandSelected(arg1, arg2) {
                var7 = _closure1_slot0;
                var8 = _closure1_slot3;
                var1 = 23;
                var2 = var8[var1];
                var1 = undefined;
                var4 = var7.bind(var1)(var2);
                var3 = var4.handleApplicationCommandSelected;
                var2 = {};
                var5 = 29;
                var5 = var8[var5];
                var5 = var7.bind(var1)(var5);
                var5 = var5.ApplicationCommandTriggerLocations;
                var5 = var5.APP_LAUNCHER_HOME;
                var2['location'] = var5;
                var6 = _closure2_slot0;
                var2['context'] = var6;
                var6 = arg1;
                var2['command'] = var6;
                var6 = arg2;
                var2['section'] = var6;
                var6 = _closure2_slot18;
                var2['sectionDescriptors'] = var6;
                var6 = '';
                var2['query'] = var6;
                var6 = _closure2_slot2;
                var2['navigation'] = var6;
                var6 = 37;
                var6 = var8[var6];
                var6 = var7.bind(var1)(var6);
                var6 = var6.AppLauncherSectionName;
                var6 = var6.RECENT_COMMANDS;
                var2['sectionName'] = var6;
                var5 = _closure2_slot10;
                var2['entrypoint'] = var5;
                var2 = var3.bind(var4)(var2);
                return var1;
            };
            var34['onCommandSelected'] = var46;
            var46 = function onViewAllSelected(arg1) {
                _fun0049: for(var _fun0049_ip = 0; ; ) switch(_fun0049_ip) {
 0:
                    var7 = arg1;
                    var10 = _closure1_slot0;
                    var8 = _closure1_slot3;
                    var1 = 23;
                    var2 = var8[var1];
                    var1 = undefined;
                    var4 = var10.bind(var1)(var2);
                    var3 = var4.handleViewAllSelected;
                    var2 = {};
                    var5 = 29;
                    var5 = var8[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.ApplicationCommandTriggerLocations;
                    var5 = var5.APP_LAUNCHER_APPLICATION_VIEW_FRECENCT;
                    var2['location'] = var5;
                    var9 = _closure2_slot2;
                    var2['navigation'] = var9;
                    var9 = _closure2_slot0;
                    var2['context'] = var9;
                    var9 = 49;
                    var8 = var8[var9];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.SectionItemType;
                    var10 = var8.COMMANDS;
                    var8 = 'recent_apps_view_more';
                    if(!(var7 === var10)) { _fun0049_ip = 124; continue _fun0049 }
 118:
                    var8 = 'recent_commands_view_more';
 124:
                    var2['sectionName'] = var8;
                    var11 = _closure2_slot17;
                    var10 = var11.map;
                    var8 = function(arg1) {
                        _fun0050: for(var _fun0050_ip = 0; ; ) switch(_fun0050_ip) {
 0:
                            var1 = arg1;
                            var2 = var1.section;
                            var1 = null;
                            var3 = var1 == var2;
                            var1 = undefined;
                            if(var3) { _fun0050_ip = 24; continue _fun0050 }
 19:
                            var1 = var2.application;
 24:
                            return var1;
                        }
                    };
                    var13 = var10.bind(var11)(var8);
                    var12 = var13.filter;
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var8 = 66;
                    var8 = var11[var8];
                    var8 = var10.bind(var1)(var8);
                    var8 = var8.isNotNullish;
                    var8 = var12.bind(var13)(var8);
                    var2['applications'] = var8;
                    var2['sectionItemType'] = var7;
                    var8 = _closure2_slot16;
                    var2['commands'] = var8;
                    var8 = _closure2_slot18;
                    var2['sectionDescriptors'] = var8;
                    var8 = _closure2_slot10;
                    var5 = 37;
                    var5 = var11[var5];
                    var5 = var10.bind(var1)(var5);
                    var5 = var5.AppLauncherEntrypoint;
                    var5 = var5.VOICE;
                    if(!(var8 !== var5)) { _fun0049_ip = 402; continue _fun0049 }
 251:
                    var8 = _closure1_slot0;
                    var5 = _closure1_slot3;
                    var5 = var5[var9];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.SectionItemType;
                    var5 = var5.COMMANDS;
                    if(!(var7 !== var5)) { _fun0049_ip = 343; continue _fun0049 }
 284:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var5 = 17;
                    var7 = var10[var5];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var5 = var10[var5];
                    var5 = var9.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.SCViVl;
                    var5 = var7.bind(var8)(var5);
                    _fun0049_ip = 400; continue _fun0049;
 343:
                    var10 = _closure1_slot0;
                    var11 = _closure1_slot3;
                    var7 = 17;
                    var8 = var11[var7];
                    var8 = var10.bind(var1)(var8);
                    var9 = var8.intl;
                    var8 = var9.string;
                    var7 = var11[var7];
                    var7 = var10.bind(var1)(var7);
                    var7 = var7.t;
                    var7 = var7.V3Sq9/;
                    var5 = var8.bind(var9)(var7);
 400:
                    _fun0049_ip = 459; continue _fun0049;
 402:
                    var9 = _closure1_slot0;
                    var10 = _closure1_slot3;
                    var6 = 17;
                    var7 = var10[var6];
                    var7 = var9.bind(var1)(var7);
                    var8 = var7.intl;
                    var7 = var8.string;
                    var6 = var10[var6];
                    var6 = var9.bind(var1)(var6);
                    var6 = var6.t;
                    var6 = var6.2pFD8P;
                    var5 = var7.bind(var8)(var6);
 459:
                    var2['title'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var34['onViewAllSelected'] = var46;
            var37 = var41.bind(var4)(var37, var34);
            var34 = new Array(4);
            var34[0] = var37;
            var41 = _closure1_slot20;
            var37 = 67;
            var37 = var45[var37];
            var40 = var40.bind(var4)(var37);
            var37 = {};
            var37['items'] = var44;
            var37['onAppSelected'] = var43;
            var42 = function onViewAllSelected() {
                _fun0051: for(var _fun0051_ip = 0; ; ) switch(_fun0051_ip) {
 0:
                    var3 = _closure2_slot19;
                    var2 = var3.find;
                    var1 = function(arg1) {
                        var1 = arg1;
                        var2 = var1.type;
                        var4 = _closure1_slot0;
                        var3 = _closure1_slot3;
                        var1 = 44;
                        var3 = var3[var1];
                        var1 = undefined;
                        var1 = var4.bind(var1)(var3);
                        var1 = var1.AppLauncherHomeListItemType;
                        var1 = var1.VIEW_ALL;
                        var1 = var2 === var1;
                        return var1;
                    };
                    var3 = var2.bind(var3)(var1);
                    var2 = null;
                    var4 = var2 == var3;
                    var1 = undefined;
                    var7 = undefined;
                    if(var4) { _fun0051_ip = 71; continue _fun0051 }
 39:
                    var8 = var3.applications;
                    var3 = var2 == var8;
                    var7 = undefined;
                    if(var3) { _fun0051_ip = 71; continue _fun0051 }
 54:
                    var4 = var8.map;
                    var3 = function(arg1) {
                        var1 = arg1;
                        return var1;
                    };
                    var7 = var4.bind(var8)(var3);
 71:
                    if(!(var2 != var7)) { _fun0051_ip = 304; continue _fun0051 }
 78:
                    var8 = _closure1_slot0;
                    var9 = _closure1_slot3;
                    var2 = 23;
                    var2 = var9[var2];
                    var4 = var8.bind(var1)(var2);
                    var3 = var4.handleViewAllSelected;
                    var2 = {};
                    var10 = 29;
                    var10 = var9[var10];
                    var10 = var8.bind(var1)(var10);
                    var10 = var10.ApplicationCommandTriggerLocations;
                    var10 = var10.APP_LAUNCHER_HOME;
                    var2['location'] = var10;
                    var10 = _closure2_slot2;
                    var2['navigation'] = var10;
                    var6 = _closure2_slot0;
                    var2['context'] = var6;
                    var6 = 37;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.AppLauncherSectionName;
                    var6 = var6.APPS_IN_THIS_SERVER;
                    var2['sectionName'] = var6;
                    var2['applications'] = var7;
                    var6 = 49;
                    var6 = var9[var6];
                    var6 = var8.bind(var1)(var6);
                    var6 = var6.SectionItemType;
                    var6 = var6.APPS;
                    var2['sectionItemType'] = var6;
                    var6 = new Array(0);
                    var2['commands'] = var6;
                    var6 = var7.map;
                    var5 = function(arg1) {
                        var3 = _closure1_slot0;
                        var2 = _closure1_slot3;
                        var1 = 50;
                        var2 = var2[var1];
                        var1 = undefined;
                        var3 = var3.bind(var1)(var2);
                        var2 = var3.getApplicationCommandSection;
                        var1 = arg1;
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    };
                    var5 = var6.bind(var7)(var5);
                    var2['sectionDescriptors'] = var5;
                    var5 = 17;
                    var6 = var9[var5];
                    var6 = var8.bind(var1)(var6);
                    var7 = var6.intl;
                    var6 = var7.string;
                    var5 = var9[var5];
                    var5 = var8.bind(var1)(var5);
                    var5 = var5.t;
                    var5 = var5.oJyzCg;
                    var5 = var6.bind(var7)(var5);
                    var2['title'] = var5;
                    var2 = var3.bind(var4)(var2);
 304:
                    return var1;
                }
            };
            var37['onViewAllSelected'] = var42;
            var37 = var41.bind(var4)(var40, var37);
            var34[1] = var37;
            var37 = null;
            if(!var39) { _fun0019_ip = 2280; continue _fun0019 }
 2243:
            var37 = null;
            if(!var38) { _fun0019_ip = 2280; continue _fun0019 }
 2248:
            var40 = _closure1_slot20;
            var39 = _closure1_slot1;
            var41 = _closure1_slot3;
            var38 = 68;
            var38 = var41[var38];
            var39 = var39.bind(var4)(var38);
            var38 = {};
            var37 = var40.bind(var4)(var39, var38);
 2280:
            var34[2] = var37;
            var35 = null;
            if(!var36) { _fun0019_ip = 2321; continue _fun0019 }
 2289:
            var38 = _closure1_slot20;
            var37 = _closure1_slot1;
            var39 = _closure1_slot3;
            var36 = 69;
            var36 = var39[var36];
            var37 = var37.bind(var4)(var36);
            var36 = {};
            var35 = var38.bind(var4)(var37, var36);
 2321:
            var34[3] = var35;
            var31['children'] = var34;
            var31 = var33.bind(var4)(var32, var31);
            var6['ListHeaderComponent'] = var31;
            var6['contentContainerStyle'] = var30;
            var6['scrollIndicatorInsets'] = var29;
            var6['renderItem'] = var28;
            var6['getItemType'] = var27;
            var6['data'] = var26;
            var6['estimatedItemSize'] = var25;
            var6['preserveScrollMomentum'] = var24;
            var6['automaticallyAdjustsScrollIndicatorInsets'] = var23;
            var24 = 'on-drag';
            var6['keyboardDismissMode'] = var24;
            var24 = 'always';
            var6['keyboardShouldPersistTaps'] = var24;
            var6['showsVerticalScrollIndicator'] = var23;
            var6['viewabilityConfigCallbackPairs'] = var22;
            var6['bottomViewabilityInsetRef'] = var21;
            var22 = _closure1_slot0;
            var21 = _closure1_slot3;
            var21 = var21[var13];
            var21 = var22.bind(var4)(var21);
            var21 = var21.AppLauncherEntrypoint;
            var21 = var21.VOICE;
            if(!(var8 === var21)) { _fun0019_ip = 2453; continue _fun0019 }
 2447:
            var20 = var14.scrollerRef;
 2453:
            var6['ref'] = var20;
            var6['onScroll'] = var17;
            var20 = var14.onScroll;
            var6['animatedOnScroll'] = var20;
            var20 = var14.gestureRef;
            var6['simultaneousHandlers'] = var20;
            var14 = var14.animatedProps;
            var6['animatedProps'] = var14;
            var6 = var15.bind(var4)(var9, var6);
            _fun0019_ip = 2560; continue _fun0019;
 2503:
            var14 = _closure1_slot0;
            var20 = _closure1_slot3;
            var9 = 65;
            var9 = var20[var9];
            var9 = var14.bind(var4)(var9);
            var14 = var9.SearchLocalAndGlobalContentView;
            var9 = {};
            var9['ref'] = var19;
            var9['context'] = var18;
            var9['onScroll'] = var17;
            var9['onSend'] = var16;
            var9['entrypoint'] = var8;
            var6 = var15.bind(var4)(var14, var9);
 2560:
            var5[2] = var6;
            var9 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var13];
            var6 = var9.bind(var4)(var6);
            var6 = var6.AppLauncherEntrypoint;
            var6 = var6.TEXT;
            var6 = var8 === var6;
            if(!var6) { _fun0019_ip = 2647; continue _fun0019 }
 2600:
            var9 = _closure1_slot20;
            var8 = _closure1_slot1;
            var13 = _closure1_slot3;
            var7 = 70;
            var7 = var13[var7];
            var8 = var8.bind(var4)(var7);
            var7 = {};
            var7['windowDimensions'] = var12;
            var7['visible'] = var11;
            var7['markAsDismissed'] = var10;
            var6 = var9.bind(var4)(var8, var7);
 2647:
            var5[3] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['BaseAppRow'] = var2;
    return var1;
})();