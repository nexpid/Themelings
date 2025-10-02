// app/modules/forums/native/ForumPost.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var5 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var5;
    var _closure1_slot2 = var7;
    var1 = function ForumPostGrid(arg1) {
        var1 = arg1;
        var11 = var1.firstMessage;
        var10 = var1.hasUnreads;
        var15 = var1.isNew;
        var16 = var1.media;
        var9 = var1.parentChannel;
        var12 = var1.thread;
        var4 = _closure1_slot8;
        var3 = _closure1_slot7;
        var2 = {};
        var14 = _closure1_slot6;
        var7 = _closure1_slot1;
        var13 = _closure1_slot2;
        var1 = 5;
        var5 = var13[var1];
        var1 = undefined;
        var8 = var7.bind(var1)(var5);
        var5 = {};
        var5['thread'] = var12;
        var5['hasUnreads'] = var10;
        var5['isNew'] = var15;
        var8 = var14.bind(var1)(var8, var5);
        var5 = new Array(3);
        var5[0] = var8;
        var15 = _closure1_slot6;
        var8 = 6;
        var8 = var13[var8];
        var14 = var7.bind(var1)(var8);
        var8 = {};
        var8['thread'] = var12;
        var8['hasUnreads'] = var10;
        var8['media'] = var16;
        var8 = var15.bind(var1)(var14, var8);
        var5[1] = var8;
        var8 = _closure1_slot6;
        var6 = 7;
        var6 = var13[var6];
        var7 = var7.bind(var1)(var6);
        var6 = {};
        var6['thread'] = var12;
        var6['firstMessage'] = var11;
        var6['hasUnreads'] = var10;
        var6['parentChannel'] = var9;
        var6 = var8.bind(var1)(var7, var6);
        var5[2] = var6;
        var2['children'] = var5;
        var1 = var4.bind(var1)(var3, var2);
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function ConnectedForumPost(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var3 = var2.threadId;
            var _closure2_slot0 = var3;
            var8 = var2.style;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 8;
            var3 = var5[var2];
            var6 = undefined;
            var11 = var4.bind(var6)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot3;
            var9 = new Array(1);
            var9[0] = var3;
            var3 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var16 = var10.bind(var11)(var9, var3);
            var9 = _closure1_slot1;
            var3 = 9;
            var3 = var5[var3];
            var10 = var9.bind(var6)(var3);
            var13 = null;
            var9 = var13 != var16;
            var3 = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            var3 = var10.bind(var6)(var9, var3);
            var9 = var16.parent_id;
            var _closure2_slot1 = var9;
            var3 = _closure1_slot5;
            var3 = var3.bind(var6)(var9);
            var3 = var3.layoutType;
            var9 = var5[var2];
            var12 = var4.bind(var6)(var9);
            var11 = var12.useStateFromStores;
            var9 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var9;
            var9 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var15 = var11.bind(var12)(var10, var9);
            var9 = 10;
            var9 = var5[var9];
            var10 = var4.bind(var6)(var9);
            var9 = var10.useFirstForumPostMessage;
            var9 = var9.bind(var10)(var16);
            var14 = var9.firstMessage;
            var _closure2_slot2 = var14;
            var18 = var9.loaded;
            var9 = 11;
            var10 = var5[var9];
            var11 = var4.bind(var6)(var10);
            var10 = var11.useForumPostReadStates;
            var11 = var10.bind(var11)(var16);
            var10 = var11.isNew;
            var12 = var11.hasUnreads;
            var9 = var5[var9];
            var17 = var4.bind(var6)(var9);
            var11 = var17.useForumPostFirstMessageMarkup;
            var9 = {};
            var9['firstMessage'] = var14;
            var9 = var11.bind(var17)(var9);
            var21 = var9.content;
            var17 = var9.hasSpoilerEmbeds;
            var9 = 14;
            var11 = var5[var9];
            var19 = var4.bind(var6)(var11);
            var11 = var19.useForumPostMediaThumbnail;
            var19 = var11.bind(var19)(var14, var15, var17);
            var9 = var5[var9];
            var11 = var4.bind(var6)(var9);
            var9 = var11.useFirstMediaIsEmbed;
            var20 = var9.bind(var11)(var14, var17);
            var2 = var5[var2];
            var5 = var4.bind(var6)(var2);
            var4 = var5.useStateFromStoresObject;
            var9 = _closure1_slot4;
            var2 = new Array(1);
            var2[0] = var9;
            var1 = function() {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
                    var1 = {};
                    var2 = _closure2_slot2;
                    var4 = null;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 2; continue _fun0002 }
case 3:
                    var7 = _closure1_slot4;
                    var6 = var7.isBlockedForMessage;
                    var5 = _closure2_slot2;
                    var2 = var6.bind(var7)(var5);
case 2:
                    var1['isBlocked'] = var2;
                    var2 = _closure2_slot2;
                    var2 = var4 != var2;
                    if(!var2) { _fun0002_ip = 4; continue _fun0002 }
case 5:
                    var5 = _closure1_slot4;
                    var4 = var5.isIgnoredForMessage;
                    var3 = _closure2_slot2;
                    var2 = var4.bind(var5)(var3);
case 4:
                    var1['isIgnored'] = var2;
                    return var1;
                }
            };
            var1 = var4.bind(var5)(var2, var1);
            var11 = var1.isBlocked;
            var2 = var1.isIgnored;
            var1 = null;
            if(!var18) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            if(var11) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 10:
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var2 = 15;
            var2 = var5[var2];
            var2 = var4.bind(var6)(var2);
            var2 = var2.ForumLayout;
            var2 = var2.GRID;
            if(!(var3 === var2)) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var3 = var19.length;
            var2 = 0;
            if(!(!(var3 > var2))) { _fun0001_ip = 13; continue _fun0001 }
