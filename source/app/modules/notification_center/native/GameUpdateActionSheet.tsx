// app/modules/notification_center/native/GameUpdateActionSheet.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var11 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var11;
    var _closure1_slot2 = var6;
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
    var13 = 1;
    var4 = var6[var13];
    var4 = var5.bind(var1)(var4);
    var7 = var4.Image;
    var _closure1_slot4 = var7;
    var4 = var4.View;
    var _closure1_slot5 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var11.bind(var1)(var4);
    var _closure1_slot6 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot7 = var4;
    var12 = 4;
    var4 = var6[var12];
    var4 = var5.bind(var1)(var4);
    var7 = var4.jsx;
    var _closure1_slot8 = var7;
    var7 = var4.Fragment;
    var _closure1_slot9 = var7;
    var4 = var4.jsxs;
    var _closure1_slot10 = var4;
    var4 = 5;
    var4 = var6[var4];
    var8 = var5.bind(var1)(var4);
    var7 = var8.createStyles;
    var4 = {};
    var9 = {'position': 'absolute', 'top': 0, 'left': 0, 'right': 0, 'zIndex': 1};
    var4['floatingHandle'] = var9;
    var9 = {};
    var10 = 6;
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.colors;
    var14 = var14.CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY;
    var9['backgroundColor'] = var14;
    var4['tabStyle'] = var9;
    var9 = {};
    var14 = 'relative';
    var9['position'] = var14;
    var4['scrollView'] = var9;
    var9 = {'paddingHorizontal': 16, 'gap': 20};
    var4['content'] = var9;
    var9 = {'marginTop': 24, 'paddingVertical': 20, 'position': 'relative', 'flexDirection': 'column', 'gap': 20};
    var4['gradientContainer'] = var9;
    var9 = {'position': 'absolute', 'top': 4294967272, 'bottom': 0, 'left': 4294967280, 'right': 4294967280};
    var4['gradient'] = var9;
    var9 = {'flexDirection': 'row', 'gap': 4};
    var4['timestampRow'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'flexWrap': 'wrap', 'gap': 10};
    var4['tagsContainer'] = var9;
    var9 = {};
    var14 = var6[var10];
    var14 = var11.bind(var1)(var14);
    var14 = var14.radii;
    var14 = var14.xs;
    var9['borderRadius'] = var14;
    var9['borderWidth'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderColor'] = var13;
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['backgroundColor'] = var13;
    var9['padding'] = var10;
    var4['tagWrapper'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'space-between', 'paddingVertical': 12, 'borderTopWidth': 1, 'borderTopColor': null, 'gap': 24};
    var13 = var6[var10];
    var13 = var11.bind(var1)(var13);
    var13 = var13.colors;
    var13 = var13.BORDER_SUBTLE;
    var9['borderTopColor'] = var13;
    var4['infoRow'] = var9;
    var9 = {'flex': 1, 'flexWrap': 'wrap', 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-end'};
    var4['publishersContainer'] = var9;
    var9 = {'flex': 1, 'flexDirection': 'row', 'alignItems': 'center', 'justifyContent': 'flex-end', 'flexWrap': 'wrap', 'gap': 16};
    var4['platformsContainer'] = var9;
    var9 = {};
    var9['gap'] = var12;
    var4['gameHeaderContainer'] = var9;
    var9 = {'flexDirection': 'row', 'alignItems': 'center', 'gap': 4};
    var4['gameHeaderRow'] = var9;
    var9 = {'width': 18, 'height': 18, 'overflow': 'hidden'};
    var4['gameIconContainer'] = var9;
    var9 = {};
    var12 = '100%';
    var9['height'] = var12;
    var4['gameIcon'] = var9;
    var9 = {'paddingVertical': 12, 'gap': 12, 'borderTopWidth': 1};
    var10 = var6[var10];
    var10 = var11.bind(var1)(var10);
    var10 = var10.colors;
    var10 = var10.BORDER_SUBTLE;
    var9['borderTopColor'] = var10;
    var4['officialServerInfoRow'] = var9;
    var4 = var7.bind(var8)(var4);
    var _closure1_slot11 = var4;
    var4 = 39;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/notification_center/native/GameUpdateActionSheet.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function GameUpdateActionSheet(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var24 = var1.gameUpdateId;
            var _closure2_slot0 = var24;
            var23 = var1.gameId;
            var _closure2_slot1 = var23;
            var43 = var1.initialUpdateTitle;
            var5 = var1.initialStartDate;
            var4 = undefined;
            var _closure2_slot8 = var4;
            var _closure2_slot9 = var4;
            var _closure2_slot10 = var4;
            var1 = _closure1_slot11;
            var22 = var1.bind(var4)();
            var _closure2_slot2 = var22;
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useGetOrFetchApplication;
            var26 = var1.bind(var2)(var23);
            var1 = 8;
            var1 = var6[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useRequestDetectableGameSupplementalData;
            var1 = var1.bind(var2)(var23);
            var1 = 9;
            var1 = var6[var1];
            var8 = var3.bind(var4)(var1);
            var7 = var8.useStateFromStores;
            var1 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = function() {
                var3 = _closure1_slot6;
                var2 = var3.getGame;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var39 = var7.bind(var8)(var2, var1);
            var8 = _closure1_slot1;
            var1 = 10;
            var1 = var6[var1];
            var1 = var8.bind(var4)(var1);
            var1 = var1.bind(var4)();
            var27 = var1.width;
            var1 = 11;
            var1 = var6[var1];
            var2 = var3.bind(var4)(var1);
            var1 = var2.useGameUpdateData;
            var2 = var1.bind(var2)(var23, var24);
            var1 = var2.data;
            var _closure2_slot3 = var1;
            var14 = var2.isLoading;
            var _closure2_slot4 = var14;
            var7 = var2.error;
            var _closure2_slot5 = var7;
            var11 = _closure1_slot3;
            var2 = var11.useRef;
            var28 = null;
            var2 = var2.bind(var11)(var28);
            var _closure2_slot6 = var2;
            var2 = var11.useRef;
            var2 = var2.bind(var11)(var28);
            var _closure2_slot7 = var2;
            var10 = var11.useEffect;
            var9 = new Array(5);
            var9[0] = var24;
            var9[1] = var14;
            var9[2] = var7;
            var9[3] = var1;
            var9[4] = var23;
            var2 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = _closure2_slot7;
                    var1 = var1.current;
                    var8 = null;
                    if(!(var8 == var1)) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var2 = _closure2_slot7;
                    var1 = global;
                    var3 = var1.Date;
                    var1 = var3.now;
                    var1 = var1.bind(var3)();
                    var2['current'] = var1;
case 2:
                    var1 = _closure2_slot4;
                    var7 = 'LOADING';
                    var5 = var7;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var1 = _closure2_slot3;
                    if(!(var8 == var1)) { _fun0002_ip = 6; continue _fun0002 }
case 7:
                    var1 = _closure2_slot5;
                    var1 = var8 == var1;
                    var5 = var7;
                    if(var1) { _fun0002_ip = 4; continue _fun0002 }
case 6:
                    var1 = _closure2_slot5;
                    var2 = var8 != var1;
                    var1 = 'SUCCESS';
                    if(!var2) { _fun0002_ip = 8; continue _fun0002 }
case 9:
                    var1 = 'FAILED';
case 8:
                    var5 = var1;
case 4:
                    var1 = _closure2_slot6;
                    var1 = var1.current;
                    if(!(var5 !== var1)) { _fun0002_ip = 10; continue _fun0002 }
case 11:
                    var1 = _closure2_slot6;
                    var1['current'] = var5;
                    var4 = _closure1_slot1;
                    var3 = _closure1_slot2;
                    var2 = 12;
                    var3 = var3[var2];
                    var2 = undefined;
                    var4 = var4.bind(var2)(var3);
                    var3 = var4.track;
                    var1 = _closure1_slot7;
                    var2 = var1.GAME_UPDATE_ARTICLE_LOADED;
                    var1 = {};
                    var9 = _closure2_slot1;
                    var1['game_id'] = var9;
                    var9 = _closure2_slot0;
                    var1['game_update_id'] = var9;
                    var1['status'] = var5;
                    var9 = _closure2_slot7;
                    var9 = var9.current;
                    var1['start_timestamp'] = var9;
                    var7 = var7 === var5;
                    var5 = null;
                    if(var7) { _fun0002_ip = 12; continue _fun0002 }
case 13:
                    var9 = global;
                    var10 = var9.Date;
                    var9 = var10.now;
                    var5 = var9.bind(var10)();
case 12:
                    var1['end_timestamp'] = var5;
                    var5 = null;
                    if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 15:
                    var7 = _closure2_slot7;
                    var7 = var7.current;
                    var7 = var8 == var7;
                    var5 = null;
                    if(var7) { _fun0002_ip = 14; continue _fun0002 }
case 16:
                    var7 = global;
                    var8 = var7.Date;
                    var7 = var8.now;
                    var7 = var7.bind(var8)();
                    var6 = _closure2_slot7;
                    var6 = var6.current;
                    var5 = var7 - var6;
case 14:
                    var1['duration_millis'] = var5;
                    var1 = var3.bind(var4)(var2, var1);
case 10:
                    var1 = undefined;
                    return var1;
                }
            };
            var2 = var10.bind(var11)(var2, var9);
            var2 = 13;
            var2 = var6[var2];
            var2 = var8.bind(var4)(var2);
            var2 = var2.bind(var4)();
            var11 = var2.bottom;
            var2 = 14;
            var2 = var6[var2];
            var6 = var3.bind(var4)(var2);
            var3 = var6.useErrorToast;
            var2 = {};
            var2['isLoading'] = var14;
            var2['error'] = var7;
            var2 = var3.bind(var6)(var2);
            var2 = var28 == var1;
            var19 = undefined;
            if(var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
            var19 = var1.update;
case 17:
            _closure2_slot8 = var19;
            if(!(var28 != var39)) { _fun0001_ip = 19; continue _fun0001 }
case 20:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 15;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.isNullOrEmpty;
            var6 = var28 == var39;
            var1 = undefined;
            if(var6) { _fun0001_ip = 21; continue _fun0001 }
case 22:
            var1 = var39.iconHash;
case 21:
            var1 = var2.bind(var3)(var1);
            if(var1) { _fun0001_ip = 19; continue _fun0001 }
case 23:
            var2 = _closure1_slot1;
            var8 = _closure1_slot2;
            var6 = 16;
            var1 = var8[var6];
            var3 = var2.bind(var4)(var1);
            var2 = var3.getGameAssetURL;
            var1 = {};
            var7 = var39.applicationId;
            var1['id'] = var7;
            var7 = var39.iconHash;
            var1['hash'] = var7;
            var7 = 160;
            var1['size'] = var7;
            var7 = _closure1_slot0;
            var6 = var8[var6];
            var6 = var7.bind(var4)(var6);
            var7 = var6.SUPPORTS_WEBP;
            var6 = 'png';
            if(!var7) { _fun0001_ip = 24; continue _fun0001 }
case 25:
            var6 = 'webp';
case 24:
            var1['format'] = var6;
            var51 = var2.bind(var3)(var1);
            _fun0001_ip = 26; continue _fun0001;
case 19:
            var2 = var28 == var26;
            var1 = undefined;
            if(var2) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var6 = var26.getIconURL;
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 16;
            var2 = var7[var2];
            var2 = var3.bind(var4)(var2);
            var2 = var2.SUPPORTS_WEBP;
            var3 = 'png';
            if(!var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var3 = 'webp';
case 29:
            var2 = 160;
            var1 = var6.bind(var26)(var2, var3);
case 27:
            var51 = var1;
case 26:
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 17;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useGameUpdateTime;
            var1 = {};
            if(!(var28 == var5)) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var7 = var28 == var19;
            var6 = undefined;
            if(var7) { _fun0001_ip = 33; continue _fun0001 }
case 34:
            var6 = var19.startDate;
case 33:
            var5 = var6;
case 31:
            var1['startDate'] = var5;
            var1 = var2.bind(var3)(var1);
            var40 = var1.formattedStartDate;
            var48 = var1.relativeLabel;
            var49 = var1.labelColor;
            var2 = _closure1_slot1;
            var3 = _closure1_slot2;
            var1 = 18;
            var1 = var3[var1];
            var2 = var2.bind(var4)(var1);
            var1 = var51;
            if(!(var28 == var1)) { _fun0001_ip = 35; continue _fun0001 }
case 36:
            var5 = var28 == var19;
            var3 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 38:
            var6 = var19.images;
            var5 = var28 == var6;
            var3 = undefined;
            if(var5) { _fun0001_ip = 37; continue _fun0001 }
case 39:
            var5 = 0;
            var5 = var6[var5];
            var6 = var28 == var5;
            var3 = undefined;
            if(var6) { _fun0001_ip = 37; continue _fun0001 }
case 40:
            var3 = var5.uri;
case 37:
            var1 = var3;
case 35:
            var1 = var2.bind(var4)(var1);
            var37 = var1.primaryColor;
            var2 = _closure1_slot0;
            var3 = _closure1_slot2;
            var1 = 19;
            var1 = var3[var1];
            var3 = var2.bind(var4)(var1);
            var2 = var3.useOfficialServerInvite;
            var1 = {};
            var6 = var28 == var39;
            var5 = undefined;
            if(var6) { _fun0001_ip = 41; continue _fun0001 }
case 42:
            var8 = var39.websites;
            var6 = var28 == var8;
            var5 = undefined;
            if(var6) { _fun0001_ip = 41; continue _fun0001 }
case 43:
            var7 = var8.find;
            var6 = function(arg1) {
                var1 = arg1;
                var2 = var1.category;
                var4 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 20;
                var3 = var3[var1];
                var1 = undefined;
                var1 = var4.bind(var1)(var3);
                var1 = var1.IGDBWebsiteCategory;
                var1 = var1.DISCORD;
                var1 = var2 === var1;
                return var1;
            };
            var6 = var7.bind(var8)(var6);
            var7 = var28 == var6;
            var5 = undefined;
            if(var7) { _fun0001_ip = 41; continue _fun0001 }
case 44:
            var5 = var6.url;
case 41:
            var1['serverInviteUrl'] = var5;
            var34 = var2.bind(var3)(var1);
            var2 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 21;
            var1 = var5[var1];
            var3 = var2.bind(var4)(var1);
            var1 = var3.useAnimatedFooter;
            var1 = var1.bind(var3)();
            var9 = var1.progress;
            var10 = var1.handleScroll;
            var3 = var1.handleToggle;
            _closure2_slot9 = var3;
            var30 = var1.officialServerRef;
            var12 = var1.scrollViewRef;
            var7 = _closure1_slot3;
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var2 = _closure2_slot8;
                    var3 = null;
                    var4 = var3 == var2;
                    var2 = undefined;
                    if(var4) { _fun0003_ip = 45; continue _fun0003 }
case 3:
                    var4 = _closure2_slot8;
                    var2 = var4.platforms;
case 45:
                    if(!(var3 != var2)) { _fun0003_ip = 46; continue _fun0003 }
case 47:
                    var2 = global;
                    var3 = var2.Set;
                    var1 = _closure2_slot8;
                    var4 = var1.platforms;
                    var2 = var4.filter;
                    var1 = function(arg1) {
                        var2 = null;
                        var1 = arg1;
                        var1 = var2 != var1;
                        return var1;
                    };
                    var5 = var2.bind(var4)(var1);
                    var2 = var3.prototype;
                    var2 = Object.create(var2, {constructor: {value: var3}});
                    var6 = var2;
                    var1 = new var6[var3](var5, var4);
                    var1 = var1 instanceof Object ? var1 : var2;
                    _fun0003_ip = 11; continue _fun0003;
case 46:
                    var2 = global;
                    var2 = var2.Set;
                    var3 = var2.prototype;
                    var3 = Object.create(var3, {constructor: {value: var2}});
                    var6 = var3;
                    var2 = new var6[var2](var5);
                    var1 = var2 instanceof Object ? var2 : var3;
case 11:
                    return var1;
                }
            };
            var38 = var6.bind(var7)(var1, var3);
            var6 = var7.useMemo;
            var3 = new Array(1);
            var3[0] = var19;
            var1 = function() {
                _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
                    var3 = _closure2_slot8;
                    var2 = null;
                    if(!(var2 != var3)) { _fun0004_ip = 48; continue _fun0004 }
case 49:
                    var1 = _closure2_slot8;
                    var3 = var1.images;
                    var2 = var3.map;
                    var1 = function(arg1, arg2) {
                        var2 = arg1;
                        var1 = {};
                        var3 = var2.uri;
                        var1['uri'] = var3;
                        var3 = arg2;
                        var1['mediaIndex'] = var3;
                        var3 = var2.height;
                        var1['height'] = var3;
                        var2 = var2.width;
                        var1['width'] = var2;
                        var2 = 'attachment';
                        var1['accessoryType'] = var2;
                        return var1;
                    };
                    var1 = var2.bind(var3)(var1);
                    _fun0004_ip = 50; continue _fun0004;
case 48:
                    var1 = new Array(0);
case 50:
                    return var1;
                }
            };
            var35 = var6.bind(var7)(var1, var3);
            _closure2_slot10 = var35;
            var6 = var7.useCallback;
            var3 = new Array(3);
            var3[0] = var35;
            var3[1] = var23;
            var3[2] = var24;
            var1 = function(arg1) {
                _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
                    var1 = arg1;
                    var5 = var1.ref;
                    var6 = var1.initialIndex;
                    var7 = _closure1_slot1;
                    var4 = _closure1_slot2;
                    var1 = 12;
                    var3 = var4[var1];
                    var1 = undefined;
                    var10 = var7.bind(var1)(var3);
                    var9 = var10.track;
                    var3 = _closure1_slot7;
                    var8 = var3.GAME_UPDATE_ARTICLE_CLICKED;
                    var3 = {};
                    var11 = _closure2_slot1;
                    var3['game_id'] = var11;
                    var11 = _closure2_slot0;
                    var3['game_update_id'] = var11;
                    var11 = global;
                    var11 = var11.HermesInternal;
                    var12 = var11.concat;
                    var11 = 'OPEN_MEDIA_VIEWER_INDEX_';
                    var11 = var12.bind(var11)(var6);
                    var3['action'] = var11;
                    var3 = var9.bind(var10)(var8, var3);
                    var3 = _closure1_slot0;
                    var2 = 22;
                    var2 = var4[var2];
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.openMediaModal;
                    var2 = {'initialSources': null, 'initialIndex': null, 'analyticsSource': 'GameUpdate', 'disableMediaOverlayButton': true, 'shareable': false, 'isRNModal': true};
                    var7 = _closure2_slot10;
                    var2['initialSources'] = var7;
                    var2['initialIndex'] = var6;
                    var6 = var5.current;
                    var5 = null;
                    var7 = var5 != var6;
                    var5 = undefined;
                    if(!var7) { _fun0005_ip = 51; continue _fun0005 }
case 52:
                    var5 = var6;
case 51:
                    var2['origin'] = var5;
                    var2 = var3.bind(var4)(var2);
                    return var1;
                }
            };
            var32 = var6.bind(var7)(var1, var3);
            var3 = _closure1_slot10;
            var1 = 23;
            var1 = var5[var1];
            var1 = var2.bind(var4)(var1);
            var2 = var1.BottomSheet;
            var1 = {'scrollable': true, 'startExpanded': true, 'handleDisabled': true};
            var31 = true;
            var6 = var28 == var34;
            var5 = null;
            if(var6) { _fun0001_ip = 53; continue _fun0001 }
case 54:
            var8 = _closure1_slot8;
            var7 = _closure1_slot1;
            var13 = _closure1_slot2;
            var6 = 24;
            var6 = var13[var6];
            var7 = var7.bind(var4)(var6);
            var6 = {};
            var6['progress'] = var9;
            var9 = var34.invite;
            var6['invite'] = var9;
            var9 = function onJoinPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.GAME_UPDATE_ARTICLE_CLICKED;
                var2 = {};
                var7 = _closure2_slot1;
                var2['game_id'] = var7;
                var6 = _closure2_slot0;
                var2['game_update_id'] = var6;
                var6 = 'JOIN_SERVER_FLOATING';
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var6['onJoinPress'] = var9;
            var5 = var8.bind(var4)(var7, var6);
case 53:
            var1['footer'] = var5;
            var7 = _closure1_slot8;
            var6 = _closure1_slot5;
            var5 = {};
            var8 = var22.floatingHandle;
            var5['style'] = var8;
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var13 = 25;
            var8 = var16[var13];
            var8 = var15.bind(var4)(var8);
            var9 = var8.ActionSheetHeaderBar;
            var8 = {};
            var17 = var22.tabStyle;
            var8['tabStyle'] = var17;
            var13 = var16[var13];
            var13 = var15.bind(var4)(var13);
            var13 = var13.ActionSheetHeaderBarVariants;
            var13 = var13.FLOATING;
            var8['variant'] = var13;
            var13 = function onPress() {
                var3 = _closure1_slot1;
                var2 = _closure1_slot2;
                var1 = 26;
                var2 = var2[var1];
                var1 = undefined;
                var2 = var3.bind(var1)(var2);
                var1 = var2.hideActionSheet;
                var1 = var1.bind(var2)();
                return var1;
            };
            var8['onPress'] = var13;
            var8 = var7.bind(var4)(var9, var8);
            var5['children'] = var8;
            var6 = var7.bind(var4)(var6, var5);
            var5 = new Array(2);
            var5[0] = var6;
            if(var14) { _fun0001_ip = 55; continue _fun0001 }
case 56:
            var7 = var28 == var19;
            var6 = null;
            if(var7) { _fun0001_ip = 57; continue _fun0001 }
case 55:
            var7 = var28 == var39;
            var6 = null;
            if(var7) { _fun0001_ip = 57; continue _fun0001 }
case 58:
            var9 = _closure1_slot8;
            var20 = _closure1_slot0;
            var18 = _closure1_slot2;
            var7 = 27;
            var7 = var18[var7];
            var7 = var20.bind(var4)(var7);
            var8 = var7.BottomSheetScrollView;
            var7 = {};
            var13 = var22.scrollView;
            var7['style'] = var13;
            var7['ref'] = var12;
            var7['onScroll'] = var10;
            var10 = {};
            var10['paddingBottom'] = var11;
            var7['contentContainerStyle'] = var10;
            var12 = _closure1_slot10;
            var11 = _closure1_slot5;
            var10 = {};
            var13 = var22.content;
            var10['style'] = var13;
            var13 = {};
            var15 = var22.gradientContainer;
            var13['style'] = var15;
            var15 = 28;
            var15 = var18[var15];
            var15 = var20.bind(var4)(var15);
            var16 = var15.LinearGradient;
            var15 = {};
            var17 = new Array(2);
            var17[0] = var37;
            var25 = 29;
            var25 = var18[var25];
            var36 = var20.bind(var4)(var25);
            var29 = var36.darkenColor;
            var25 = 0.3;
            var25 = var29.bind(var36)(var37, var25);
            var17[1] = var25;
            var15['colors'] = var17;
            var17 = [0, 1];
            var15['locations'] = var17;
            var37 = 0;
            var17 = {'x': 0, 'y': 1};
            var15['start'] = var17;
            var17 = {'x': 1, 'y': 0};
            var15['end'] = var17;
            var17 = var22.gradient;
            var15['style'] = var17;
            var16 = var9.bind(var4)(var16, var15);
            var15 = new Array(3);
            var15[0] = var16;
            var16 = {};
            var17 = var22.timestampRow;
            var16['style'] = var17;
            var29 = 30;
            var17 = var18[var29];
            var17 = var20.bind(var4)(var17);
            var25 = var17.Text;
            var17 = {'variant': 'text-xs/semibold', 'color': 'content-inventory-overlay-text-secondary'};
            var50 = 'text-xs/semibold';
            var36 = 31;
            var41 = var18[var36];
            var41 = var20.bind(var4)(var41);
            var45 = var41.intl;
            var44 = var45.string;
            var46 = _closure1_slot1;
            var42 = 32;
            var41 = var18[var42];
            var41 = var46.bind(var4)(var41);
            var41 = var41.OacAil;
            var41 = var44.bind(var45)(var41);
            var17['children'] = var41;
            var25 = var9.bind(var4)(var25, var17);
            var17 = new Array(3);
            var17[0] = var25;
            var18 = var18[var29];
            var18 = var20.bind(var4)(var18);
            var20 = var18.Text;
            var18 = {'variant': 'text-xs/semibold', 'color': 'content-inventory-overlay-text-secondary'};
            var18['children'] = var40;
            var18 = var9.bind(var4)(var20, var18);
            var17[1] = var18;
            var18 = var28 != var48;
            if(!var18) { _fun0001_ip = 59; continue _fun0001 }
case 60:
            var41 = _closure1_slot10;
            var25 = _closure1_slot9;
            var20 = {};
            var47 = _closure1_slot8;
            var46 = _closure1_slot0;
            var45 = _closure1_slot2;
            var44 = var45[var29];
            var44 = var46.bind(var4)(var44);
            var52 = var44.Text;
            var44 = {'variant': 'text-xs/semibold', 'color': 'content-inventory-overlay-text-secondary', 'children': '•'};
            var52 = var47.bind(var4)(var52, var44);
            var44 = new Array(2);
            var44[0] = var52;
            var45 = var45[var29];
            var45 = var46.bind(var4)(var45);
            var46 = var45.Text;
            var45 = {};
            var45['variant'] = var50;
            var45['color'] = var49;
            var45['children'] = var48;
            var45 = var47.bind(var4)(var46, var45);
            var44[1] = var45;
            var20['children'] = var44;
            var18 = var41.bind(var4)(var25, var20);
case 59:
            var17[2] = var18;
            var16['children'] = var17;
            var16 = var12.bind(var4)(var11, var16);
            var15[1] = var16;
            var18 = _closure1_slot10;
            var17 = _closure1_slot5;
            var16 = {};
            var20 = var22.gameHeaderContainer;
            var16['style'] = var20;
            var41 = _closure1_slot8;
            var25 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var29];
            var20 = var25.bind(var4)(var20);
            var25 = var20.Text;
            var20 = {'variant': 'heading-xl/medium', 'color': 'content-inventory-overlay-text-secondary'};
            if(!(var28 == var43)) { _fun0001_ip = 61; continue _fun0001 }
