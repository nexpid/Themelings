// app/modules/threads/ThreadHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var13 = metroImportDefault;
    var3 = exports;
    var12 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var13;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var12;
    var8 = function useCanStartPublicThread(arg1, arg2) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var4 = _closure1_slot16;
        var7 = _closure1_slot0;
        var6 = _closure1_slot3;
        var3 = 8;
        var6 = var6[var3];
        var3 = undefined;
        var8 = var7.bind(var3)(var6);
        var7 = var8.useStateFromStores;
        var2 = _closure1_slot8;
        var6 = new Array(1);
        var6[0] = var2;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
                var3 = _closure2_slot0;
                var2 = var3.isForumLikeChannel;
                var3 = var2.bind(var3)();
                if(var3) { _fun0001_ip = 2; continue _fun0001 }
case 3:
                var5 = _closure1_slot2;
                var4 = _closure1_slot3;
                var3 = 9;
                var4 = var4[var3];
                var3 = undefined;
                var6 = var5.bind(var3)(var4);
                var5 = var6.combine;
                var3 = _closure1_slot10;
                var4 = var3.CREATE_PUBLIC_THREADS;
                var3 = _closure1_slot10;
                var3 = var3.READ_MESSAGE_HISTORY;
                var4 = var5.bind(var6)(var4, var3);
                _fun0001_ip = 4; continue _fun0001;
case 2:
                var3 = _closure1_slot10;
                var4 = var3.SEND_MESSAGES;
case 4:
                var3 = _closure1_slot8;
                var2 = var3.can;
                var1 = _closure2_slot0;
                var1 = var2.bind(var3)(var4, var1);
                return var1;
            }
        };
        var2 = var7.bind(var8)(var6, var1, var2);
        var1 = arg2;
        var1 = var4.bind(var3)(var2, var5, var1);
        return var1;
    };
    var _closure1_slot14 = var8;
    var7 = function useCanStartPrivateThread(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var6 = _closure1_slot0;
            var4 = _closure1_slot3;
            var3 = 8;
            var3 = var4[var3];
            var4 = undefined;
            var8 = var6.bind(var4)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(1);
            var3[0] = var5;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = var4.can;
                var6 = _closure1_slot2;
                var5 = _closure1_slot3;
                var2 = 9;
                var5 = var5[var2];
                var2 = undefined;
                var5 = var6.bind(var2)(var5);
                var2 = var5.combine;
                var1 = _closure1_slot10;
                var1 = var1.CREATE_PRIVATE_THREADS;
                var2 = var2.bind(var5)(var1);
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var7.bind(var8)(var6, var1, var3);
            var6 = var5.type;
            var1 = _closure1_slot12;
            var1 = var1.GUILD_TEXT;
            var1 = var6 === var1;
            if(!var1) { _fun0002_ip = 5; continue _fun0002 }
case 6:
            var2 = _closure1_slot16;
            var1 = var2.bind(var4)(var3, var5);
case 5:
            return var1;
        }
    };
    var _closure1_slot15 = var7;
    var1 = function canStartThread(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
            var3 = arg3;
            var1 = arg1;
            if(var1) { _fun0003_ip = 7; continue _fun0003 }
case 8:
            var1 = false;
            return var1;
case 7:
            var5 = _closure1_slot5;
            var4 = var5.has;
            var2 = arg2;
            var2 = var2.type;
            var2 = var4.bind(var5)(var2);
            if(var2) { _fun0003_ip = 9; continue _fun0003 }
case 10:
            var2 = false;
            return var2;
case 9:
            var2 = null;
            if(!(var2 != var3)) { _fun0003_ip = 11; continue _fun0003 }
case 12:
            var4 = var3.hasFlag;
            var2 = _closure1_slot11;
            var2 = var2.HAS_THREAD;
            var2 = var4.bind(var3)(var2);
            if(var2) { _fun0003_ip = 13; continue _fun0003 }
case 14:
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 10;
            var1 = var2[var1];
            var2 = undefined;
            var1 = var4.bind(var2)(var1);
            var1 = var1.bind(var2)(var3);
            if(var1) { _fun0003_ip = 15; continue _fun0003 }
case 11:
            var1 = true;
            return var1;
case 15:
            var1 = false;
            return var1;
case 13:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot16 = var1;
    var1 = function hasSendPermission(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
case 0:
            var5 = arg1;
            var4 = arg2;
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0004_ip = 16; continue _fun0004 }
case 17:
            var3 = var4.can;
            var2 = _closure1_slot10;
            var2 = var2.SEND_MESSAGES_IN_THREADS;
            var1 = var3.bind(var4)(var2, var5);
case 16:
            return var1;
        }
    };
    var _closure1_slot17 = var1;
    var1 = function _canUnarchiveThread(arg1, arg2, arg3) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
