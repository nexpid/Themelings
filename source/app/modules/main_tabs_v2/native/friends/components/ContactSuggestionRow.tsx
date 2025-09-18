// app/modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
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
    var8 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var8);
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var7 = var4.AnalyticEvents;
    var _closure1_slot5 = var7;
    var7 = var4.InstantInviteSources;
    var _closure1_slot6 = var7;
    var4 = var4.RelationshipTypes;
    var _closure1_slot7 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'add';
    var4['ADD'] = var7;
    var _closure1_slot9 = var4;
    var4 = 14;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/main_tabs_v2/native/friends/components/ContactSuggestionRow.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function ContactSuggestionRow(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var6 = arg1;
            var11 = var6.suggestedFriend;
            var _closure2_slot0 = var11;
            var3 = var6.added;
            var _closure2_slot1 = var3;
            var1 = var6.onAddSuggestion;
            var _closure2_slot2 = var1;
            var5 = {'suggestedFriend': 0, 'added': 0, 'onAddSuggestion': 0};
            var17 = null;
            var21 = var5;
            var20 = null;
            var2 = silentSetPrototypeOf(var21, var20);
            var2 = 0;
            var21 = {};
            var20 = var6;
            var19 = var5;
            var7 = copyDataProperties(var21, var20, var19);
            var _closure2_slot3 = var7;
            var4 = undefined;
            var _closure2_slot4 = var4;
            var5 = var11.friendSuggestionName;
            if(!(var17 != var5)) { _fun0001_ip = 109; continue _fun0001 }
 94:
            var5 = var11.friendSuggestionName;
            var5 = var5.length;
            if(!(!(var5 > var2))) { _fun0001_ip = 150; continue _fun0001 }
 109:
            var6 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 4;
            var5 = var8[var5];
            var8 = var6.bind(var4)(var5);
            var6 = var8.getName;
            var5 = var11.user;
            var13 = var6.bind(var8)(var5);
            _fun0001_ip = 156; continue _fun0001;
 150:
            var13 = var11.friendSuggestionName;
 156:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var10 = 5;
            var10 = var8[var10];
            var14 = var6.bind(var4)(var10);
            var12 = var14.useSharedValue;
            var10 = false;
            var10 = var12.bind(var14)(var10);
            _closure2_slot4 = var10;
            var12 = _closure1_slot3;
            var16 = var12.useEffect;
            var15 = new Array(2);
            var15[0] = var3;
            var15[1] = var10;
            var14 = function() {
                var3 = _closure2_slot4;
                var2 = var3.set;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var14 = var16.bind(var12)(var14, var15);
            var15 = var12.useMemo;
            var14 = new Array(1);
            var14[0] = var3;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var1 = _closure2_slot1;
                    if(var1) { _fun0002_ip = 100; continue _fun0002 }
 10:
                    var2 = {};
                    var3 = _closure1_slot9;
                    var3 = var3.ADD;
                    var2['name'] = var3;
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var1 = 6;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var6.bind(var5)(var3);
                    var4 = var3.intl;
                    var3 = var4.string;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.t;
                    var1 = var1.ed99+v;
                    var1 = var3.bind(var4)(var1);
                    var2['label'] = var1;
                    var1 = new Array(1);
                    var1[0] = var2;
                    _fun0002_ip = 104; continue _fun0002;
 100:
                    var1 = new Array(0);
 104:
                    return var1;
                }
            };
            var16 = var15.bind(var12)(var3, var14);
            var3 = 7;
            var3 = var8[var3];
            var14 = var6.bind(var4)(var3);
            var8 = var14.useStateFromStores;
            var3 = _closure1_slot4;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var8 = var8.bind(var14)(var6, var3);
            var6 = var12.useCallback;
            var3 = new Array(3);
            var3[0] = var10;
            var3[1] = var1;
            var1 = var11.user;
            var3[2] = var1;
            var1 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var1 = arg1;
                    var1 = var1.nativeEvent;
                    var3 = var1.actionName;
                    var1 = _closure1_slot9;
                    var1 = var1.ADD;
                    if(!(var3 !== var1)) { _fun0003_ip = 36; continue _fun0003 }
 32:
                    var1 = undefined;
                    return var1;
 36:
                    var5 = _closure2_slot4;
                    var4 = var5.set;
                    var3 = true;
                    var3 = var4.bind(var5)(var3);
                    var5 = _closure2_slot2;
                    var1 = _closure2_slot0;
                    var3 = var1.user;
                    var4 = undefined;
                    var3 = var5.bind(var4)(var3);
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 8;
                    var2 = var5[var2];
                    var3 = var3.bind(var4)(var2);
                    var2 = var3.addContactSuggestion;
                    var1 = var1.user;
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var15 = var6.bind(var12)(var1, var3);
            var3 = var17 == var11;
            var1 = undefined;
            if(var3) { _fun0001_ip = 351; continue _fun0001 }
 345:
            var1 = var11.mutualFriendsCount;
 351:
            var12 = var17 != var1;
            if(!var12) { _fun0001_ip = 377; continue _fun0001 }
 358:
            var3 = var17 == var11;
            var1 = undefined;
            if(var3) { _fun0001_ip = 373; continue _fun0001 }
 367:
            var1 = var11.mutualFriendsCount;
 373:
            var12 = var1 > var2;
 377:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 9;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var2.getSuggestedContactNameForSuggestion;
            var18 = var1.bind(var2)(var13, var11);
            if(!(var17 == var18)) { _fun0001_ip = 451; continue _fun0001 }
 413:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getUserTag;
            var1 = var11.user;
            var6 = var2.bind(var3)(var1);
            _fun0001_ip = 517; continue _fun0001;
 451:
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 4;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getUserTag;
            var1 = var11.user;
            var14 = var2.bind(var3)(var1);
            var1 = global;
            var1 = var1.HermesInternal;
            var3 = var1.concat;
            var2 = '';
            var1 = ' · ';
            var6 = var3.bind(var2)(var14, var1, var18);
 517:
            var3 = _closure1_slot8;
            var2 = _closure1_slot1;
            var14 = _closure1_slot2;
            var1 = 10;
            var1 = var14[var1];
            var2 = var2.bind(var4)(var1);
            var1 = {};
            var21 = var1;
            var20 = var7;
            var7 = copyDataProperties(var21, var20);
            var18 = var11.user;
            var7 = 'user';
            var1[var7] = var18;
            var7 = _closure1_slot7;
            var18 = var7.SUGGESTION;
            var7 = 'type';
            var1[var7] = var18;
            var7 = 'accessibilityActions';
            var1[var7] = var16;
            var7 = 'onAccessibilityAction';
            var1[var7] = var15;
            var15 = 1;
            var7 = 'labelLineClamp';
            var1[var7] = var15;
            var7 = 'subLabelLineClamp';
            var1[var7] = var15;
            var7 = 'label';
            var1[var7] = var13;
            var13 = _closure1_slot0;
            var7 = 11;
            var7 = var14[var7];
            var7 = var13.bind(var4)(var7);
            var13 = var7.ActionStatusSubLabel;
            var7 = {};
            var7['actioned'] = var10;
            var7['label'] = var6;
            var6 = undefined;
            if(!var12) { _fun0001_ip = 750; continue _fun0001 }
 672:
            var14 = _closure1_slot0;
            var18 = _closure1_slot2;
            var12 = 6;
            var15 = var18[var12];
            var15 = var14.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.formatToPlainString;
            var12 = var18[var12];
            var12 = var14.bind(var4)(var12);
            var12 = var12.t;
            var14 = var12.z7y34e;
            var12 = {};
            var18 = var17 == var11;
            var17 = undefined;
            if(var18) { _fun0001_ip = 739; continue _fun0001 }
 733:
            var17 = var11.mutualFriendsCount;
 739:
            var12['count'] = var17;
            var6 = var15.bind(var16)(var14, var12);
 750:
            var7['secondaryLabel'] = var6;
            var6 = _closure1_slot0;
            var12 = _closure1_slot2;
            var14 = 6;
            var15 = var12[var14];
            var15 = var6.bind(var4)(var15);
            var16 = var15.intl;
            var15 = var16.string;
            var14 = var12[var14];
            var14 = var6.bind(var4)(var14);
            var14 = var14.t;
            var14 = var14.Kzyxm5;
            var14 = var15.bind(var16)(var14);
            var7['actionStatus'] = var14;
            var14 = !var8;
            var7['animate'] = var14;
            var13 = var3.bind(var4)(var13, var7);
            var7 = 'subLabel';
            var1[var7] = var13;
            var7 = _closure1_slot8;
            var5 = 12;
            var5 = var12[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.ContactSuggestionActions;
            var5 = {};
            var11 = var11.user;
            var5['user'] = var11;
            var5['added'] = var10;
            var9 = function onAddSuggestion(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var3 = arg1;
                    var4 = _closure1_slot1;
                    var2 = _closure1_slot2;
                    var1 = 13;
                    var2 = var2[var1];
                    var1 = undefined;
                    var7 = var4.bind(var1)(var2);
                    var6 = var7.track;
                    var2 = _closure1_slot5;
                    var5 = var2.FRIEND_SUGGESTION_ADDED;
                    var4 = {};
                    var2 = var3.id;
                    var4['suggested_user_id'] = var2;
                    var8 = _closure2_slot0;
                    var8 = var8.source;
                    var4['suggestion_source'] = var8;
                    var8 = _closure2_slot3;
                    var8 = var8.location;
                    var10 = null;
                    if(!(var10 == var8)) { _fun0004_ip = 97; continue _fun0004 }
 87:
                    var9 = _closure1_slot6;
                    var8 = var9.ADD_FRIENDS_MODAL;
 97:
                    var4['location'] = var8;
                    var4 = var6.bind(var7)(var5, var4);
                    var2 = _closure2_slot2;
                    var2 = var2.bind(var1)(var3);
                    return var1;
                }
            };
            var5['onAddSuggestion'] = var9;
            var8 = !var8;
            var5['animate'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = 'trailing';
            var1[var5] = var6;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['ContactSuggestionRow'] = var2;
    return var1;
})();