case 62:
            var45 = var28 == var19;
            var44 = undefined;
            if(var45) { _fun0001_ip = 63; continue _fun0001 }
case 64:
            var44 = var19.updateTitle;
case 63:
            var43 = var44;
case 61:
            var20['children'] = var43;
            var25 = var41.bind(var4)(var25, var20);
            var20 = new Array(2);
            var20[0] = var25;
            var43 = _closure1_slot10;
            var41 = _closure1_slot5;
            var25 = {};
            var44 = var22.gameHeaderRow;
            var25['style'] = var44;
            var45 = var28 != var51;
            if(!var45) { _fun0001_ip = 65; continue _fun0001 }
case 66:
            var47 = _closure1_slot8;
            var46 = _closure1_slot5;
            var44 = {};
            var48 = var22.gameIconContainer;
            var44['style'] = var48;
            var49 = _closure1_slot4;
            var48 = {};
            var50 = {};
            var50['uri'] = var51;
            var48['source'] = var50;
            var50 = var22.gameIcon;
            var48['style'] = var50;
            var51 = _closure1_slot0;
            var50 = _closure1_slot2;
            var52 = var50[var36];
            var52 = var51.bind(var4)(var52);
            var53 = var52.intl;
            var52 = var53.formatToPlainString;
            var50 = var50[var36];
            var50 = var51.bind(var4)(var50);
            var50 = var50.t;
            var51 = var50.nh+jWk;
            var50 = {};
            var55 = var28 == var26;
            var54 = undefined;
            if(var55) { _fun0001_ip = 67; continue _fun0001 }