case 0:
            var2 = arg1;
            var5 = arg2;
            var3 = arg3;
            var6 = null;
            var4 = var6 == var2;
            if(var4) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var1 = var2.isThread;
            var1 = var1.bind(var2)();
            var4 = !var1;
case 18:
            var1 = !var4;
            if(var4) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = var2.threadMetadata;
            var2 = var5;
            if(!(var6 != var4)) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var4 = var4.locked;
            var2 = var5;
            if(!var4) { _fun0005_ip = 22; continue _fun0005 }
case 24:
            var2 = var3;
case 22:
            var1 = var2;
case 20:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var6 = function useIsActiveChannelOrUnarchivableThread(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var4 = _closure1_slot0;
            var6 = _closure1_slot3;
            var3 = 8;
            var3 = var6[var3];
            var6 = undefined;
            var4 = var4.bind(var6)(var3);
            var3 = var4.useStateFromStores;
            var7 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var7;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 25; continue _fun0007 }
case 26:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot10;
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 25:
                    return var1;
                }
            };
            var4 = var3.bind(var4)(var2, var1);
            var7 = null;
            var1 = var7 != var5;
            if(!var1) { _fun0006_ip = 27; continue _fun0006 }
case 28:
            var2 = var5.isThread;
            var2 = var2.bind(var5)();
            var2 = !var2;
            if(var2) { _fun0006_ip = 29; continue _fun0006 }
case 30:
            var3 = var5.isActiveThread;
            var2 = var3.bind(var5)();
case 29:
            if(var2) { _fun0006_ip = 31; continue _fun0006 }
case 32:
            var3 = var5.isArchivedThread;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0006_ip = 33; continue _fun0006 }
case 13:
            var5 = var5.threadMetadata;
            var7 = var7 == var5;
            var6 = undefined;
            if(var7) { _fun0006_ip = 34; continue _fun0006 }
case 35:
            var6 = var5.locked;
case 34:
            var5 = true;
            var3 = var5 !== var6;
case 33:
            if(!var3) { _fun0006_ip = 36; continue _fun0006 }
case 37:
            var3 = var4;
case 36:
            var2 = var3;
case 31:
            var1 = var2;
case 27:
            return var1;
        }
    };
    var _closure1_slot19 = var6;
    var5 = function useIsThreadModerator(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var5 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 8;
        var4 = var4[var3];
        var3 = undefined;
        var4 = var5.bind(var3)(var4);
        var3 = var4.useStateFromStores;
        var5 = _closure1_slot8;
        var2 = new Array(1);
        var2[0] = var5;
        var1 = function() {
            var4 = _closure1_slot21;
            var3 = _closure2_slot0;
            var1 = _closure1_slot8;
            var2 = new Array(1);
            var2[0] = var1;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var _closure1_slot20 = var5;
    var4 = function isThreadModerator(arg1) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
            var5 = arg1;
            var6 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0008_ip = 38; continue _fun0008 }
case 39:
            var2 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var2;
            var6 = var1;
case 38:
            var3 = _closure1_slot4;
            var1 = 1;
            var3 = var3.bind(var4)(var6, var1);
            var1 = 0;
            var4 = var3[var1];
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0008_ip = 40; continue _fun0008 }
case 41:
            var3 = var4.can;
            var2 = _closure1_slot10;
            var2 = var2.MANAGE_THREADS;
            var1 = var3.bind(var4)(var2, var5);
