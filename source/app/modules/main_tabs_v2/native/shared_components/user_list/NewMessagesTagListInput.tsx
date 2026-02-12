// app/modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var5 = require;
        var13 = metroImportDefault;
        var3 = exports;
        var6 = dependencyMap;
        var _closure1_slot0 = var5;
        var _closure1_slot1 = var13;
        var _closure1_slot2 = var6;
        var1 = global;
        var8 = var1.Object;
        var7 = var8.defineProperty;
        var4 = {};
        var1 = true;
        var4['value'] = var1;
        var1 = '__esModule';
        var1 = var7.bind(var8)(var3, var1, var4);
        var14 = 0;
        var7 = var6[var14];
        var4 = metroImportAll;
        var1 = undefined;
        var7 = var4.bind(var1)(var7);
        var _closure1_slot3 = var7;
        var4 = 1;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var4 = var4.View;
        var _closure1_slot4 = var4;
        var15 = 2;
        var4 = var6[var15];
        var4 = var13.bind(var1)(var4);
        var _closure1_slot5 = var4;
        var4 = 3;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var9 = var4.jsx;
        var _closure1_slot6 = var9;
        var4 = 4;
        var4 = var6[var4];
        var10 = var5.bind(var1)(var4);
        var8 = var10.createStyles;
        var4 = {};
        var11 = {};
        var12 = 5;
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_16;
        var11['paddingHorizontal'] = var16;
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_8;
        var11['paddingBottom'] = var16;
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.colors;
        var16 = var16.BACKGROUND_BASE_LOWER;
        var11['backgroundColor'] = var16;
        var4['searchBarContainer'] = var11;
        var11 = {};
        var16 = var6[var12];
        var16 = var13.bind(var1)(var16);
        var16 = var16.spacing;
        var16 = var16.PX_12;
        var11['marginLeft'] = var16;
        var16 = 6;
        var16 = var6[var16];
        var17 = var5.bind(var1)(var16);
        var16 = var17.isAndroid;
        var16 = var16.bind(var17)();
        if(!var16) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var14 = var15;
case 2:
        var11['marginBottom'] = var14;
        var4['header'] = var11;
        var11 = {};
        var12 = var6[var12];
        var12 = var13.bind(var1)(var12);
        var12 = var12.spacing;
        var12 = var12.PX_12;
        var11['marginHorizontal'] = var12;
        var4['showSearchButton'] = var11;
        var4 = var8.bind(var10)(var4);
        var _closure1_slot7 = var4;
        var4 = 7;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.ChevronLargeRightIcon;
        var4 = {};
        var10 = 'xs';
        var4['size'] = var10;
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot8 = var4;
        var4 = 8;
        var4 = var6[var4];
        var4 = var5.bind(var1)(var4);
        var8 = var4.CirclePlusIcon;
        var4 = {};
        var4['size'] = var10;
        var4 = var9.bind(var1)(var8, var4);
        var _closure1_slot9 = var4;
        var4 = var7.memo;
        var2 = function NewMessagesTagListInput(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                var2 = arg1;
                var12 = var2.autoFocus;
                var14 = var2.onChangeText;
                var11 = var2.onFocus;
                var1 = var2.onSelectUser;
                var _closure2_slot0 = var1;
                var1 = var2.selectedUserIds;
                var _closure2_slot1 = var1;
                var15 = var2.hasQuery;
                var19 = var2.onForceSearchResults;
                var18 = var2.forceSearchResults;
                var7 = var2.tagListInputRef;
                var2 = _closure1_slot7;
                var4 = undefined;
                var9 = var2.bind(var4)();
                var5 = _closure1_slot3;
                var3 = var5.useMemo;
                var2 = new Array(1);
                var2[0] = var1;
                var1 = function() {
                    _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                        var3 = _closure2_slot1;
                        var2 = null;
                        if(!(var2 == var3)) { _fun0003_ip = 4; continue _fun0003 }
case 5:
                        var4 = new Array(0);
                        _fun0003_ip = 6; continue _fun0003;
case 4:
                        var4 = _closure2_slot1;
case 6:
                        var3 = var4.map;
                        var2 = _closure1_slot5;
                        var2 = var2.getUser;
                        var4 = var3.bind(var4)(var2);
                        var3 = var4.filter;
                        var7 = _closure1_slot0;
                        var6 = _closure1_slot2;
                        var2 = 9;
                        var2 = var6[var2];
                        var5 = undefined;
                        var2 = var7.bind(var5)(var2);
                        var2 = var2.isNotNullish;
                        var3 = var3.bind(var4)(var2);
                        var2 = var3.map;
                        var4 = _closure1_slot1;
                        var1 = 10;
                        var1 = var6[var1];
                        var1 = var4.bind(var5)(var1);
                        var1 = var2.bind(var3)(var1);
                        return var1;
                    }
                };
                var8 = var3.bind(var5)(var1, var2);
                var _closure2_slot2 = var8;
                var3 = _closure1_slot6;
                var2 = _closure1_slot4;
                var1 = {};
                var5 = var9.searchBarContainer;
                var1['style'] = var5;
                var6 = _closure1_slot1;
                var16 = _closure1_slot2;
                var5 = 11;
                var5 = var16[var5];
                var6 = var6.bind(var4)(var5);
                var5 = {};
                var5['autoFocus'] = var12;
                var12 = true;
                var5['focusOnAdd'] = var12;
                var12 = null;
                if(var15) { _fun0002_ip = 7; continue _fun0002 }