case 68:
            var54 = var26.name;
case 67:
            var50['game'] = var54;
            var50 = var52.bind(var53)(var51, var50);
            var48['alt'] = var50;
            var48 = var47.bind(var4)(var49, var48);
            var44['children'] = var48;
            var45 = var47.bind(var4)(var46, var44);
case 65:
            var44 = new Array(2);
            var44[0] = var45;
            var47 = _closure1_slot8;
            var46 = _closure1_slot0;
            var45 = _closure1_slot2;
            var45 = var45[var29];
            var45 = var46.bind(var4)(var45);
            var46 = var45.Text;
            var45 = {'variant': 'text-md/medium', 'color': 'content-inventory-overlay-text-secondary'};
            var49 = var28 == var26;
            var48 = undefined;
            if(var49) { _fun0001_ip = 69; continue _fun0001 }
case 70:
            var48 = var26.name;
case 69:
            var45['children'] = var48;
            var45 = var47.bind(var4)(var46, var45);
            var44[1] = var45;
            var25['children'] = var44;
            var25 = var43.bind(var4)(var41, var25);
            var20[1] = var25;
            var16['children'] = var20;
            var16 = var18.bind(var4)(var17, var16);
            var15[2] = var16;
            var13['children'] = var15;
            var15 = var12.bind(var4)(var11, var13);
            var13 = new Array(5);
            var13[0] = var15;
            if(var14) { _fun0001_ip = 71; continue _fun0001 }