case 40:
            return var1;
        }
    };
    var _closure1_slot21 = var4;
    var1 = global;
    var14 = var1.Object;
    var10 = var14.defineProperty;
    var9 = {};
    var15 = true;
    var9['value'] = var15;
    var1 = '__esModule';
    var1 = var10.bind(var14)(var3, var1, var9);
    var1 = 0;
    var9 = var12[var1];
    var1 = undefined;
    var9 = var13.bind(var1)(var9);
    var _closure1_slot4 = var9;
    var9 = 1;
    var9 = var12[var9];
    var10 = var13.bind(var1)(var9);
    var9 = 2;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var9 = var9.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var9;
    var9 = 3;
    var9 = var12[var9];
    var9 = var13.bind(var1)(var9);
    var _closure1_slot6 = var9;
    var9 = 4;
    var9 = var12[var9];
    var9 = var13.bind(var1)(var9);
    var _closure1_slot7 = var9;
    var9 = 5;
    var9 = var12[var9];
    var9 = var13.bind(var1)(var9);
    var _closure1_slot8 = var9;
    var9 = 6;
    var9 = var12[var9];
    var9 = var13.bind(var1)(var9);
    var _closure1_slot9 = var9;
    var9 = 7;
    var9 = var12[var9];
    var9 = var11.bind(var1)(var9);
    var13 = var9.Permissions;
    var _closure1_slot10 = var13;
    var13 = var9.MessageFlags;
    var _closure1_slot11 = var13;
    var9 = var9.ChannelTypes;
    var _closure1_slot12 = var9;
    var9 = {'id': '2022-07_voice_in_threads', 'label': 'Voice in Threads', 'kind': 'guild'};
    var13 = {};
    var14 = false;
    var13['enabled'] = var14;
    var9['defaultConfig'] = var13;
    var14 = {'id': 1, 'label': 'On'};
    var13 = {};
    var13['enabled'] = var15;
    var14['config'] = var13;
    var13 = new Array(1);
    var13[0] = var14;
    var9['treatments'] = var13;
    var9 = var10.bind(var1)(var9);
    var _closure1_slot13 = var9;
    var10 = 15;
    var10 = var12[var10];
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/threads/ThreadHooks.tsx';
    var10 = var11.bind(var12)(var10);
    var3['VoiceInThreadsExperiment'] = var9;
    var3['useCanStartPublicThread'] = var8;
    var8 = function computeCanStartPublicThread(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isForumLikeChannel;
            var2 = var1.bind(var5)();
            if(var2) { _fun0009_ip = 14; continue _fun0009 }
case 42:
            var4 = _closure1_slot2;
            var3 = _closure1_slot3;
            var2 = 9;
            var3 = var3[var2];
            var2 = undefined;
            var6 = var4.bind(var2)(var3);
            var4 = var6.combine;
            var2 = _closure1_slot10;
            var3 = var2.CREATE_PUBLIC_THREADS;
            var2 = _closure1_slot10;
            var2 = var2.READ_MESSAGE_HISTORY;
            var3 = var4.bind(var6)(var3, var2);
            _fun0009_ip = 43; continue _fun0009;
case 14:
            var2 = _closure1_slot10;
            var3 = var2.SEND_MESSAGES;
case 43:
            var4 = _closure1_slot16;
            var2 = _closure1_slot8;
            var1 = var2.can;
            var3 = var1.bind(var2)(var3, var5);
            var2 = undefined;
            var1 = arg2;
            var1 = var4.bind(var2)(var3, var5, var1);
            return var1;
        }
    };
    var3['computeCanStartPublicThread'] = var8;
    var3['useCanStartPrivateThread'] = var7;
    var7 = function computeCanStartPrivateThread(arg1, arg2) {
        var5 = arg1;
        var4 = _closure1_slot16;
        var3 = _closure1_slot8;
        var2 = var3.can;
        var1 = _closure1_slot10;
        var1 = var1.CREATE_PRIVATE_THREADS;
        var3 = var2.bind(var3)(var1, var5);
        var2 = undefined;
        var1 = arg2;
        var1 = var4.bind(var2)(var3, var5, var1);
        return var1;
    };
    var3['computeCanStartPrivateThread'] = var7;
    var7 = function useCanStartThread(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot14;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot15;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0010_ip = 44; continue _fun0010 }
