// app/modules/user_profile/hooks/native/useProfileSectionTabs.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
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
    var4 = metroImportDefault;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot0 = var4;
    var4 = 1;
    var7 = var6[var4];
    var4 = metroImportAll;
    var4 = var4.bind(var1)(var7);
    var _closure1_slot1 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.UserProfileSections;
    var _closure1_slot2 = var4;
    var4 = 3;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/user_profile/hooks/native/useProfileSectionTabs.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function useProfileTabIndices(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var4 = arg1;
            var1 = {};
            var2 = -1;
            var3 = var2;
            if(!var4) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = 1;
case 2:
            var1['boardTabIndex'] = var3;
            var3 = arg2;
            if(!var3) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = 1;
            if(!var4) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var3 = 2;
case 6:
            var2 = var3;
case 4:
            var1['wishlistTabIndex'] = var2;
            return var1;
        }
    };
    var3['useProfileTabIndices'] = var4;
    var2 = function useProfileSectionTabs(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var2 = arg1;
            var3 = var2.initialUserProfileSection;
            var _closure2_slot0 = var3;
            var10 = var2.wishlistTabIndex;
            var _closure2_slot1 = var10;
            var9 = var2.boardTabIndex;
            var _closure2_slot2 = var9;
            var3 = var2.onTabChange;
            var _closure2_slot3 = var3;
            var11 = undefined;
            var _closure2_slot5 = var11;
            var6 = _closure1_slot1;
            var5 = var6.useState;
            var2 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2.WISHLIST;
                    if(!(var2 !== var3)) { _fun0003_ip = 8; continue _fun0003 }
case 9:
                    var2 = _closure1_slot2;
                    var2 = var2.WIDGETS;
                    if(!(var2 !== var3)) { _fun0003_ip = 10; continue _fun0003 }
case 11:
                    var2 = _closure1_slot2;
                    var2 = var2.MAIN;
                    return var2;
case 10:
                    var2 = _closure1_slot2;
                    var2 = var2.WIDGETS;
                    return var2;
case 8:
                    var1 = _closure1_slot2;
                    var1 = var1.WISHLIST;
                    return var1;
                }
            };
            var6 = var5.bind(var6)(var2);
            var5 = _closure1_slot0;
            var2 = 2;
            var7 = var5.bind(var11)(var6, var2);
            var2 = 0;
            var6 = var7[var2];
            var5 = 1;
            var5 = var7[var5];
            var _closure2_slot4 = var5;
            var7 = _closure1_slot2;
            var7 = var7.WISHLIST;
            if(!(var7 !== var6)) { _fun0002_ip = 12; continue _fun0002 }
case 13:
            var7 = _closure1_slot2;
            var7 = var7.WIDGETS;
            if(!(var7 !== var6)) { _fun0002_ip = 14; continue _fun0002 }
case 15:
            var7 = _closure1_slot2;
            var8 = var7.MAIN;
            var7 = undefined;
            if(!(var8 === var6)) { _fun0002_ip = 16; continue _fun0002 }
case 17:
            var7 = 0;
            _fun0002_ip = 16; continue _fun0002;
case 14:
            var7 = var9;
            _fun0002_ip = 16; continue _fun0002;
case 12:
            var7 = var10;
case 16:
            if(!(var7 < var2)) { _fun0002_ip = 18; continue _fun0002 }
case 19:
            var8 = _closure1_slot2;
            var8 = var8.MAIN;
            var8 = var5.bind(var11)(var8);
case 18:
            var8 = var7 >= var2;
            var2 = 0;
            if(!var8) { _fun0002_ip = 20; continue _fun0002 }
case 21:
            var2 = var7;
case 20:
            _closure2_slot5 = var2;
            var8 = _closure1_slot1;
            var7 = var8.useCallback;
            var4 = new Array(3);
            var4[0] = var10;
            var4[1] = var9;
            var4[2] = var3;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = arg1;
                    var1 = _closure2_slot1;
                    if(!(var1 !== var3)) { _fun0004_ip = 22; continue _fun0004 }
case 23:
                    var1 = _closure2_slot2;
                    if(!(var1 !== var3)) { _fun0004_ip = 7; continue _fun0004 }
case 24:
                    var1 = _closure1_slot2;
                    var3 = var1.MAIN;
                    _fun0004_ip = 25; continue _fun0004;
case 7:
                    var1 = _closure1_slot2;
                    var3 = var1.WIDGETS;
                    _fun0004_ip = 25; continue _fun0004;
case 22:
                    var1 = _closure1_slot2;
                    var3 = var1.WISHLIST;
case 25:
                    var4 = _closure2_slot4;
                    var1 = undefined;
                    var4 = var4.bind(var1)(var3);
                    var5 = _closure2_slot3;
                    var4 = null;
                    if(!(var4 != var5)) { _fun0004_ip = 26; continue _fun0004 }
case 27:
                    var2 = _closure2_slot3;
                    var2 = var2.bind(var1)(var3);
case 26:
                    return var1;
                }
            };
            var4 = var7.bind(var8)(var3, var4);
            var7 = var8.useCallback;
            var3 = new Array(1);
            var3[0] = var2;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var5 = arg1;
                    var2 = var5.activeIndex;
                    var1 = var2.get;
                    var3 = var1.bind(var2)();
                    var2 = _closure2_slot5;
                    if(!(var3 !== var2)) { _fun0005_ip = 10; continue _fun0005 }
case 28:
                    var4 = var5.setActiveIndex;
                    var3 = _closure2_slot5;
                    var2 = false;
                    var1 = true;
                    var1 = var4.bind(var5)(var3, var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var7.bind(var8)(var1, var3);
            var1 = {};
            var1['activeProfileTabSection'] = var6;
            var1['setActiveProfileTabSection'] = var5;
            var1['handleTabChange'] = var4;
            var1['restoreActiveIndex'] = var3;
            var1['activeProfileTabSectionIndex'] = var2;
            return var1;
        }
    };
    var3['useProfileSectionTabs'] = var2;
    return var1;
})();