case 72:
            var15 = var35.length;
            var15 = var15 > var37;
            if(!var15) { _fun0001_ip = 73; continue _fun0001 }
case 74:
            var18 = _closure1_slot8;
            var17 = _closure1_slot5;
            var16 = {};
            var25 = _closure1_slot0;
            var41 = _closure1_slot2;
            var20 = 34;
            var20 = var41[var20];
            var20 = var25.bind(var4)(var20);
            var25 = var20.GravityAttachmentMediaMosaic;
            var20 = {};
            var20['sources'] = var35;
            var20['handlePressMedia'] = var32;
            var20['visible'] = var31;
            var31 = global;
            var32 = var31.Math;
            var31 = var32.max;
            var27 = var27 - var42;
            var27 = var31.bind(var32)(var27, var37);
            var20['widthOverride'] = var27;
            var20 = var18.bind(var4)(var25, var20);
            var16['children'] = var20;
            var15 = var18.bind(var4)(var17, var16);
case 73:
            _fun0001_ip = 75; continue _fun0001;
case 71:
            var18 = _closure1_slot8;
            var17 = _closure1_slot0;
            var20 = _closure1_slot2;
            var16 = 33;
            var16 = var20[var16];
            var16 = var17.bind(var4)(var16);
            var17 = var16.GameUpdateImagePlaceholder;
            var16 = {};
            var15 = var18.bind(var4)(var17, var16);