case 45:
            var1 = var2;
case 44:
            return var1;
        }
    };
    var3['useCanStartThread'] = var7;
    var7 = function useCanViewThreadForMessage(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var3 = 8;
            var4 = var8[var3];
            var6 = undefined;
            var12 = var7.bind(var6)(var4);
            var11 = var12.useStateFromStores;
            var4 = _closure1_slot7;
            var10 = new Array(1);
            var10[0] = var4;
            var9 = new Array(1);
            var9[0] = var5;
            var4 = function() {
                var3 = _closure1_slot7;
                var2 = var3.getChannel;
                var5 = _closure1_slot1;
                var4 = _closure1_slot3;
                var1 = 11;
                var4 = var4[var1];
                var1 = undefined;
                var5 = var5.bind(var1)(var4);
                var4 = var5.castMessageIdAsChannelId;
                var1 = _closure2_slot0;
                var1 = var1.id;
                var1 = var4.bind(var5)(var1);
                var1 = var2.bind(var3)(var1);
                return var1;
            };
            var4 = var11.bind(var12)(var10, var4, var9);
            var _closure2_slot1 = var4;
            var3 = var8[var3];
            var8 = var7.bind(var6)(var3);
            var7 = var8.useStateFromStores;
            var3 = _closure1_slot8;
            var6 = new Array(1);
            var6[0] = var3;
            var3 = new Array(1);
            var3[0] = var4;
            var2 = function() {
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.VIEW_CHANNEL;
                var1 = _closure2_slot1;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var3 = var7.bind(var8)(var6, var2, var3);
            var2 = var5.hasFlag;
            var1 = _closure1_slot11;
            var1 = var1.HAS_THREAD;
            var1 = var2.bind(var5)(var1);
            var2 = !var1;
            var1 = !var2;
            if(var2) { _fun0011_ip = 46; continue _fun0011 }
case 47:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0011_ip = 48; continue _fun0011 }
case 49:
            var3 = !var3;
            var2 = !var3;
case 48:
            var1 = var2;
case 46:
            return var1;
        }
    };
    var3['useCanViewThreadForMessage'] = var7;
    var7 = function useHasActiveThreads(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStoresObject;
        var6 = _closure1_slot9;
        var2 = new Array(2);
        var2[0] = var6;
        var5 = _closure1_slot8;
        var2[1] = var5;
        var1 = function() {
            _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
                var7 = _closure1_slot9;
                var6 = var7.getActiveJoinedThreadsForParent;
                var3 = _closure2_slot0;
                var5 = var3.guild_id;
                var4 = var3.id;
                var9 = var6.bind(var7)(var5, var4);
                var6 = var7.getActiveJoinedRelevantThreadsForParent;
                var5 = var3.guild_id;
                var4 = var3.id;
                var4 = var6.bind(var7)(var5, var4);
                var _closure3_slot0 = var4;
                var6 = var7.getActiveUnjoinedThreadsForParent;
                var5 = var3.guild_id;
                var3 = var3.id;
                var6 = var6.bind(var7)(var5, var3);
                var7 = _closure1_slot1;
                var8 = _closure1_slot3;
                var2 = 12;
                var3 = var8[var2];
                var5 = undefined;
                var3 = var7.bind(var5)(var3);
                var10 = var3.bind(var5)(var4);
                var4 = var10.some;
                var3 = function(arg1) {
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var1 = _closure1_slot10;
                    var2 = var1.VIEW_CHANNEL;
                    var1 = arg1;
                    var1 = var1.channel;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var4 = var4.bind(var10)(var3);
                var3 = var8[var2];
                var3 = var7.bind(var5)(var3);
                var10 = var3.bind(var5)(var9);
                var9 = var10.some;
                var3 = function(arg1) {
                    _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.channel;
                        var3 = var1.id;
                        var1 = _closure3_slot0;
                        var3 = var3 in var1;
                        var1 = !var3;
                        if(var3) { _fun0013_ip = 50; continue _fun0013 }
case 38:
                        var5 = _closure1_slot8;
                        var4 = var5.can;
                        var3 = _closure1_slot10;
                        var3 = var3.VIEW_CHANNEL;
                        var2 = var2.channel;
                        var1 = var4.bind(var5)(var3, var2);
case 50:
                        return var1;
                    }
                };
                var3 = var9.bind(var10)(var3);
                var2 = var8[var2];
                var2 = var7.bind(var5)(var2);
                var5 = var2.bind(var5)(var6);
                var2 = var5.some;
                var1 = function(arg1) {
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var1 = _closure1_slot10;
                    var2 = var1.VIEW_CHANNEL;
                    var1 = arg1;
                    var1 = var3.bind(var4)(var2, var1);
                    return var1;
                };
                var2 = var2.bind(var5)(var1);
                var1 = {};
                if(var4) { _fun0012_ip = 51; continue _fun0012 }
case 52:
                var4 = var3;
case 51:
                if(var4) { _fun0012_ip = 53; continue _fun0012 }
case 54:
                var4 = var2;
case 53:
                var1['hasActiveThreads'] = var4;
                if(var2) { _fun0012_ip = 55; continue _fun0012 }
case 56:
                var2 = var3;
case 55:
                var1['hasMoreActiveThreads'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasActiveThreads'] = var7;
    var7 = function useCanManageThread(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var8 = _closure1_slot0;
            var9 = _closure1_slot3;
            var6 = 8;
            var3 = var9[var6];
            var7 = undefined;
            var11 = var8.bind(var7)(var3);
            var10 = var11.useStateFromStores;
            var3 = _closure1_slot7;
            var4 = new Array(1);
            var4[0] = var3;
            var3 = function() {
                _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0015_ip = 16; continue _fun0015 }
case 38:
                    var4 = _closure2_slot0;
                    var1 = var4.parent_id;
case 16:
                    var1 = var2.bind(var3)(var1);
                    return var1;
                }
            };
            var4 = var10.bind(var11)(var4, var3);
            var _closure2_slot1 = var4;
            var3 = var9[var6];
            var13 = var8.bind(var7)(var3);
            var12 = var13.useStateFromStores;
            var3 = _closure1_slot8;
            var11 = new Array(1);
            var11[0] = var3;
            var10 = new Array(1);
            var10[0] = var4;
            var3 = function() {
                _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0016_ip = 25; continue _fun0016 }
case 26:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot10;
                    var3 = var3.MANAGE_THREADS;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 25:
                    return var1;
                }
            };
            var3 = var12.bind(var13)(var11, var3, var10);
            var6 = var9[var6];
            var7 = var8.bind(var7)(var6);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot6;
            var2 = new Array(1);
            var2[0] = var8;
            var1 = function() {
                var2 = _closure1_slot6;
                var1 = var2.getId;
                var1 = var1.bind(var2)();
                return var1;
            };
            var6 = var6.bind(var7)(var2, var1);
            var2 = null;
            var1 = var2 != var5;
            if(!var1) { _fun0014_ip = 57; continue _fun0014 }
