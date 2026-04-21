// app/modules/in_app_notifications/native/MessageNotificationAccessory.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
    var1 = function ReactionAccessory(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var14 = var1.reaction;
            var1 = _closure1_slot7;
            var4 = undefined;
            var8 = var1.bind(var4)();
            var15 = _closure1_slot0;
            var9 = _closure1_slot2;
            var1 = 7;
            var1 = var9[var1];
            var6 = var15.bind(var4)(var1);
            var5 = var6.useStateFromStores;
            var1 = _closure1_slot4;
            var3 = new Array(1);
            var3[0] = var1;
            var1 = function() {
                var1 = _closure1_slot4;
                var1 = var1.useReducedMotion;
                return var1;
            };
            var13 = var5.bind(var6)(var3, var1);
            var1 = 8;
            var3 = var9[var1];
            var6 = var15.bind(var4)(var3);
            var5 = var6.useSharedValue;
            var3 = false;
            var10 = var5.bind(var6)(var3);
            var _closure2_slot0 = var10;
            var6 = _closure1_slot1;
            var3 = 9;
            var3 = var9[var3];
            var5 = var6.bind(var4)(var3);
            var3 = function() {
                var3 = _closure2_slot0;
                var2 = var3.set;
                var1 = true;
                var1 = var2.bind(var3)(var1);
                var1 = undefined;
                return var1;
            };
            var3 = var5.bind(var4)(var3);
            var3 = var9[var1];
            var5 = var15.bind(var4)(var3);
            var3 = var5.useAnimatedStyle;
            var2 = function f() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var5 = {};
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var7 = 10;
                    var3 = var3[var7];
                    var6 = undefined;
                    var10 = var4.bind(var6)(var3);
                    var9 = var10.withSpring;
                    var8 = _closure2_slot0;
                    var4 = var8.get;
                    var4 = var4.bind(var8)();
                    var8 = 0.9;
                    if(!var4) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var8 = 1;
case 2:
                    var4 = _closure1_slot8;
                    var4 = var9.bind(var10)(var8, var4);
                    var5['scale'] = var4;
                    var4 = new Array(1);
                    var4[0] = var5;
                    var1['transform'] = var4;
                    var5 = _closure1_slot0;
                    var4 = _closure1_slot2;
                    var4 = var4[var7];
                    var5 = var5.bind(var6)(var4);
                    var4 = var5.withSpring;
                    var6 = _closure2_slot0;
                    var3 = var6.get;
                    var6 = var3.bind(var6)();
                    var3 = 0;
                    if(!var6) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var3 = 1;
case 4:
                    var2 = _closure1_slot8;
                    var2 = var4.bind(var5)(var3, var2);
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var7 = {};
            var11 = 10;
            var11 = var9[var11];
            var11 = var15.bind(var4)(var11);
            var11 = var11.withSpring;
            var7['withSpring'] = var11;
            var7['animatedState'] = var10;
            var10 = _closure1_slot8;
            var7['SPRING_CONFIG'] = var10;
            var2['__closure'] = var7;
            var7 = 4436336007122.0;
            var2['__workletHash'] = var7;
            var7 = _closure1_slot9;
            var2['__initData'] = var7;
            var7 = var3.bind(var5)(var2);
            var3 = _closure1_slot6;
            var1 = var9[var1];
            var1 = var6.bind(var4)(var1);
            var2 = var1.View;
            var1 = {};
            var10 = var8.reactionContainer;
            var5 = new Array(2);
            var5[0] = var10;
            var5[1] = var7;
            var1['style'] = var5;
            var7 = _closure1_slot6;
            var5 = 11;
            var5 = var9[var5];
            var6 = var6.bind(var4)(var5);
            var5 = {};
            var9 = var8.emoji;
            var5['style'] = var9;
            var9 = var8.customEmoji;
            var5['fastImageStyle'] = var9;
            var8 = var8.textEmoji;
            var5['textEmojiStyle'] = var8;
            var8 = var14.id;
            var9 = null;
            var10 = var9 == var8;
            var8 = '';
            if(!var10) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var8 = var14.surrogates;
case 6:
            var5['name'] = var8;
            var8 = var14.id;
            if(!(var9 == var8)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var8 = var14.url;
            _fun0001_ip = 10; continue _fun0001;
case 8:
            var10 = _closure1_slot1;
            var11 = _closure1_slot2;
            var9 = 12;
            var9 = var11[var9];
            var11 = var10.bind(var4)(var9);
            var10 = var11.getEmojiURL;
            var9 = {};
            var15 = var14.id;
            var9['id'] = var15;
            var13 = !var13;
            if(!var13) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var13 = var14.animated;
case 11:
            var9['animated'] = var13;
            var12 = _closure1_slot5;
            var9['size'] = var12;
            var8 = var10.bind(var11)(var9);
case 10:
            var5['src'] = var8;
            var5 = var7.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var _closure1_slot10 = var1;
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
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.View;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.EMOJI_URL_BASE_SIZE;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot6 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'backgroundColor': null, 'borderColor': null, 'borderWidth': 1, 'borderRadius': null, 'paddingVertical': 4, 'paddingHorizontal': 8};
    var10 = 6;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REACTION_BACKGROUND_REACTED_DEFAULT;
    var9['backgroundColor'] = var12;
    var12 = var6[var10];
    var12 = var11.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.REACTION_BORDER_REACTED_DEFAULT;
    var9['borderColor'] = var12;
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.radii;
    var10 = var10.md;
    var9['borderRadius'] = var10;
    var4['reactionContainer'] = var9;
    var9 = {'width': 24, 'height': 24, 'alignItems': 'center', 'justifyContent': 'center'};
    var4['emoji'] = var9;
    var9 = {'width': 20, 'height': 20};
    var4['customEmoji'] = var9;
    var9 = {'marginLeft': 1, 'fontSize': 18, 'lineHeight': 25};
    var4['textEmoji'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot7 = var4;
    var4 = {'mass': 1, 'damping': 37, 'stiffness': 3000};
    var _closure1_slot8 = var4;
    var4 = {};
    var7 = 'function MessageNotificationAccessoryTsx1(){const{withSpring,animatedState,SPRING_CONFIG}=this.__closure;return{transform:[{scale:withSpring(animatedState.get()?1:0.9,SPRING_CONFIG)}],opacity:withSpring(animatedState.get()?1:0,SPRING_CONFIG)};}';
    var4['code'] = var7;
    var _closure1_slot9 = var4;
    var4 = 17;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/in_app_notifications/native/MessageNotificationAccessory.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function MessageNotificationAccessory(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var1 = arg1;
            var4 = var1.reaction;
            var10 = var1.onExpandPress;
            var1 = var1.expandedContentVisible;
            var3 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 13;
            var2 = var5[var2];
            var5 = undefined;
            var3 = var3.bind(var5)(var2);
            var2 = var3.useIsScreenReaderEnabled;
            var9 = var2.bind(var3)();
            if(var9) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var9 = !var1;
case 13:
            var1 = null;
            if(!(var1 != var4)) { _fun0003_ip = 15; continue _fun0003 }
case 16:
            var3 = _closure1_slot6;
            var2 = _closure1_slot10;
            var1 = {};
            var1['reaction'] = var4;
            var1 = var3.bind(var5)(var2, var1);
            _fun0003_ip = 17; continue _fun0003;
case 15:
            var4 = _closure1_slot6;
            var3 = _closure1_slot3;
            var2 = {};
            var6 = {};
            var7 = 0;
            if(!var9) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var7 = 1;
case 18:
            var6['opacity'] = var7;
            var2['style'] = var6;
            var8 = _closure1_slot6;
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 14;
            var6 = var13[var6];
            var6 = var12.bind(var5)(var6);
            var7 = var6.IconButton;
            var6 = {'variant': 'secondary', 'size': 'md'};
            var15 = _closure1_slot6;
            var11 = 15;
            var11 = var13[var11];
            var11 = var12.bind(var5)(var11);
            var14 = var11.ReactionPlusIcon;
            var11 = {};
            var16 = 'sm';
            var11['size'] = var16;
            var11 = var15.bind(var5)(var14, var11);
            var6['icon'] = var11;
            var6['onPress'] = var10;
            var9 = !var9;
            var6['disabled'] = var9;
            var9 = 8;
            var6['hitSlop'] = var9;
            var9 = 16;
            var10 = var13[var9];
            var10 = var12.bind(var5)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var9 = var13[var9];
            var9 = var12.bind(var5)(var9);
            var9 = var9.t;
            var9 = var9.IYLnQn;
            var9 = var10.bind(var11)(var9);
            var6['accessibilityLabel'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 17:
            return var1;
        }
    };
    var3['MessageNotificationAccessory'] = var2;
    return var1;
})();