case 75:
            var13[1] = var15;
            var17 = _closure1_slot8;
            var16 = _closure1_slot0;
            var18 = _closure1_slot2;
            if(var14) { _fun0001_ip = 76; continue _fun0001 }
case 77:
            var14 = 35;
            var14 = var18[var14];
            var14 = var16.bind(var4)(var14);
            var15 = var14.TruncatedText;
            var14 = {'variant': 'text-md/normal', 'lineClamp': 12};
            var20 = function onToggle(arg1) {
                _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
                    var2 = _closure2_slot9;
                    var1 = undefined;
                    var2 = var2.bind(var1)();
                    var4 = _closure1_slot1;
                    var5 = _closure1_slot2;
                    var3 = 12;
                    var3 = var5[var3];
                    var5 = var4.bind(var1)(var3);
                    var4 = var5.track;
                    var2 = _closure1_slot7;
                    var3 = var2.GAME_UPDATE_ARTICLE_CLICKED;
                    var2 = {};
                    var7 = _closure2_slot1;
                    var2['game_id'] = var7;
                    var6 = _closure2_slot0;
                    var2['game_update_id'] = var6;
                    var6 = 'TOGGLE_SHOW_MORE';
                    var7 = arg1;
                    if(!var7) { _fun0006_ip = 78; continue _fun0006 }
case 79:
                    var6 = 'TOGGLE_SHOW_LESS';
case 78:
                    var2['action'] = var6;
                    var2 = var4.bind(var5)(var3, var2);
                    return var1;
                }
            };
            var14['onToggle'] = var20;
            var25 = var28 == var19;
            var20 = undefined;
            if(var25) { _fun0001_ip = 80; continue _fun0001 }