case 58:
            var1 = var2 != var4;
case 57:
            if(!var1) { _fun0014_ip = 59; continue _fun0014 }
case 60:
            var2 = var5.isThread;
            var2 = var2.bind(var5)();
            var4 = !var2;
            var2 = !var4;
            if(var4) { _fun0014_ip = 61; continue _fun0014 }
case 62:
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0014_ip = 63; continue _fun0014 }
case 64:
            var4 = var5.isLockedThread;
            var4 = var4.bind(var5)();
            var4 = !var4;
            if(!var4) { _fun0014_ip = 65; continue _fun0014 }
case 66:
            var5 = var5.ownerId;
            var4 = var5 === var6;
case 65:
            var3 = var4;
case 63:
            var2 = var3;
case 61:
            var1 = var2;
case 59:
            return var1;
        }
    };
    var3['useCanManageThread'] = var7;
    var7 = function useCanUnarchiveThread(arg1) {
        var5 = arg1;
        var _closure2_slot0 = var5;
        var6 = _closure1_slot0;
        var4 = _closure1_slot3;
        var3 = 8;
        var3 = var4[var3];
        var4 = undefined;
        var7 = var6.bind(var4)(var3);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot8;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            var4 = _closure1_slot17;
            var3 = _closure2_slot0;
            var2 = _closure1_slot8;
            var1 = undefined;
            var1 = var4.bind(var1)(var3, var2);
            return var1;
        };
        var3 = var6.bind(var7)(var3, var2);
        var2 = _closure1_slot20;
        var2 = var2.bind(var4)(var5);
        var1 = _closure1_slot18;
        var1 = var1.bind(var4)(var5, var3, var2);
        return var1;
    };
    var3['useCanUnarchiveThread'] = var7;
    var7 = function canUnarchiveThread(arg1) {
        var5 = arg1;
        var4 = _closure1_slot18;
        var6 = _closure1_slot17;
        var2 = _closure1_slot8;
        var3 = undefined;
        var2 = var6.bind(var3)(var5, var2);
        var1 = _closure1_slot21;
        var1 = var1.bind(var3)(var5);
        var1 = var4.bind(var3)(var5, var2, var1);
        return var1;
    };
    var3['canUnarchiveThread'] = var7;
    var3['useIsActiveChannelOrUnarchivableThread'] = var6;
    var6 = function getIsActiveChannelOrUnarchivableThread(arg1) {
        _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
            var7 = arg1;
            var5 = null;
            var1 = var5 != var7;
            if(!var1) { _fun0017_ip = 67; continue _fun0017 }
case 39:
            var2 = var7.isThread;
            var2 = var2.bind(var7)();
            var2 = !var2;
            if(var2) { _fun0017_ip = 68; continue _fun0017 }
case 69:
            var3 = var7.isActiveThread;
            var2 = var3.bind(var7)();
case 68:
            if(var2) { _fun0017_ip = 70; continue _fun0017 }
case 10:
            var3 = var7.isArchivedThread;
            var3 = var3.bind(var7)();
            if(!var3) { _fun0017_ip = 71; continue _fun0017 }
case 72:
            var4 = var7.threadMetadata;
            var6 = var5 == var4;
            var5 = undefined;
            if(var6) { _fun0017_ip = 14; continue _fun0017 }
case 73:
            var5 = var4.locked;
case 14:
            var4 = true;
            var3 = var4 !== var5;
case 71:
            if(!var3) { _fun0017_ip = 13; continue _fun0017 }
case 74:
            var6 = _closure1_slot8;
            var5 = var6.can;
            var4 = _closure1_slot10;
            var4 = var4.SEND_MESSAGES_IN_THREADS;
            var3 = var5.bind(var6)(var4, var7);
case 13:
            var2 = var3;
case 70:
            var1 = var2;
case 67:
            return var1;
        }
    };
    var3['getIsActiveChannelOrUnarchivableThread'] = var6;
    var6 = function computeIsReadOnlyThread(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
case 0:
            var3 = arg1;
            var4 = _closure1_slot8;
            var2 = var4.can;
            var1 = _closure1_slot10;
            var1 = var1.MANAGE_THREADS;
            var2 = var2.bind(var4)(var1, var3);
            var1 = var3.isArchivedLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0018_ip = 75; continue _fun0018 }
