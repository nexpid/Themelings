// app/modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var13;
    var _closure1_slot2 = var7;
    var1 = global;
    var8 = var1.Object;
    var5 = var8.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var5.bind(var8)(var3, var1, var2);
    var1 = 0;
    var2 = var7[var1];
    var1 = undefined;
    var2 = var13.bind(var1)(var2);
    var _closure1_slot3 = var2;
    var2 = 1;
    var5 = var7[var2];
    var2 = metroImportAll;
    var5 = var2.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var2 = 2;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var14 = var2.StyleSheet;
    var _closure1_slot5 = var14;
    var2 = var2.View;
    var _closure1_slot6 = var2;
    var2 = 3;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.getIsChannelDetailsSearchActive;
    var _closure1_slot7 = var8;
    var2 = var2.setIsChannelDetailsSearchActive;
    var _closure1_slot8 = var2;
    var2 = 4;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var11 = var2.MIDNIGHT_BORDER_WIDTH;
    var _closure1_slot9 = var11;
    var15 = 5;
    var2 = var7[var15];
    var2 = var6.bind(var1)(var2);
    var8 = var2.AnalyticEvents;
    var _closure1_slot10 = var8;
    var8 = var2.ComponentActions;
    var _closure1_slot11 = var8;
    var2 = var2.ThemeTypes;
    var _closure1_slot12 = var2;
    var2 = 6;
    var2 = var7[var2];
    var2 = var6.bind(var1)(var2);
    var8 = var2.jsx;
    var _closure1_slot13 = var8;
    var2 = var2.jsxs;
    var _closure1_slot14 = var2;
    var2 = 7;
    var2 = var7[var2];
    var9 = var13.bind(var1)(var2);
    var2 = var9.prototype;
    var8 = Object.create(var2, {constructor: {value: var9}});
    var20 = 'SwipeForMemberListWrapper';
    var21 = var8;
    var2 = new var21[var9](var20, var19);
    var2 = var2 instanceof Object ? var2 : var8;
    var _closure1_slot15 = var2;
    var2 = var5.createContext;
    var2 = var2.bind(var5)(var1);
    var _closure1_slot16 = var2;
    var5 = 8;
    var5 = var7[var5];
    var9 = var6.bind(var1)(var5);
    var8 = var9.createStyles;
    var5 = {};
    var10 = {'flex': 1, 'justifyContent': 'center', 'alignItems': 'flex-start', 'overflow': 'hidden'};
    var17 = 'hidden';
    var12 = 9;
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.BG_BASE_PRIMARY;
    var10['backgroundColor'] = var16;
    var5['memberListPreview'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var16 = copyDataProperties(var20, var19);
    var16 = 'overflow';
    var10[var16] = var17;
    var5['content'] = var10;
    var10 = {'flex': 1, 'overflow': 'hidden'};
    var16 = var7[var12];
    var16 = var13.bind(var1)(var16);
    var16 = var16.colors;
    var16 = var16.MODAL_BACKGROUND;
    var10['backgroundColor'] = var16;
    var5['memberListContainer'] = var10;
    var10 = {};
    var19 = var14.absoluteFillObject;
    var20 = var10;
    var14 = copyDataProperties(var20, var19);
    var14 = 'zIndex';
    var10[var14] = var15;
    var14 = var7[var12];
    var14 = var13.bind(var1)(var14);
    var14 = var14.colors;
    var15 = var14.BG_BACKDROP;
    var14 = 'backgroundColor';
    var10[var14] = var15;
    var5['contentTint'] = var10;
    var10 = {};
    var12 = var7[var12];
    var12 = var13.bind(var1)(var12);
    var12 = var12.colors;
    var12 = var12.BORDER_STRONG;
    var10['borderLeftColor'] = var12;
    var10['borderLeftWidth'] = var11;
    var5['midnightBorder'] = var10;
    var10 = {};
    var11 = -var11;
    var10['right'] = var11;
    var5['midnightRightOverflow'] = var10;
    var5 = var8.bind(var9)(var5);
    var _closure1_slot17 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx1(){const{shownPixels}=this.__closure;return shownPixels.get()>0;}';
    var5['code'] = var8;
    var _closure1_slot18 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx2(isVisible,wasVisible){const{mainDisallowGesture,stackDisallowGesture,panelDisallowGesture}=this.__closure;var _stackDisallowGesture;if(isVisible===wasVisible)return;mainDisallowGesture.set(isVisible);(_stackDisallowGesture=stackDisallowGesture)===null||_stackDisallowGesture===void 0||_stackDisallowGesture.set(isVisible);if(!isVisible){panelDisallowGesture.set(false);}}';
    var5['code'] = var8;
    var _closure1_slot19 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx3(){const{isChatLockedOpen,mainTranslateX,stackTranslateX}=this.__closure;return!isChatLockedOpen&&mainTranslateX.get()>0||stackTranslateX!=null&&stackTranslateX.get()>0;}';
    var5['code'] = var8;
    var _closure1_slot20 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx4(isInactive,wasInactive){const{panelDisallowGesture}=this.__closure;if(isInactive===wasInactive)return;panelDisallowGesture.set(isInactive);}';
    var5['code'] = var8;
    var _closure1_slot21 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx5(){const{maxWidth,translateX}=this.__closure;return maxWidth-translateX.get();}';
    var5['code'] = var8;
    var _closure1_slot22 = var5;
    var5 = {};
    var8 = 'function SwipeForMemberListWrapperTsx6(){const{theme,ThemeTypes,isChatBesideChannelList,translateX,MIDNIGHT_BORDER_WIDTH}=this.__closure;if(theme!==ThemeTypes.MIDNIGHT||isChatBesideChannelList)return translateX.get();return translateX.get()-MIDNIGHT_BORDER_WIDTH;}';
    var5['code'] = var8;
    var _closure1_slot23 = var5;
    var5 = {};
    var8 = "function SwipeForMemberListWrapperTsx7(){const{shownPixels,PEEK_PIXEL_THRESHOLD}=this.__closure;const exceedsPeekThreshold=shownPixels.get()>PEEK_PIXEL_THRESHOLD*2;return{display:exceedsPeekThreshold?'none':'flex',opacity:exceedsPeekThreshold?0:1-shownPixels.get()/PEEK_PIXEL_THRESHOLD};}";
    var5['code'] = var8;
    var _closure1_slot24 = var5;
    var5 = 32;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/main_tabs_v2/native/channel/SwipeForMemberListWrapper.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function _default(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var14 = var3.channelId;
            var _closure2_slot0 = var14;
            var2 = var3.screenIndex;
            var _closure2_slot1 = var2;
            var11 = var3.children;
            var10 = var3.style;
            var3 = _closure1_slot17;
            var4 = undefined;
            var20 = var3.bind(var4)();
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var3 = 15;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var17 = var3.bind(var4)();
            var _closure2_slot2 = var17;
            var3 = 12;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)();
            var16 = var3.isChatBesideChannelList;
            var _closure2_slot3 = var16;
            var13 = _closure1_slot4;
            var3 = var13.useState;
            var6 = var3.bind(var13)(var14);
            var5 = _closure1_slot3;
            var3 = 2;
            var5 = var5.bind(var4)(var6, var3);
            var3 = 0;
            var31 = var5[var3];
            var3 = 1;
            var3 = var5[var3];
            var _closure2_slot4 = var3;
            var6 = var13.useEffect;
            var5 = new Array(1);
            var5[0] = var14;
            var3 = function() {
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var2 = 16;
                var3 = var3[var2];
                var2 = undefined;
                var5 = var4.bind(var2)(var3);
                var4 = var5.runAfterInteractions;
                var3 = function() {
                    var3 = _closure2_slot4;
                    var2 = _closure2_slot0;
                    var1 = undefined;
                    var2 = var3.bind(var1)(var2);
                    return var1;
                };
                var2 = 200;
                var2 = var4.bind(var5)(var3, var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = var2.cancel;
                    var1 = var1.bind(var2)();
                    var1 = undefined;
                    return var1;
                };
                return var1;
            };
            var3 = var6.bind(var13)(var3, var5);
            var6 = var13.useCallback;
            var5 = function() {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 17;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.dismissKeyboard;
                var2 = var2.bind(var3)();
                return var1;
            };
            var3 = new Array(0);
            var9 = var6.bind(var13)(var5, var3);
            var3 = 18;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var27 = var3.bind(var4)(var2);
            var _closure2_slot5 = var27;
            var6 = var13.useMemo;
            var5 = new Array(2);
            var5[0] = var17;
            var5[1] = var27;
            var3 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var4 = _closure2_slot2;
                    var1 = _closure1_slot12;
                    var1 = var1.MIDNIGHT;
                    if(!(var4 !== var1)) { _fun0002_ip = 30; continue _fun0002 }
 24:
                    var1 = _closure2_slot5;
                    _fun0002_ip = 42; continue _fun0002;
 30:
                    var3 = _closure2_slot5;
                    var2 = _closure1_slot9;
                    var1 = var3 + var2;
 42:
                    return var1;
                }
            };
            var6 = var6.bind(var13)(var3, var5);
            var3 = 19;
            var3 = var8[var3];
            var5 = var7.bind(var4)(var3);
            var3 = {'canDrag': true, 'onDragStart': null, 'startShown': false, 'cancelOnSwipeRightFromStart': true};
            var29 = true;
            var3['onDragStart'] = var9;
            var30 = false;
            var3['openWidth'] = var6;
            var3 = var5.bind(var4)(var3);
            var5 = var3.gesture;
            var15 = var3.panelGestureContext;
            var _closure2_slot6 = var15;
            var9 = var3.isDragging;
            var26 = var3.translateX;
            var _closure2_slot7 = var26;
            var21 = var3.movePanel;
            var _closure2_slot8 = var21;
            var23 = var3.maxWidth;
            var _closure2_slot9 = var23;
            var6 = _closure1_slot0;
            var19 = 13;
            var3 = var8[var19];
            var22 = var6.bind(var4)(var3);
            var12 = var22.useDerivedValue;
            var3 = function N() {
                var2 = _closure2_slot9;
                var3 = _closure2_slot7;
                var1 = var3.get;
                var1 = var1.bind(var3)();
                var1 = var2 - var1;
                return var1;
            };
            var24 = {};
            var24['maxWidth'] = var23;
            var24['translateX'] = var26;
            var3['__closure'] = var24;
            var24 = 10842481670591.0;
            var3['__workletHash'] = var24;
            var24 = _closure1_slot22;
            var3['__initData'] = var24;
            var12 = var12.bind(var22)(var3);
            var _closure2_slot10 = var12;
            var3 = 20;
            var3 = var8[var3];
            var24 = var6.bind(var4)(var3);
            var22 = var24.useDerivedStateFromSharedValue;
            var3 = function(arg1) {
                var2 = arg1;
                var1 = 0;
                var1 = var2 > var1;
                return var1;
            };
            var32 = var22.bind(var24)(var12, var3);
            var _closure2_slot11 = var32;
            var3 = var8[var19];
            var24 = var6.bind(var4)(var3);
            var22 = var24.useDerivedValue;
            var3 = function X() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                    var4 = _closure2_slot2;
                    var3 = _closure1_slot12;
                    var3 = var3.MIDNIGHT;
                    if(!(var4 === var3)) { _fun0003_ip = 54; continue _fun0003 }
 24:
                    var3 = _closure2_slot3;
                    if(var3) { _fun0003_ip = 54; continue _fun0003 }
 31:
                    var4 = _closure2_slot7;
                    var3 = var4.get;
                    var3 = var3.bind(var4)();
                    var1 = _closure1_slot9;
                    var1 = var3 - var1;
                    _fun0003_ip = 67; continue _fun0003;
 54:
                    var3 = _closure2_slot7;
                    var2 = var3.get;
                    var1 = var2.bind(var3)();
 67:
                    return var1;
                }
            };
            var25 = {};
            var25['theme'] = var17;
            var28 = _closure1_slot12;
            var25['ThemeTypes'] = var28;
            var25['isChatBesideChannelList'] = var16;
            var25['translateX'] = var26;
            var26 = _closure1_slot9;
            var25['MIDNIGHT_BORDER_WIDTH'] = var26;
            var3['__closure'] = var25;
            var25 = 5498466465211.0;
            var3['__workletHash'] = var25;
            var25 = _closure1_slot23;
            var3['__initData'] = var25;
            var24 = var22.bind(var24)(var3);
            var25 = var13.useCallback;
            var22 = new Array(3);
            var22[0] = var14;
            var22[1] = var2;
            var22[2] = var21;
            var3 = function(arg1) {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                    var2 = arg1;
                    var4 = var2.channelId;
                    var3 = _closure2_slot0;
                    var3 = var4 === var3;
                    if(!var3) { _fun0004_ip = 36; continue _fun0004 }
 22:
                    var5 = var2.screenIndex;
                    var4 = _closure2_slot1;
                    var3 = var5 === var4;
 36:
                    if(!var3) { _fun0004_ip = 94; continue _fun0004 }
 39:
                    var3 = var2.search;
                    var5 = true;
                    if(!(var5 === var3)) { _fun0004_ip = 76; continue _fun0004 }
 51:
                    var6 = _closure1_slot8;
                    var4 = var2.channelId;
                    var3 = undefined;
                    var2 = 'initial';
                    var2 = var6.bind(var3)(var4, var5, var2);
 76:
                    var4 = _closure2_slot8;
                    var11 = undefined;
                    var9 = false;
                    var8 = 0;
                    var10 = true;
                    var7 = true;
                    var1 = var11[var4](var10, var9, var8, var7, var6);
 94:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var25.bind(var13)(var3, var22);
            var _closure2_slot12 = var3;
            var25 = var13.useCallback;
            var22 = new Array(1);
            var22[0] = var21;
            var21 = function() {
                var5 = _closure2_slot8;
                var1 = undefined;
                var7 = 0;
                var6 = true;
                var10 = undefined;
                var9 = false;
                var8 = false;
                var2 = var10[var5](var9, var8, var7, var6, var5);
                return var1;
            };
            var26 = var25.bind(var13)(var21, var22);
            var _closure2_slot13 = var26;
            var25 = var13.useEffect;
            var22 = new Array(1);
            var22[0] = var26;
            var21 = function() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var2 = 21;
                var3 = var3[var2];
                var2 = undefined;
                var4 = var4.bind(var2)(var3);
                var3 = var4.addRouteChangeListener;
                var2 = function() {
                    var2 = _closure2_slot13;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                var2 = var3.bind(var4)(var2);
                var _closure3_slot0 = var2;
                var1 = function() {
                    var2 = _closure3_slot0;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    return var1;
                };
                return var1;
            };
            var21 = var25.bind(var13)(var21, var22);
            var22 = var13.useEffect;
            var21 = new Array(2);
            var21[0] = var3;
            var21[1] = var26;
            var3 = function() {
                var5 = _closure1_slot0;
                var6 = _closure1_slot2;
                var3 = 22;
                var2 = var6[var3];
                var4 = undefined;
                var2 = var5.bind(var4)(var2);
                var10 = var2.ComponentDispatch;
                var9 = var10.subscribe;
                var2 = _closure1_slot11;
                var8 = var2.SHOW_CHANNEL_DETAILS;
                var7 = _closure2_slot12;
                var7 = var9.bind(var10)(var8, var7);
                var3 = var6[var3];
                var3 = var5.bind(var4)(var3);
                var4 = var3.ComponentDispatch;
                var3 = var4.subscribe;
                var2 = var2.HIDE_CHANNEL_DETAILS;
                var1 = _closure2_slot13;
                var1 = var3.bind(var4)(var2, var1);
                var1 = function() {
                    var5 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var4 = 22;
                    var3 = var6[var4];
                    var1 = undefined;
                    var3 = var5.bind(var1)(var3);
                    var10 = var3.ComponentDispatch;
                    var9 = var10.unsubscribe;
                    var3 = _closure1_slot11;
                    var8 = var3.SHOW_CHANNEL_DETAILS;
                    var7 = _closure2_slot12;
                    var7 = var9.bind(var10)(var8, var7);
                    var4 = var6[var4];
                    var4 = var5.bind(var1)(var4);
                    var5 = var4.ComponentDispatch;
                    var4 = var5.unsubscribe;
                    var3 = var3.HIDE_CHANNEL_DETAILS;
                    var2 = _closure2_slot13;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                return var1;
            };
            var3 = var22.bind(var13)(var3, var21);
            var22 = var13.useCallback;
            var21 = new Array(3);
            var21[0] = var12;
            var21[1] = var26;
            var21[2] = var14;
            var3 = function() {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                    var3 = _closure2_slot10;
                    var2 = var3.get;
                    var3 = var2.bind(var3)();
                    var2 = 0;
                    if(!(!(var3 <= var2))) { _fun0005_ip = 469; continue _fun0005 }
 25:
                    var3 = _closure1_slot0;
                    var5 = _closure1_slot2;
                    var2 = 23;
                    var2 = var5[var2];
                    var5 = undefined;
                    var3 = var3.bind(var5)(var2);
                    var2 = var3.getRootNavigationRef;
                    var3 = var2.bind(var3)();
                    var12 = null;
                    var2 = var12 == var3;
                    var8 = undefined;
                    if(var2) { _fun0005_ip = 81; continue _fun0005 }
 71:
                    var2 = var3.getCurrentRoute;
                    var8 = var2.bind(var3)();
 81:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var3 = 12;
                    var3 = var2[var3];
                    var7 = var6.bind(var5)(var3);
                    var3 = var7.getChatLayout;
                    var3 = var3.bind(var7)();
                    var3 = var3.isChatLockedOpen;
                    var7 = 24;
                    var2 = var2[var7];
                    var6 = var6.bind(var5)(var2);
                    var2 = var6.coerceChannelRoute;
                    var6 = var2.bind(var6)(var8);
                    var2 = var12 == var6;
                    if(!var2) { _fun0005_ip = 150; continue _fun0005 }
 147:
                    var2 = var3;
 150:
                    var11 = var6;
                    if(!var2) { _fun0005_ip = 184; continue _fun0005 }
 156:
                    var6 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var2 = var2[var7];
                    var6 = var6.bind(var5)(var2);
                    var2 = var6.coerceGuildsRoute;
                    var11 = var2.bind(var6)(var8);
 184:
                    var9 = _closure1_slot15;
                    var6 = var9.verbose;
                    var2 = {};
                    var2['route'] = var11;
                    var7 = _closure2_slot0;
                    var2['channelId'] = var7;
                    var2['currentRoute'] = var8;
                    var2['isChatLockedOpen'] = var3;
                    var10 = var12 == var11;
                    var7 = undefined;
                    if(var10) { _fun0005_ip = 234; continue _fun0005 }
 228:
                    var7 = var11.params;
 234:
                    var2['routeParams'] = var7;
                    var7 = 'handleBackPress';
                    var2 = var6.bind(var9)(var7, var2);
                    if(!(var12 != var11)) { _fun0005_ip = 430; continue _fun0005 }
 260:
                    var2 = var11.params;
                    var9 = var12 == var2;
                    var6 = undefined;
                    if(var9) { _fun0005_ip = 280; continue _fun0005 }
 275:
                    var6 = var2.channelId;
 280:
                    var2 = _closure2_slot0;
                    if(!(var6 === var2)) { _fun0005_ip = 363; continue _fun0005 }
 288:
                    var6 = _closure1_slot7;
                    var2 = _closure2_slot0;
                    var2 = var6.bind(var5)(var2);
                    if(var2) { _fun0005_ip = 316; continue _fun0005 }
 304:
                    var2 = _closure2_slot13;
                    var2 = var2.bind(var5)();
                    var2 = true;
                    _fun0005_ip = 428; continue _fun0005;
 316:
                    var10 = _closure1_slot15;
                    var9 = var10.verbose;
                    var6 = 'cancelling search before closing panel';
                    var6 = var9.bind(var10)(var7, var6);
                    var13 = _closure1_slot8;
                    var10 = _closure2_slot0;
                    var9 = false;
                    var6 = 'initial';
                    var6 = var13.bind(var5)(var10, var9, var6);
                    var2 = true;
                    _fun0005_ip = 428; continue _fun0005;
 363:
                    var10 = _closure1_slot15;
                    var9 = var10.verbose;
                    var6 = {};
                    var11 = var11.params;
                    var12 = var12 == var11;
                    var5 = undefined;
                    if(var12) { _fun0005_ip = 395; continue _fun0005 }
 390:
                    var5 = var11.channelId;
 395:
                    var6['routeChannelId'] = var5;
                    var5 = _closure2_slot0;
                    var6['expectedChannelId'] = var5;
                    var5 = 'route channelId mismatch';
                    var5 = var9.bind(var10)(var7, var5, var6);
                    var2 = false;
 428:
                    _fun0005_ip = 467; continue _fun0005;
 430:
                    var6 = _closure1_slot15;
                    var5 = var6.verbose;
                    var4 = {};
                    var4['currentRoute'] = var8;
                    var4['isChatLockedOpen'] = var3;
                    var3 = 'route is null';
                    var3 = var5.bind(var6)(var7, var3, var4);
                    var2 = false;
 467:
                    return var2;
 469:
                    var5 = _closure1_slot15;
                    var4 = var5.verbose;
                    var3 = {};
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var1 = var1.bind(var2)();
                    var3['shownPixels'] = var1;
                    var2 = 'handleBackPress';
                    var1 = 'shownPixels <= 0';
                    var1 = var4.bind(var5)(var2, var1, var3);
                    var1 = false;
                    return var1;
                }
            };
            var28 = var22.bind(var13)(var3, var21);
            var3 = 25;
            var3 = var8[var3];
            var3 = var7.bind(var4)(var3);
            var3 = var3.bind(var4)(var28, var32);
            var21 = var13.useEffect;
            var7 = new Array(3);
            var7[0] = var32;
            var7[1] = var14;
            var7[2] = var2;
            var3 = function() {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
                    var2 = _closure2_slot11;
                    if(var2) { _fun0006_ip = 100; continue _fun0006 }
 13:
                    var6 = _closure1_slot8;
                    var7 = _closure2_slot0;
                    var4 = undefined;
                    var3 = false;
                    var2 = 'initial';
                    var2 = var6.bind(var4)(var7, var3, var2);
                    var3 = _closure1_slot0;
                    var6 = _closure1_slot2;
                    var2 = 22;
                    var2 = var6[var2];
                    var2 = var3.bind(var4)(var2);
                    var6 = var2.ComponentDispatch;
                    var4 = var6.dispatch;
                    var2 = _closure1_slot11;
                    var3 = var2.CHANNEL_DETAILS_HIDDEN;
                    var2 = {};
                    var2['channelId'] = var7;
                    var7 = _closure2_slot1;
                    var2['screenIndex'] = var7;
                    var2 = var4.bind(var6)(var3, var2);
                    _fun0006_ip = 168; continue _fun0006;
 100:
                    var4 = _closure1_slot0;
                    var3 = _closure1_slot2;
                    var2 = 22;
                    var3 = var3[var2];
                    var2 = undefined;
                    var2 = var4.bind(var2)(var3);
                    var4 = var2.ComponentDispatch;
                    var3 = var4.dispatch;
                    var1 = _closure1_slot11;
                    var2 = var1.CHANNEL_DETAILS_SHOWN;
                    var1 = {};
                    var6 = _closure2_slot0;
                    var1['channelId'] = var6;
                    var5 = _closure2_slot1;
                    var1['screenIndex'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
 168:
                    var1 = undefined;
                    return var1;
                }
            };
            var3 = var21.bind(var13)(var3, var7);
            var21 = var13.useEffect;
            var7 = new Array(3);
            var7[0] = var14;
            var7[1] = var2;
            var7[2] = var26;
            var3 = function() {
                var2 = _closure2_slot13;
                var1 = undefined;
                var2 = var2.bind(var1)();
                return var1;
            };
            var3 = var21.bind(var13)(var3, var7);
            var3 = function useAnalyticsEffect(arg1, arg2, arg3, arg4) {
                var7 = arg1;
                var6 = arg2;
                var5 = arg3;
                var8 = arg4;
                var _closure3_slot0 = var7;
                var _closure3_slot1 = var6;
                var _closure3_slot2 = var5;
                var _closure3_slot3 = var8;
                var4 = _closure1_slot4;
                var9 = var4.useEffect;
                var3 = new Array(3);
                var3[0] = var7;
                var3[1] = var6;
                var3[2] = var8;
                var2 = function() {
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var1 = 10;
                    var3 = var3[var1];
                    var1 = undefined;
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.trackWithMetadata;
                    var2 = _closure1_slot10;
                    var3 = var2.MEMBER_LIST_SWIPE_TOGGLED;
                    var2 = {};
                    var7 = _closure3_slot0;
                    var2['channel_id'] = var7;
                    var7 = global;
                    var8 = var7.String;
                    var7 = _closure3_slot1;
                    var7 = var8.bind(var1)(var7);
                    var2['screen_index'] = var7;
                    var6 = _closure3_slot3;
                    var2['member_list_open'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                };
                var2 = var9.bind(var4)(var2, var3);
                var3 = var4.useEffect;
                var2 = new Array(4);
                var2[0] = var8;
                var2[1] = var7;
                var2[2] = var6;
                var2[3] = var5;
                var1 = function() {
                    _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
                        var1 = _closure3_slot3;
                        if(!var1) { _fun0007_ip = 23; continue _fun0007 }
 10:
                        var3 = _closure3_slot2;
                        var2 = var3.get;
                        var1 = var2.bind(var3)();
 23:
                        if(!var1) { _fun0007_ip = 105; continue _fun0007 }
 26:
                        var3 = _closure1_slot1;
                        var4 = _closure1_slot2;
                        var2 = 10;
                        var2 = var4[var2];
                        var7 = undefined;
                        var4 = var3.bind(var7)(var2);
                        var3 = var4.trackWithMetadata;
                        var1 = _closure1_slot10;
                        var2 = var1.MEMBER_LIST_SWIPE_PEEK;
                        var1 = {};
                        var6 = _closure3_slot0;
                        var1['channel_id'] = var6;
                        var6 = global;
                        var6 = var6.String;
                        var5 = _closure3_slot1;
                        var5 = var6.bind(var7)(var5);
                        var1['screen_index'] = var5;
                        var1 = var3.bind(var4)(var2, var1);
 105:
                        var1 = undefined;
                        return var1;
                    }
                };
                var1 = var3.bind(var4)(var1, var2);
                var1 = undefined;
                return var1;
            };
            var37 = undefined;
            var36 = var14;
            var35 = var2;
            var34 = var9;
            var33 = var32;
            var3 = var37[var3](var36, var35, var34, var33, var32);
            var3 = function useGestureCompositionEffect(arg1, arg2, arg3) {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
                    var9 = arg1;
                    var16 = arg2;
                    var _closure3_slot0 = var9;
                    var _closure3_slot1 = var16;
                    var4 = _closure1_slot4;
                    var6 = var4.useContext;
                    var8 = _closure1_slot1;
                    var7 = _closure1_slot2;
                    var1 = 11;
                    var3 = var7[var1];
                    var5 = undefined;
                    var3 = var8.bind(var5)(var3);
                    var3 = var6.bind(var4)(var3);
                    var8 = var3.gesture;
                    var _closure3_slot2 = var8;
                    var18 = var3.disallowGesture;
                    var _closure3_slot3 = var18;
                    var13 = var3.translateX;
                    var _closure3_slot4 = var13;
                    var3 = var4.useContext;
                    var6 = _closure1_slot0;
                    var1 = var7[var1];
                    var1 = var6.bind(var5)(var1);
                    var1 = var1.MainTabsChannelScreenStackContext;
                    var3 = var3.bind(var4)(var1);
                    var1 = null;
                    if(!(var1 == var3)) { _fun0008_ip = 124; continue _fun0008 }
 122:
                    var3 = {};
 124:
                    var1 = var3.gesture;
                    var _closure3_slot5 = var1;
                    var17 = var3.disallowGesture;
                    var _closure3_slot6 = var17;
                    var11 = var3.translateX;
                    var _closure3_slot7 = var11;
                    var3 = arg3;
                    var12 = var3.disallowGesture;
                    var _closure3_slot8 = var12;
                    var4 = _closure1_slot1;
                    var6 = _closure1_slot2;
                    var3 = 12;
                    var3 = var6[var3];
                    var3 = var4.bind(var5)(var3);
                    var3 = var3.bind(var5)();
                    var14 = var3.isChatLockedOpen;
                    var _closure3_slot9 = var14;
                    var7 = _closure1_slot4;
                    var4 = var7.useMemo;
                    var3 = new Array(3);
                    var3[0] = var9;
                    var3[1] = var8;
                    var3[2] = var1;
                    var1 = function() {
                        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
                            var3 = _closure3_slot5;
                            var1 = null;
                            if(!(var1 != var3)) { _fun0009_ip = 39; continue _fun0009 }
 13:
                            var5 = _closure3_slot0;
                            var4 = var5.simultaneousWithExternalGesture;
                            var3 = _closure3_slot2;
                            var1 = _closure3_slot5;
                            var1 = var4.bind(var5)(var3, var1);
                            _fun0009_ip = 58; continue _fun0009;
 39:
                            var4 = _closure3_slot0;
                            var3 = var4.simultaneousWithExternalGesture;
                            var2 = _closure3_slot2;
                            var1 = var3.bind(var4)(var2);
 58:
                            return var1;
                        }
                    };
                    var1 = var4.bind(var7)(var1, var3);
                    var4 = _closure1_slot0;
                    var3 = 13;
                    var7 = var6[var3];
                    var15 = var4.bind(var5)(var7);
                    var9 = var15.useAnimatedReaction;
                    var8 = function u() {
                        var2 = _closure3_slot1;
                        var1 = var2.get;
                        var2 = var1.bind(var2)();
                        var1 = 0;
                        var1 = var2 > var1;
                        return var1;
                    };
                    var7 = {};
                    var7['shownPixels'] = var16;
                    var8['__closure'] = var7;
                    var7 = 15116046915956.0;
                    var8['__workletHash'] = var7;
                    var7 = _closure1_slot18;
                    var8['__initData'] = var7;
                    var7 = function c(arg1, arg2) {
                        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
 0:
                            var2 = arg1;
                            var1 = arg2;
                            if(!(var2 !== var1)) { _fun0010_ip = 70; continue _fun0010 }
 10:
                            var4 = _closure3_slot3;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var2);
                            var4 = _closure3_slot6;
                            var3 = null;
                            if(!(var3 != var4)) { _fun0010_ip = 51; continue _fun0010 }
 37:
                            var4 = _closure3_slot6;
                            var3 = var4.set;
                            var3 = var3.bind(var4)(var2);
 51:
                            if(var2) { _fun0010_ip = 70; continue _fun0010 }
 54:
                            var3 = _closure3_slot8;
                            var2 = var3.set;
                            var1 = false;
                            var1 = var2.bind(var3)(var1);
 70:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var16 = {};
                    var16['mainDisallowGesture'] = var18;
                    var16['stackDisallowGesture'] = var17;
                    var16['panelDisallowGesture'] = var12;
                    var7['__closure'] = var16;
                    var16 = 13681610289748.0;
                    var7['__workletHash'] = var16;
                    var16 = _closure1_slot19;
                    var7['__initData'] = var16;
                    var7 = var9.bind(var15)(var8, var7);
                    var3 = var6[var3];
                    var9 = var4.bind(var5)(var3);
                    var8 = var9.useAnimatedReaction;
                    var7 = function _() {
                        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
 0:
                            var1 = _closure3_slot9;
                            var1 = !var1;
                            if(!var1) { _fun0011_ip = 32; continue _fun0011 }
 13:
                            var4 = _closure3_slot4;
                            var2 = var4.get;
                            var4 = var2.bind(var4)();
                            var2 = 0;
                            var1 = var4 > var2;
 32:
                            if(var1) { _fun0011_ip = 70; continue _fun0011 }
 35:
                            var4 = _closure3_slot7;
                            var2 = null;
                            var2 = var2 != var4;
                            if(!var2) { _fun0011_ip = 67; continue _fun0011 }
 48:
                            var4 = _closure3_slot7;
                            var3 = var4.get;
                            var4 = var3.bind(var4)();
                            var3 = 0;
                            var2 = var4 > var3;
 67:
                            var1 = var2;
 70:
                            return var1;
                        }
                    };
                    var3 = {};
                    var3['isChatLockedOpen'] = var14;
                    var3['mainTranslateX'] = var13;
                    var3['stackTranslateX'] = var11;
                    var7['__closure'] = var3;
                    var3 = 11938850302839.0;
                    var7['__workletHash'] = var3;
                    var3 = _closure1_slot20;
                    var7['__initData'] = var3;
                    var3 = function h(arg1, arg2) {
                        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
 0:
                            var3 = arg1;
                            var1 = arg2;
                            if(!(var3 !== var1)) { _fun0012_ip = 27; continue _fun0012 }
 10:
                            var2 = _closure3_slot8;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
 27:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var11 = {};
                    var11['panelDisallowGesture'] = var12;
                    var3['__closure'] = var11;
                    var11 = 3362957347102.0;
                    var3['__workletHash'] = var11;
                    var10 = _closure1_slot21;
                    var3['__initData'] = var10;
                    var3 = var8.bind(var9)(var7, var3);
                    var3 = 14;
                    var3 = var6[var3];
                    var4 = var4.bind(var5)(var3);
                    var3 = var4.useUnmountEffect;
                    var2 = function() {
                        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
 0:
                            var4 = _closure3_slot8;
                            var2 = var4.set;
                            var3 = false;
                            var2 = var2.bind(var4)(var3);
                            var4 = _closure3_slot3;
                            var2 = var4.set;
                            var2 = var2.bind(var4)(var3);
                            var4 = _closure3_slot6;
                            var2 = null;
                            if(!(var2 != var4)) { _fun0013_ip = 57; continue _fun0013 }
 43:
                            var2 = _closure3_slot6;
                            var1 = var2.set;
                            var1 = var1.bind(var2)(var3);
 57:
                            var1 = undefined;
                            return var1;
                        }
                    };
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var7 = var3.bind(var4)(var5, var12, var15);
            var5 = var13.useMemo;
            var3 = new Array(4);
            var3[0] = var15;
            var3[1] = var14;
            var3[2] = var2;
            var3[3] = var32;
            var2 = function() {
                var1 = {};
                var5 = _closure2_slot6;
                var6 = var1;
                var3 = copyDataProperties(var6, var5);
                var4 = _closure2_slot0;
                var3 = 'channelId';
                var1[var3] = var4;
                var4 = _closure2_slot1;
                var3 = 'screenIndex';
                var1[var3] = var4;
                var3 = _closure2_slot11;
                var2 = 'isPanelActive';
                var1[var2] = var3;
                return var1;
            };
            var5 = var5.bind(var13)(var2, var3);
            var2 = 26;
            var2 = var8[var2];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useMainTabsChannelScreenStyles;
            var15 = var2.bind(var3)(var9, var24, var23);
            var2 = var8[var19];
            var3 = var6.bind(var4)(var2);
            var2 = var3.useAnimatedStyle;
            var1 = function ae() {
                _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
 0:
                    var2 = _closure2_slot10;
                    var1 = var2.get;
                    var2 = var1.bind(var2)();
                    var1 = 300;
                    var4 = var2 > var1;
                    var1 = {};
                    var2 = 'flex';
                    if(!var4) { _fun0014_ip = 39; continue _fun0014 }
 35:
                    var2 = 'none';
 39:
                    var1['display'] = var2;
                    var2 = 0;
                    if(var4) { _fun0014_ip = 75; continue _fun0014 }
 48:
                    var4 = _closure2_slot10;
                    var3 = var4.get;
                    var4 = var3.bind(var4)();
                    var3 = 150;
                    var4 = var4 / var3;
                    var3 = 1;
                    var2 = var3 - var4;
 75:
                    var1['opacity'] = var2;
                    return var1;
                }
            };
            var9 = {};
            var9['shownPixels'] = var12;
            var12 = 150;
            var9['PEEK_PIXEL_THRESHOLD'] = var12;
            var1['__closure'] = var9;
            var9 = 9468759128012.0;
            var1['__workletHash'] = var9;
            var9 = _closure1_slot24;
            var1['__initData'] = var9;
            var21 = var2.bind(var3)(var1);
            var3 = _closure1_slot13;
            var1 = _closure1_slot16;
            var2 = var1.Provider;
            var1 = {};
            var1['value'] = var5;
            var5 = 27;
            var5 = var8[var5];
            var5 = var6.bind(var4)(var5);
            var6 = var5.GestureDetector;
            var5 = {};
            var5['gesture'] = var7;
            var9 = _closure1_slot14;
            var8 = _closure1_slot6;
            var7 = {};
            var7['style'] = var10;
            var10 = {};
            var12 = var20.content;
            var10['style'] = var12;
            var13 = !var32;
            var12 = !var13;
            if(!var13) { _fun0001_ip = 1056; continue _fun0001 }
 1054:
            var12 = undefined;
 1056:
            var10['accessibilityElementsHidden'] = var12;
            var12 = undefined;
            if(!var32) { _fun0001_ip = 1072; continue _fun0001 }
 1066:
            var12 = 'no-hide-descendants';
 1072:
            var10['importantForAccessibility'] = var12;
            var12 = new Array(2);
            var12[0] = var11;
            var22 = _closure1_slot13;
            var14 = _closure1_slot0;
            var11 = _closure1_slot2;
            var13 = 28;
            var13 = var11[var13];
            var13 = var14.bind(var4)(var13);
            var14 = var13.MainTabsContentScrim;
            var13 = {};
            var13['translateX'] = var24;
            var13['maxWidth'] = var23;
            var13 = var22.bind(var4)(var14, var13);
            var12[1] = var13;
            var10['children'] = var12;
            var12 = var9.bind(var4)(var8, var10);
            var10 = new Array(2);
            var10[0] = var12;
            var13 = _closure1_slot14;
            var12 = _closure1_slot1;
            var11 = var11[var19];
            var11 = var12.bind(var4)(var11);
            var12 = var11.View;
            var11 = {};
            var14 = new Array(4);
            var14[0] = var15;
            var15 = var20.memberListContainer;
            var14[1] = var15;
            var15 = _closure1_slot12;
            var22 = var15.MIDNIGHT;
            var15 = undefined;
            if(!(var17 === var22)) { _fun0001_ip = 1219; continue _fun0001 }
 1213:
            var15 = var20.midnightBorder;
 1219:
            var14[2] = var15;
            var15 = undefined;
            if(var16) { _fun0001_ip = 1250; continue _fun0001 }
 1228:
            var16 = _closure1_slot12;
            var16 = var16.MIDNIGHT;
            var15 = undefined;
            if(!(var17 === var16)) { _fun0001_ip = 1250; continue _fun0001 }
 1244:
            var15 = var20.midnightRightOverflow;
 1250:
            var14[3] = var15;
            var11['style'] = var14;
            var14 = !var32;
            if(var14) { _fun0001_ip = 1266; continue _fun0001 }
 1264:
            var14 = undefined;
 1266:
            var11['accessibilityElementsHidden'] = var14;
            var14 = 'no-hide-descendants';
            if(!var32) { _fun0001_ip = 1282; continue _fun0001 }
 1280:
            var14 = undefined;
 1282:
            var11['importantForAccessibility'] = var14;
            var17 = _closure1_slot13;
            var16 = _closure1_slot1;
            var15 = _closure1_slot2;
            var14 = 29;
            var14 = var15[var14];
            var22 = var16.bind(var4)(var14);
            var14 = {'absolute': true, 'withOverlay': true, 'overlayOpacity': 0.5};
            var22 = var17.bind(var4)(var22, var14);
            var14 = new Array(3);
            var14[0] = var22;
            var23 = _closure1_slot0;
            var22 = 30;
            var22 = var15[var22];
            var22 = var23.bind(var4)(var22);
            var23 = var22.LayerScope;
            var22 = {};
            var24 = 31;
            var24 = var15[var24];
            var25 = var16.bind(var4)(var24);
            var24 = {};
            var24['isShowing'] = var32;
            var24['channelId'] = var31;
            var24['isSearchLocked'] = var30;
            var24['showBackButton'] = var29;
            var24['onBackPress'] = var28;
            var24['componentWidth'] = var27;
            var24['onChannelDeleted'] = var26;
            var24 = var17.bind(var4)(var25, var24);
            var22['children'] = var24;
            var22 = var17.bind(var4)(var23, var22);
            var14[1] = var22;
            var15 = var15[var19];
            var15 = var16.bind(var4)(var15);
            var16 = var15.View;
            var15 = {};
            var19 = _closure1_slot5;
            var22 = var19.absoluteFill;
            var19 = new Array(2);
            var19[0] = var22;
            var19[1] = var21;
            var15['style'] = var19;
            var19 = _closure1_slot6;
            var18 = {};
            var20 = var20.memberListPreview;
            var18['style'] = var20;
            var18 = var17.bind(var4)(var19, var18);
            var15['children'] = var18;
            var15 = var17.bind(var4)(var16, var15);
            var14[2] = var15;
            var11['children'] = var14;
            var11 = var13.bind(var4)(var12, var11);
            var10[1] = var11;
            var7['children'] = var10;
            var7 = var9.bind(var4)(var8, var7);
            var5['children'] = var7;
            var5 = var3.bind(var4)(var6, var5);
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var4;
    var3['SwipeForMemberListContext'] = var2;
    return var1;
})();