case 81:
            var20 = var19.updateDescription;
case 80:
            var14['children'] = var20;
            var14 = var17.bind(var4)(var15, var14);
            _fun0001_ip = 82; continue _fun0001;
case 76:
            var15 = 33;
            var15 = var18[var15];
            var15 = var16.bind(var4)(var15);
            var16 = var15.GameUpdateTextPlaceholder;
            var15 = {};
            var14 = var17.bind(var4)(var16, var15);
case 82:
            var13[2] = var14;
            var15 = var28 == var19;
            var14 = undefined;
            if(var15) { _fun0001_ip = 83; continue _fun0001 }
case 84:
            var15 = var19.tags;
            var16 = var28 == var15;
            var14 = undefined;
            if(var16) { _fun0001_ip = 83; continue _fun0001 }
case 85:
            var14 = var15.length;
case 83:
            var14 = var28 != var14;
            if(!var14) { _fun0001_ip = 86; continue _fun0001 }
case 87:
            var15 = var19.tags;
            var15 = var15.length;
            var14 = var15 > var37;
case 86:
            if(!var14) { _fun0001_ip = 88; continue _fun0001 }
case 89:
            var17 = _closure1_slot8;
            var16 = _closure1_slot5;
            var15 = {};
            var18 = var22.tagsContainer;
            var15['style'] = var18;
            var20 = var28 == var19;
            var18 = undefined;
            if(var20) { _fun0001_ip = 90; continue _fun0001 }