case 8:
                var17 = var8.length;
                var15 = 0;
                var15 = var17 > var15;
                var12 = null;
                if(!var15) { _fun0002_ip = 7; continue _fun0002 }
case 9:
                var17 = _closure1_slot6;
                var16 = _closure1_slot0;
                var20 = _closure1_slot2;
                var15 = 12;
                var15 = var20[var15];
                var15 = var16.bind(var4)(var15);
                var16 = var15.PressableOpacity;
                var15 = {};
                var20 = 'button';
                var15['accessibilityRole'] = var20;
                var21 = _closure1_slot0;
                var24 = _closure1_slot2;
                var20 = 13;
                var22 = var24[var20];
                var22 = var21.bind(var4)(var22);
                var23 = var22.intl;
                var22 = var23.string;
                var20 = var24[var20];
                var20 = var21.bind(var4)(var20);
                var21 = var20.t;
                if(var18) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                var20 = var21.fTcQm2;
                var20 = var22.bind(var23)(var20);
                _fun0002_ip = 12; continue _fun0002;
case 10:
                var21 = var21.4wv+DE;
                var20 = var22.bind(var23)(var21);
case 12:
                var15['accessibilityLabel'] = var20;
                var15['onPress'] = var19;
                var19 = var9.showSearchButton;
                var15['style'] = var19;
                if(var18) { _fun0002_ip = 13; continue _fun0002 }
case 14:
                var18 = _closure1_slot9;
                _fun0002_ip = 15; continue _fun0002;
case 13:
                var18 = _closure1_slot8;
case 15:
                var15['children'] = var18;
                var12 = var17.bind(var4)(var16, var15);
case 7:
                var5['footer'] = var12;
                var17 = _closure1_slot6;
                var12 = _closure1_slot0;
                var13 = _closure1_slot2;
                var15 = 14;
                var15 = var13[var15];
                var15 = var12.bind(var4)(var15);
                var16 = var15.Text;
                var15 = {'style': null, 'variant': 'text-sm/medium', 'color': 'text-muted', 'accessible': false};
                var9 = var9.header;
                var15['style'] = var9;
                var9 = 13;
                var18 = var13[var9];
                var18 = var12.bind(var4)(var18);
                var20 = var18.intl;
                var19 = var20.string;
                var18 = var13[var9];
                var18 = var12.bind(var4)(var18);
                var18 = var18.t;
                var18 = var18.kHyiXs;
                var18 = var19.bind(var20)(var18);
                var15['children'] = var18;
                var15 = var17.bind(var4)(var16, var15);
                var5['icon'] = var15;
                var5['onChangeText'] = var14;
                var5['onFocus'] = var11;
                var10 = function onRemove(arg1) {
                    _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                        var3 = _closure2_slot2;
                        var1 = arg1;
                        var7 = var3[var1];
                        var5 = _closure1_slot5;
                        var4 = var5.getUser;
                        var3 = var7.id;
                        var3 = var4.bind(var5)(var3);
                        var4 = null;
                        if(!(var4 != var3)) { _fun0004_ip = 16; continue _fun0004 }
case 17:
                        var2 = _closure2_slot0;
                        var8 = undefined;
                        var2 = var2.bind(var8)(var3);
                        var4 = _closure1_slot0;
                        var9 = _closure1_slot2;
                        var1 = 15;
                        var1 = var9[var1];
                        var1 = var4.bind(var8)(var1);
                        var3 = var1.AccessibilityAnnouncer;
                        var2 = var3.announce;
                        var1 = 13;
                        var5 = var9[var1];
                        var5 = var4.bind(var8)(var5);
                        var6 = var5.intl;
                        var5 = var6.formatToPlainString;
                        var1 = var9[var1];
                        var1 = var4.bind(var8)(var1);
                        var1 = var1.t;
                        var4 = var1.srlxB8;
                        var1 = {};
                        var7 = var7.text;
                        var1['text'] = var7;
                        var1 = var5.bind(var6)(var4, var1);
                        var1 = var2.bind(var3)(var1);
case 16:
                        var1 = undefined;
                        return var1;
                    }
                };
                var5['onRemove'] = var10;
                var10 = var13[var9];
                var10 = var12.bind(var4)(var10);
                var11 = var10.intl;
                var10 = var11.string;
                var9 = var13[var9];
                var9 = var12.bind(var4)(var9);
                var9 = var9.t;
                var9 = var9.CaEER6;
                var9 = var10.bind(var11)(var9);
                var5['placeholder'] = var9;
                var5['tags'] = var8;
                var5['ref'] = var7;
                var5 = var3.bind(var4)(var6, var5);
                var1['children'] = var5;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            }
        };
        var2 = var4.bind(var7)(var2);
        var4 = 16;
        var4 = var6[var4];
        var6 = var5.bind(var1)(var4);
        var5 = var6.fileFinishedImporting;
        var4 = 'modules/main_tabs_v2/native/shared_components/user_list/NewMessagesTagListInput.tsx';
        var4 = var5.bind(var6)(var4);
        var3['default'] = var2;
        return var1;
    }
})();