case 11:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var22 = _closure1_slot2;
            var2 = 12;
            var2 = var22[var2];
            var2 = var3.bind(var6)(var2);
            var3 = var2.ForumPostPressableContainer;
            var2 = {};
            var2['style'] = var8;
            var5 = var16.id;
            var2['threadId'] = var5;
            var17 = _closure1_slot6;
            var9 = _closure1_slot1;
            var5 = 13;
            var5 = var22[var5];
            var9 = var9.bind(var6)(var5);
            var5 = {};
            var5['thread'] = var16;
            var5['parentChannel'] = var15;
            var5['firstMessage'] = var14;
            var5['messageContent'] = var21;
            var21 = 0;
            var21 = var19[var21];
            var5['media'] = var21;
            var5['isEmbed'] = var20;
            var5['hasUnreads'] = var12;
            var5['isNew'] = var10;
            var5['firstMessageLoaded'] = var18;
            var18 = false;
            var5['isLocalDeviceMedia'] = var18;
            var5 = var17.bind(var6)(var9, var5);
            var2['children'] = var5;
            var2 = var4.bind(var6)(var3, var2);
            _fun0001_ip = 14; continue _fun0001;
case 13:
            var5 = _closure1_slot6;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 12;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ForumPostPressableContainer;
            var3 = {};
            var3['style'] = var8;
            var9 = var16.id;
            var3['threadId'] = var9;
            var18 = _closure1_slot6;
            var17 = _closure1_slot9;
            var9 = {};
            var9['thread'] = var16;
            var9['media'] = var19;
            var9['parentChannel'] = var15;
            var9['firstMessage'] = var14;
            var9['hasUnreads'] = var12;
            var9['isNew'] = var10;
            var9 = var18.bind(var6)(var17, var9);
            var3['children'] = var9;
            var2 = var5.bind(var6)(var4, var3);
case 14:
            _fun0001_ip = 15; continue _fun0001;