case 91:
            var25 = var19.tags;
            var20 = var25.map;
            var19 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot8;
                var3 = _closure1_slot5;
                var2 = {};
                var6 = _closure2_slot2;
                var6 = var6.tagWrapper;
                var2['style'] = var6;
                var7 = _closure1_slot0;
                var6 = _closure1_slot2;
                var1 = 30;
                var6 = var6[var1];
                var1 = undefined;
                var6 = var7.bind(var1)(var6);
                var7 = var6.Text;
                var6 = {};
                var8 = 'text-xs/medium';
                var6['variant'] = var8;
                var6['children'] = var5;
                var6 = var4.bind(var1)(var7, var6);
                var2['children'] = var6;
                var1 = var4.bind(var1)(var3, var2, var5);
                return var1;
            };
            var18 = var20.bind(var25)(var19);
case 90:
            var15['children'] = var18;
            var14 = var17.bind(var4)(var16, var15);
case 88:
            var13[3] = var14;
            var16 = _closure1_slot10;
            var15 = _closure1_slot5;
            var14 = {};
            var17 = var39.publishers;
            var17 = var17.length;
            var18 = var17 > var37;
            if(!var18) { _fun0001_ip = 92; continue _fun0001 }
case 93:
            var20 = _closure1_slot10;
            var19 = _closure1_slot5;
            var17 = {};
            var25 = var22.infoRow;
            var17['style'] = var25;
            var31 = _closure1_slot8;
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var25 = var32[var29];
            var25 = var35.bind(var4)(var25);
            var27 = var25.Text;
            var25 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var41 = var32[var36];
            var41 = var35.bind(var4)(var41);
            var44 = var41.intl;
            var43 = var44.string;
            var41 = var32[var36];
            var41 = var35.bind(var4)(var41);
            var41 = var41.t;
            var41 = var41.4Byy/G;
            var41 = var43.bind(var44)(var41);
            var25['children'] = var41;
            var27 = var31.bind(var4)(var27, var25);
            var25 = new Array(2);
            var25[0] = var27;
            var27 = {};
            var41 = var22.publishersContainer;
            var27['style'] = var41;
            var32 = var32[var29];
            var32 = var35.bind(var4)(var32);
            var35 = var32.Text;
            var32 = {'variant': 'text-sm/normal', 'color': 'text-strong'};
            var43 = var39.publishers;
            var41 = var43.join;
            var39 = ', ';
            var39 = var41.bind(var43)(var39);
            var32['children'] = var39;
            var32 = var31.bind(var4)(var35, var32);
            var27['children'] = var32;
            var27 = var31.bind(var4)(var19, var27);
            var25[1] = var27;
            var17['children'] = var25;
            var18 = var20.bind(var4)(var19, var17);
case 92:
            var17 = new Array(5);
            var17[0] = var18;
            var25 = '';
            var18 = var25 !== var40;
            if(!var18) { _fun0001_ip = 94; continue _fun0001 }
case 95:
            var27 = _closure1_slot10;
            var20 = _closure1_slot5;
            var19 = {};
            var31 = var22.infoRow;
            var19['style'] = var31;
            var39 = _closure1_slot8;
            var35 = _closure1_slot0;
            var32 = _closure1_slot2;
            var31 = var32[var29];
            var31 = var35.bind(var4)(var31);
            var41 = var31.Text;
            var31 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var43 = var32[var36];
            var43 = var35.bind(var4)(var43);
            var44 = var43.intl;
            var43 = var44.string;
            var45 = _closure1_slot1;
            var42 = var32[var42];
            var42 = var45.bind(var4)(var42);
            var42 = var42.OacAil;
            var42 = var43.bind(var44)(var42);
            var31['children'] = var42;
            var41 = var39.bind(var4)(var41, var31);
            var31 = new Array(2);
            var31[0] = var41;
            var32 = var32[var29];
            var32 = var35.bind(var4)(var32);
            var35 = var32.Text;
            var32 = {'variant': 'text-sm/normal', 'color': 'text-strong'};
            var32['children'] = var40;
            var32 = var39.bind(var4)(var35, var32);
            var31[1] = var32;
            var19['children'] = var31;
            var18 = var27.bind(var4)(var20, var19);
case 94:
            var17[1] = var18;
            var18 = var38.size;
            var18 = var18 > var37;
            if(!var18) { _fun0001_ip = 96; continue _fun0001 }
