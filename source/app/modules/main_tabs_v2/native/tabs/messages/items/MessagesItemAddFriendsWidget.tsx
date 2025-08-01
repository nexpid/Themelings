// app/modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = function getFriendInviteCode() {
        var1 = undefined;
        var4 = _closure1_slot11;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function _getFriendInviteCode() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0001_ip = 170; continue _fun0001 }
 10:
                    var8 = undefined;
                    var3 = undefined;
 14: // try_start_0
                    var5 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var4 = 9;
                    var4 = var6[var4];
                    var6 = var5.bind(var8)(var4);
                    var5 = var6.createFriendInvite;
                    var2 = _closure1_slot6;
                    var4 = var2.ADD_FRIENDS_WIDGET;
                    var2 = null;
                    var2 = var5.bind(var6)(var2, var4);
                    SaveGenerator(address=65);
 63:
                    return var2;
 65:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=3);
                    if(var4) { _fun0001_ip = 79; continue _fun0001 }
 71:
                    var3 = var2.code;
 76: // try_end0
                    return var3;
 79:
                    return var2;
 82: // catch_target0
                    CatchBlockStart(arg_register=1);
                    var7 = _closure1_slot0;
                    var9 = _closure1_slot2;
                    var2 = 10;
                    var2 = var9[var2];
                    var4 = var7.bind(var8)(var2);
                    var3 = var4.presentError;
                    var2 = 11;
                    var5 = var9[var2];
                    var5 = var7.bind(var8)(var5);
                    var6 = var5.intl;
                    var5 = var6.string;
                    var2 = var9[var2];
                    var2 = var7.bind(var8)(var2);
                    var2 = var2.t;
                    var2 = var2.R0RpRU;
                    var2 = var5.bind(var6)(var2);
                    var2 = var3.bind(var4)(var2);
                    var2 = undefined;
                    return var2;
 170:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot11 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot11 = var1;
    var1 = function handleShare() {
        var1 = undefined;
        var4 = _closure1_slot13;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot12 = var1;
    var1 = function _handleShare() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0002_ip = 166; continue _fun0002 }
 10:
                    var2 = _closure1_slot10;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=27);
 25:
                    return var2;
 27:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0002_ip = 163; continue _fun0002 }
 36:
                    var6 = _closure1_slot0;
                    var13 = _closure1_slot2;
                    var5 = 12;
                    var5 = var13[var5];
                    var8 = var6.bind(var3)(var5);
                    var7 = var8.handleOpenShareSheet;
                    var5 = 11;
                    var9 = var13[var5];
                    var9 = var6.bind(var3)(var9);
                    var10 = var9.intl;
                    var9 = var10.formatToPlainString;
                    var5 = var13[var5];
                    var5 = var6.bind(var3)(var5);
                    var5 = var5.t;
                    var6 = var5.PJf9Pz;
                    var5 = {};
                    var12 = _closure1_slot1;
                    var11 = 13;
                    var11 = var13[var11];
                    var11 = var12.bind(var3)(var11);
                    var11 = var11.bind(var3)(var2);
                    var5['link'] = var11;
                    var15 = var9.bind(var10)(var6, var5);
                    var4 = _closure1_slot6;
                    var14 = var4.ADD_FRIENDS_WIDGET;
                    var16 = null;
                    var18 = var8;
                    var17 = var2;
                    var4 = var18[var7](var17, var16, var15, var14, var13);
                    return var3;
 163:
                    return var2;
 166:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot13 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot13 = var1;
    var1 = function handleLink() {
        var1 = undefined;
        var4 = _closure1_slot15;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot14 = var1;
    var1 = function _handleLink() {
        var5 = undefined;
        var1 = undefined;
        var4 = _closure1_slot3;
        var3 = function* () {
            var1 = function* anon_0_() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    StartGenerator();
                    ResumeGenerator(result_out_reg=0, return_bool_out_reg=1);
                    if(var2) { _fun0003_ip = 81; continue _fun0003 }
 7:
                    var2 = _closure1_slot10;
                    var3 = undefined;
                    var2 = var2.bind(var3)();
                    SaveGenerator(address=24);
 22:
                    return var2;
 24:
                    ResumeGenerator(result_out_reg=1, return_bool_out_reg=4);
                    if(var5) { _fun0003_ip = 78; continue _fun0003 }
 30:
                    var6 = _closure1_slot0;
                    var7 = _closure1_slot2;
                    var5 = 12;
                    var5 = var7[var5];
                    var7 = var6.bind(var3)(var5);
                    var6 = var7.handleCopy;
                    var4 = _closure1_slot6;
                    var5 = var4.ADD_FRIENDS_WIDGET;
                    var4 = null;
                    var4 = var6.bind(var7)(var2, var4, var5);
                    return var3;
 78:
                    return var2;
 81:
                    return var1;
                }
            };
            return var1;
        };
        var4 = var4.bind(var5)(var3);
        _closure1_slot15 = var4;
        var3 = var4.apply;
        var1 = arguments;
        var2 = var1;
        var1 = this;
        var1 = var3.bind(var4)(var1, var2);
        return var1;
    };
    var _closure1_slot15 = var1;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var14 = 0;
    var2 = var7[var14];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var8 = var2.bind(var1)(var5);
    var _closure1_slot4 = var8;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.View;
    var _closure1_slot5 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var2 = var2.InstantInviteSources;
    var _closure1_slot6 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.jsx;
    var _closure1_slot7 = var5;
    var2 = var2.jsxs;
    var _closure1_slot8 = var2;
    var2 = 5;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var5 = var2.ICON_ACTION_BUTTON_SIZE;
    var12 = 6;
    var2 = var7[var12];
    var2 = var13.bind(var1)(var2);
    var2 = var2.spacing;
    var2 = var2.PX_16;
    var5 = var5 + var2;
    var15 = 7;
    var2 = var7[var15];
    var2 = var6.bind(var1)(var2);
    var2 = var2.MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT;
    var2 = var5 + var2;
    var5 = 8;
    var5 = var7[var5];
    var10 = var6.bind(var1)(var5);
    var9 = var10.createStyles;
    var5 = {};
    var11 = {'height': null, 'paddingHorizontal': null, 'paddingBottom': null, 'justifyContent': 'space-between', 'flexDirection': 'row', 'alignItems': 'center'};
    var11['height'] = var2;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.spacing;
    var16 = var16.PX_8;
    var11['paddingHorizontal'] = var16;
    var15 = var7[var15];
    var15 = var6.bind(var1)(var15);
    var15 = var15.MESSAGES_NEW_MESSAGE_WIDGET_HEIGHT;
    var11['paddingBottom'] = var15;
    var5['container'] = var11;
    var11 = {'flexDirection': 'row', 'alignItems': 'center'};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.radii;
    var15 = var15.md;
    var11['borderRadius'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11['paddingHorizontal'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_12;
    var11['paddingVertical'] = var15;
    var5['title'] = var11;
    var11 = {};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11['marginHorizontal'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11['width'] = var15;
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_16;
    var11['height'] = var15;
    var5['icon'] = var11;
    var11 = {'paddingHorizontal': null, 'flexDirection': 'row', 'justifyContent': 'flex-end'};
    var15 = var7[var12];
    var15 = var13.bind(var1)(var15);
    var15 = var15.spacing;
    var15 = var15.PX_8;
    var11['paddingHorizontal'] = var15;
    var5['actions'] = var11;
    var11 = {};
    var11['marginEnd'] = var14;
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.spacing;
    var12 = var12.PX_8;
    var11['marginStart'] = var12;
    var5['actionIcon'] = var11;
    var5 = var9.bind(var10)(var5);
    var _closure1_slot9 = var5;
    var5 = var8.memo;
    var4 = function MessagesItemAddFriendsWidget() {
        var1 = _closure1_slot9;
        var4 = undefined;
        var17 = var1.bind(var4)();
        var5 = _closure1_slot4;
        var3 = var5.useCallback;
        var2 = function() {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 14;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.getRootNavigationRef;
                var3 = var2.bind(var3)();
                var4 = null;
                var2 = var4 == var3;
                var5 = var3;
                if(var2) { _fun0004_ip = 59; continue _fun0004 }
 47:
                var3 = var3.current;
                var2 = var4 == var3;
                var5 = var3;
 59:
                if(var2) { _fun0004_ip = 110; continue _fun0004 }
 62:
                var4 = var5.navigate;
                var3 = {};
                var2 = 'add-friends';
                var3['screen'] = var2;
                var2 = {'sourcePage': 'Add Friends Widget', 'presentation': 'card'};
                var3['params'] = var2;
                var2 = 'friends';
                var2 = var4.bind(var5)(var2, var3);
 110:
                return var1;
            }
        };
        var1 = new Array(0);
        var7 = var3.bind(var5)(var2, var1);
        var3 = _closure1_slot8;
        var2 = _closure1_slot5;
        var1 = {};
        var5 = var17.container;
        var1['style'] = var5;
        var5 = false;
        var1['collapsable'] = var5;
        var10 = _closure1_slot7;
        var14 = _closure1_slot0;
        var15 = _closure1_slot2;
        var5 = 15;
        var5 = var15[var5];
        var5 = var14.bind(var4)(var5);
        var6 = var5.PressableHighlight;
        var5 = {};
        var11 = 11;
        var8 = var15[var11];
        var8 = var14.bind(var4)(var8);
        var13 = var8.intl;
        var9 = var13.string;
        var8 = var15[var11];
        var8 = var14.bind(var4)(var8);
        var8 = var8.t;
        var8 = var8.afcl6+;
        var8 = var9.bind(var13)(var8);
        var5['accessibilityLabel'] = var8;
        var5['onPress'] = var7;
        var7 = var17.title;
        var5['style'] = var7;
        var7 = 16;
        var7 = var15[var7];
        var7 = var14.bind(var4)(var7);
        var8 = var7.Text;
        var7 = {'variant': 'text-md/semibold', 'color': 'header-secondary', 'lineClamp': 1, 'maxFontSizeMultiplier': 2};
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var16 = var9.intl;
        var13 = var16.string;
        var9 = var15[var11];
        var9 = var14.bind(var4)(var9);
        var9 = var9.t;
        var9 = var9.afcl6+;
        var9 = var13.bind(var16)(var9);
        var7['children'] = var9;
        var7 = var10.bind(var4)(var8, var7);
        var5['children'] = var7;
        var6 = var10.bind(var4)(var6, var5);
        var5 = new Array(2);
        var5[0] = var6;
        var6 = {};
        var7 = var17.actions;
        var6['style'] = var7;
        var16 = _closure1_slot1;
        var8 = 5;
        var7 = var15[var8];
        var9 = var16.bind(var4)(var7);
        var7 = {};
        var13 = var17.actionIcon;
        var7['style'] = var13;
        var13 = 'filled';
        var7['variant'] = var13;
        var18 = 17;
        var18 = var15[var18];
        var18 = var16.bind(var4)(var18);
        var7['source'] = var18;
        var18 = _closure1_slot12;
        var7['onPress'] = var18;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var20 = var18.intl;
        var19 = var20.string;
        var18 = var15[var11];
        var18 = var14.bind(var4)(var18);
        var18 = var18.t;
        var18 = var18.Ej3B3d;
        var18 = var19.bind(var20)(var18);
        var7['accessibilityLabel'] = var18;
        var9 = var10.bind(var4)(var9, var7);
        var7 = new Array(2);
        var7[0] = var9;
        var8 = var15[var8];
        var9 = var16.bind(var4)(var8);
        var8 = {};
        var17 = var17.actionIcon;
        var8['style'] = var17;
        var8['variant'] = var13;
        var13 = 18;
        var13 = var15[var13];
        var13 = var16.bind(var4)(var13);
        var8['source'] = var13;
        var12 = _closure1_slot14;
        var8['onPress'] = var12;
        var12 = var15[var11];
        var12 = var14.bind(var4)(var12);
        var13 = var12.intl;
        var12 = var13.string;
        var11 = var15[var11];
        var11 = var14.bind(var4)(var11);
        var11 = var11.t;
        var11 = var11.WqhZsr;
        var11 = var12.bind(var13)(var11);
        var8['accessibilityLabel'] = var11;
        var8 = var10.bind(var4)(var9, var8);
        var7[1] = var8;
        var6['children'] = var7;
        var6 = var3.bind(var4)(var2, var6);
        var5[1] = var6;
        var1['children'] = var5;
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var4 = var5.bind(var8)(var4);
    var5 = 19;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/tabs/messages/items/MessagesItemAddFriendsWidget.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var3['MESSAGES_ITEM_ADD_FRIENDS_WIDGET_HEIGHT'] = var2;
    return var1;
})();