case 9:
            var1 = !var2;
case 75:
            return var1;
        }
    };
    var3['computeIsReadOnlyThread'] = var6;
    var3['useIsThreadModerator'] = var5;
    var3['isThreadModerator'] = var4;
    var4 = function useCanRemoveThreadMember(arg1) {
        var2 = arg1;
        var _closure2_slot0 = var2;
        var4 = _closure1_slot0;
        var3 = _closure1_slot3;
        var2 = 8;
        var3 = var3[var2];
        var2 = undefined;
        var4 = var4.bind(var2)(var3);
        var3 = var4.useStateFromStores;
        var6 = _closure1_slot7;
        var2 = new Array(3);
        var2[0] = var6;
        var6 = _closure1_slot8;
        var2[1] = var6;
        var5 = _closure1_slot6;
        var2[2] = var5;
        var1 = function() {
            _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0019_ip = 11; continue _fun0019 }
case 38:
                var3 = _closure1_slot6;
                var1 = var3.getId;
                var4 = var1.bind(var3)();
                var3 = var5.type;
                var1 = _closure1_slot12;
                var1 = var1.PRIVATE_THREAD;
                var1 = var3 === var1;
                if(!var1) { _fun0019_ip = 76; continue _fun0019 }
case 77:
                var3 = var5.ownerId;
                var1 = var3 === var4;
case 76:
                if(var1) { _fun0019_ip = 5; continue _fun0019 }
case 2:
                var4 = _closure1_slot21;
                var2 = _closure1_slot8;
                var3 = new Array(1);
                var3[0] = var2;
                var2 = undefined;
                var1 = var4.bind(var2)(var5, var3);
case 5:
                return var1;
case 11:
                var1 = false;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useCanRemoveThreadMember'] = var4;
    var4 = function useCanJoinThreadVoice(arg1) {
        _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
            var7 = arg1;
            var _closure2_slot0 = var7;
            var4 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var1 = var2[var1];
            var9 = undefined;
            var1 = var4.bind(var9)(var1);
            var1 = var1.bind(var9)();
            var8 = _closure1_slot0;
            var4 = 8;
            var4 = var2[var4];
            var10 = var8.bind(var9)(var4);
            var5 = var10.useStateFromStores;
            var11 = _closure1_slot8;
            var4 = new Array(1);
            var4[0] = var11;
            var3 = function() {
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.CONNECT;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var4 = var5.bind(var10)(var4, var3);
            var3 = _closure1_slot19;
            var3 = var3.bind(var9)(var7);
            var12 = _closure1_slot13;
            var11 = var12.useExperiment;
            var10 = {};
            var5 = var7.guild_id;
            var10['guildId'] = var5;
            var5 = 'e791ea_1';
            var10['location'] = var5;
            var5 = {};
            var13 = false;
            var5['autoTrackExposure'] = var13;
            var5 = var11.bind(var12)(var10, var5);
            var5 = var5.enabled;
            var10 = 14;
            var2 = var2[var10];
            var8 = var8.bind(var9)(var2);
            var2 = var8.useShouldAgeVerifyForAgeGate;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0020_ip = 78; continue _fun0020 }
case 79:
            var8 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var9 = var8.bind(var9)(var6);
            var8 = var9.shouldShowAgeGateForChannelId;
            var6 = var7.id;
            var2 = var8.bind(var9)(var6);
case 78:
            var1 = !var1;
            if(!var1) { _fun0020_ip = 55; continue _fun0020 }
case 80:
            var6 = var7.isVocalThread;
            var1 = var6.bind(var7)();
case 55:
            if(!var1) { _fun0020_ip = 63; continue _fun0020 }
case 65:
            var1 = var5;
case 63:
            if(!var1) { _fun0020_ip = 59; continue _fun0020 }
case 61:
            var1 = var4;
case 59:
            if(!var1) { _fun0020_ip = 81; continue _fun0020 }
case 82:
            var1 = var3;
case 81:
            if(!var1) { _fun0020_ip = 83; continue _fun0020 }
case 84:
            var1 = !var2;
case 83:
            return var1;
        }
    };
    var3['useCanJoinThreadVoice'] = var4;
    var4 = function useIsNonModInLockedThread(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot20;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var3.isLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0021_ip = 85; continue _fun0021 }
case 38:
            var1 = !var2;
case 85:
            return var1;
        }
    };
    var3['useIsNonModInLockedThread'] = var4;
    var2 = function isNonModInLockedThread(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot21;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var3.isLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0022_ip = 85; continue _fun0022 }
case 38:
            var1 = !var2;
case 85:
            return var1;
        }
    };
    var3['isNonModInLockedThread'] = var2;
    return var1;
})();