case 8:
            var5 = _closure1_slot6;
            var4 = _closure1_slot0;
            var17 = _closure1_slot2;
            var3 = 12;
            var3 = var17[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.ForumPostPressableContainer;
            var3 = {};
            var3['style'] = var8;
            var8 = var16.id;
            var3['threadId'] = var8;
            var9 = _closure1_slot6;
            var8 = _closure1_slot1;
            var7 = 13;
            var7 = var17[var7];
            var8 = var8.bind(var6)(var7);
            var7 = {};
            var7['thread'] = var16;
            var7['parentChannel'] = var15;
            var7['firstMessage'] = var14;
            var7['messageContent'] = var13;
            var7['media'] = var13;
            var7['hasUnreads'] = var12;
            var7['isNew'] = var10;
            var10 = true;
            var7['firstMessageLoaded'] = var10;
            var10 = false;
            var7['isLocalDeviceMedia'] = var10;
            var10 = 'ignored';
            if(!var11) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = 'blocked';
case 16:
            var7['senderModifier'] = var10;
            var7 = var9.bind(var6)(var8, var7);
            var3['children'] = var7;
            var2 = var5.bind(var6)(var4, var3);
case 15:
            var1 = var2;
case 6:
            return var1;
        }
    };
    var _closure1_slot10 = var1;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var8 = var7[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var8 = var4.bind(var1)(var8);
    var4 = 1;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var7[var4];
    var4 = var5.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 3;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var4 = var4.useForumChannelStore;
    var _closure1_slot5 = var4;
    var4 = 4;
    var4 = var7[var4];
    var4 = var6.bind(var1)(var4);
    var5 = var4.jsx;
    var _closure1_slot6 = var5;
    var5 = var4.Fragment;
    var _closure1_slot7 = var5;
    var4 = var4.jsxs;
    var _closure1_slot8 = var4;
    var5 = var8.memo;
    var4 = function(arg1) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var6 = arg1;
            var _closure2_slot0 = var6;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var3 = 8;
            var3 = var5[var3];
            var5 = undefined;
            var7 = var4.bind(var5)(var3);
            var4 = var7.useStateFromStores;
            var8 = _closure1_slot3;
            var3 = new Array(1);
            var3[0] = var8;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var1.threadId;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var3 = var4.bind(var7)(var3, var1);
            var1 = null;
            var3 = var1 == var3;
            if(var3) { _fun0003_ip = 18; continue _fun0003 }
case 19:
            var4 = _closure1_slot6;
            var3 = _closure1_slot10;
            var2 = {};
            var10 = var2;
            var9 = var6;
            var6 = copyDataProperties(var10, var9);
            var1 = var4.bind(var5)(var3, var2);
case 18:
            return var1;
        }
    };
    var4 = var5.bind(var8)(var4);
    var5 = 16;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/native/ForumPost.tsx';
    var5 = var6.bind(var7)(var5);
    var3['default'] = var4;
    var2 = function ForumPostListDisabled(arg1) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var1 = arg1;
            var7 = var1.style;
            var9 = var1.localDeviceMedia;
            var1 = var1.threadId;
            var _closure2_slot0 = var1;
            var3 = _closure1_slot0;
            var4 = _closure1_slot2;
            var8 = 8;
            var1 = var4[var8];
            var5 = undefined;
            var12 = var3.bind(var5)(var1);
            var11 = var12.useStateFromStores;
            var1 = _closure1_slot3;
            var10 = new Array(1);
            var10[0] = var1;
            var1 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var14 = var11.bind(var12)(var10, var1);
            var _closure2_slot1 = var14;
            var10 = _closure1_slot1;
            var1 = 9;
            var1 = var4[var1];
            var12 = var10.bind(var5)(var1);
            var1 = null;
            var11 = var1 != var14;
            var10 = '[Forum Post] The thread should not be null here. A store must have missed an update.';
            var10 = var12.bind(var5)(var11, var10);
            var8 = var4[var8];
            var11 = var3.bind(var5)(var8);
            var10 = var11.useStateFromStores;
            var12 = _closure1_slot3;
            var8 = new Array(1);
            var8[0] = var12;
            var2 = function() {
                var3 = _closure1_slot3;
                var2 = var3.getChannel;
                var1 = _closure2_slot1;
                var1 = var1.parent_id;
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var13 = var10.bind(var11)(var8, var2);
            var2 = 10;
            var2 = var4[var2];
            var8 = var3.bind(var5)(var2);
            var2 = var8.useFirstForumPostMessage;
            var2 = var2.bind(var8)(var14);
            var12 = var2.firstMessage;
            var10 = var2.loaded;
            var2 = 11;
            var2 = var4[var2];
            var4 = var3.bind(var5)(var2);
            var3 = var4.useForumPostFirstMessageMarkup;
            var2 = {};
            var2['firstMessage'] = var12;
            var2 = var3.bind(var4)(var2);
            var11 = var2.content;
            if(!var10) { _fun0004_ip = 20; continue _fun0004 }
case 21:
            var4 = _closure1_slot6;
            var3 = _closure1_slot0;
            var15 = _closure1_slot2;
            var2 = 12;
            var2 = var15[var2];
            var2 = var3.bind(var5)(var2);
            var3 = var2.ForumPostDisabledContainer;
            var2 = {};
            var2['style'] = var7;
            var8 = _closure1_slot6;
            var7 = _closure1_slot1;
            var6 = 13;
            var6 = var15[var6];
            var7 = var7.bind(var5)(var6);
            var6 = {};
            var6['thread'] = var14;
            var6['parentChannel'] = var13;
            var6['firstMessage'] = var12;
            var6['messageContent'] = var11;
            var6['media'] = var9;
            var9 = true;
            var6['hasUnreads'] = var9;
            var11 = false;
            var6['isNew'] = var11;
            var6['firstMessageLoaded'] = var10;
            var6['isLocalDeviceMedia'] = var9;
            var6 = var8.bind(var5)(var7, var6);
            var2['children'] = var6;
            var1 = var4.bind(var5)(var3, var2);
case 20:
            return var1;
        }
    };
    var3['ForumPostListDisabled'] = var2;
    return var1;
})();