case 97:
            var27 = _closure1_slot10;
            var20 = _closure1_slot5;
            var19 = {};
            var31 = var22.infoRow;
            var19['style'] = var31;
            var35 = _closure1_slot8;
            var42 = _closure1_slot0;
            var39 = _closure1_slot2;
            var31 = var39[var29];
            var31 = var42.bind(var4)(var31);
            var32 = var31.Text;
            var31 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var40 = var39[var36];
            var40 = var42.bind(var4)(var40);
            var41 = var40.intl;
            var40 = var41.string;
            var39 = var39[var36];
            var39 = var42.bind(var4)(var39);
            var39 = var39.t;
            var39 = var39.PNqxNe;
            var39 = var40.bind(var41)(var39);
            var31['children'] = var39;
            var32 = var35.bind(var4)(var32, var31);
            var31 = new Array(2);
            var31[0] = var32;
            var32 = {};
            var39 = var22.platformsContainer;
            var32['style'] = var39;
            var39 = new Array(0);
            var58 = var39;
            var57 = var38;
            var56 = 0;
            var37 = arraySpread(var58, var57, var56);
            var38 = var39.map;
            var37 = function(arg1) {
                var5 = arg1;
                var4 = _closure1_slot8;
                var2 = _closure1_slot0;
                var3 = _closure1_slot2;
                var1 = 36;
                var1 = var3[var1];
                var3 = undefined;
                var1 = var2.bind(var3)(var1);
                var2 = var1.GameUpdatePlatformIcon;
                var1 = {};
                var1['platform'] = var5;
                var1 = var4.bind(var3)(var2, var1, var5);
                return var1;
            };
            var37 = var38.bind(var39)(var37);
            var32['children'] = var37;
            var32 = var35.bind(var4)(var20, var32);
            var31[1] = var32;
            var19['children'] = var31;
            var18 = var27.bind(var4)(var20, var19);
case 96:
            var17[2] = var18;
            var18 = var28 != var34;
            if(!var18) { _fun0001_ip = 98; continue _fun0001 }
case 99:
            var27 = _closure1_slot10;
            var20 = _closure1_slot5;
            var19 = {};
            var31 = var22.officialServerInfoRow;
            var19['style'] = var31;
            var19['ref'] = var30;
            var32 = _closure1_slot8;
            var31 = _closure1_slot0;
            var35 = _closure1_slot2;
            var29 = var35[var29];
            var29 = var31.bind(var4)(var29);
            var30 = var29.Text;
            var29 = {'variant': 'text-sm/semibold', 'color': 'text-subtle'};
            var37 = var35[var36];
            var37 = var31.bind(var4)(var37);
            var38 = var37.intl;
            var37 = var38.string;
            var36 = var35[var36];
            var36 = var31.bind(var4)(var36);
            var36 = var36.t;
            var36 = var36.kBDZSL;
            var36 = var37.bind(var38)(var36);
            var29['children'] = var36;
            var30 = var32.bind(var4)(var30, var29);
            var29 = new Array(2);
            var29[0] = var30;
            var30 = 37;
            var30 = var35[var30];
            var30 = var31.bind(var4)(var30);
            var31 = var30.GameUpdateServerInvite;
            var30 = {};
            var34 = var34.invite;
            var30['invite'] = var34;
            var33 = function onJoinPress() {
                var4 = _closure1_slot1;
                var3 = _closure1_slot2;
                var1 = 12;
                var3 = var3[var1];
                var1 = undefined;
                var5 = var4.bind(var1)(var3);
                var4 = var5.track;
                var2 = _closure1_slot7;
                var3 = var2.GAME_UPDATE_ARTICLE_CLICKED;
                var2 = {};
                var7 = _closure2_slot1;
                var2['game_id'] = var7;
                var6 = _closure2_slot0;
                var2['game_update_id'] = var6;
                var6 = 'JOIN_SERVER_FULL';
                var2['action'] = var6;
                var2 = var4.bind(var5)(var3, var2);
                return var1;
            };
            var30['onJoinPress'] = var33;
            var30 = var32.bind(var4)(var31, var30);
            var29[1] = var30;
            var19['children'] = var29;
            var18 = var27.bind(var4)(var20, var19);
case 98:
            var17[3] = var18;
            var20 = _closure1_slot8;
            var19 = _closure1_slot5;
            var18 = {};
            var22 = var22.infoRow;
            var18['style'] = var22;
            var22 = _closure1_slot0;
            var27 = _closure1_slot2;
            var21 = 38;
            var21 = var27[var21];
            var21 = var22.bind(var4)(var21);
            var22 = var21.GameUpdateFeedbackModule;
            var21 = {};
            var29 = var28 == var26;
            var27 = undefined;
            if(var29) { _fun0001_ip = 100; continue _fun0001 }
case 101:
            var27 = var26.name;
case 100:
            var27 = var28 == var27;
            if(var27) { _fun0001_ip = 102; continue _fun0001 }
case 103:
            var25 = var26.name;
case 102:
            var21['gameName'] = var25;
            var21['gameUpdateId'] = var24;
            var21['gameId'] = var23;
            var21 = var20.bind(var4)(var22, var21);
            var18['children'] = var21;
            var18 = var20.bind(var4)(var19, var18);
            var17[4] = var18;
            var14['children'] = var17;
            var14 = var16.bind(var4)(var15, var14);
            var13[4] = var14;
            var10['children'] = var13;
            var10 = var12.bind(var4)(var11, var10);
            var7['children'] = var10;
            var6 = var9.bind(var4)(var8, var7);
case 57:
            var5[1] = var6;
            var1['children'] = var5;
            var1 = var3.bind(var4)(var2, var1);
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();