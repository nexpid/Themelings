// app/modules/threads/ThreadHooks.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var14 = require;
    var16 = metroImportDefault;
    var3 = exports;
    var15 = dependencyMap;
    var _closure1_slot0 = var14;
    var _closure1_slot1 = var16;
    var1 = metroImportAll;
    var _closure1_slot2 = var1;
    var _closure1_slot3 = var15;
    var11 = function useCanStartPublicThread(arg1, arg2) {
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
    var _closure1_slot14 = var11;
    var10 = function useCanStartPrivateThread(arg1) {
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
    var _closure1_slot15 = var10;
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
            var1 = var6 == var2;
            if(var1) { _fun0005_ip = 18; continue _fun0005 }
case 19:
            var4 = var2.isThread;
            var4 = var4.bind(var2)();
            var1 = !var4;
case 18:
            if(var1) { _fun0005_ip = 20; continue _fun0005 }
case 21:
            var4 = var2.isMediaThread;
            var1 = var4.bind(var2)();
case 20:
            var1 = !var1;
            if(!var1) { _fun0005_ip = 22; continue _fun0005 }
case 23:
            var4 = var2.threadMetadata;
            var2 = var5;
            if(!(var6 != var4)) { _fun0005_ip = 24; continue _fun0005 }
case 25:
            var4 = var4.locked;
            var2 = var5;
            if(!var4) { _fun0005_ip = 24; continue _fun0005 }
case 14:
            var2 = var3;
case 24:
            var1 = var2;
case 22:
            return var1;
        }
    };
    var _closure1_slot18 = var1;
    var9 = function useCanUnarchiveThread(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
case 0:
            var5 = arg1;
            var _closure2_slot0 = var5;
            var7 = _closure1_slot0;
            var8 = _closure1_slot3;
            var6 = 8;
            var1 = var8[var6];
            var4 = undefined;
            var11 = var7.bind(var4)(var1);
            var10 = var11.useStateFromStores;
            var1 = _closure1_slot8;
            var9 = new Array(1);
            var9[0] = var1;
            var1 = function() {
                _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0007_ip = 26; continue _fun0007 }
case 27:
                    var6 = _closure1_slot8;
                    var5 = var6.can;
                    var3 = _closure1_slot10;
                    var4 = var3.SEND_MESSAGES_IN_THREADS;
                    var3 = _closure2_slot0;
                    var1 = var5.bind(var6)(var4, var3);
case 26:
                    if(!var1) { _fun0007_ip = 28; continue _fun0007 }
case 29:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot10;
                    var3 = var3.SEND_MESSAGES;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var5)(var3, var2);
case 28:
                    return var1;
                }
            };
            var1 = var10.bind(var11)(var9, var1);
            var6 = var8[var6];
            var9 = var7.bind(var4)(var6);
            var8 = var9.useStateFromStores;
            var6 = _closure1_slot8;
            var7 = new Array(2);
            var7[0] = var6;
            var6 = _closure1_slot7;
            var7[1] = var6;
            var6 = new Array(1);
            var6[0] = var5;
            var3 = function() {
                _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
case 0:
                    var3 = _closure2_slot0;
                    var1 = null;
                    var3 = var1 != var3;
                    var5 = null;
                    if(!var3) { _fun0008_ip = 9; continue _fun0008 }
case 19:
                    var6 = _closure1_slot7;
                    var4 = var6.getChannel;
                    var3 = _closure2_slot0;
                    var3 = var3.parent_id;
                    var5 = var4.bind(var6)(var3);
case 9:
                    var1 = var1 != var5;
                    if(!var1) { _fun0008_ip = 28; continue _fun0008 }
case 29:
                    var6 = _closure1_slot8;
                    var4 = var6.can;
                    var3 = _closure1_slot10;
                    var3 = var3.SEND_MESSAGES_IN_THREADS;
                    var2 = _closure2_slot0;
                    var1 = var4.bind(var6)(var3, var2);
case 28:
                    if(!var1) { _fun0008_ip = 30; continue _fun0008 }
case 31:
                    var4 = _closure1_slot8;
                    var3 = var4.can;
                    var2 = _closure1_slot10;
                    var2 = var2.SEND_MESSAGES;
                    var1 = var3.bind(var4)(var2, var5);
case 30:
                    return var1;
                }
            };
            var6 = var8.bind(var9)(var7, var3, var6);
            var3 = _closure1_slot22;
            var3 = var3.bind(var4)(var5);
            var2 = _closure1_slot18;
            if(!var1) { _fun0006_ip = 32; continue _fun0006 }
case 33:
            var1 = var6;
case 32:
            var1 = var2.bind(var4)(var5, var1, var3);
            return var1;
        }
    };
    var _closure1_slot19 = var9;
    var8 = function canUnarchiveThread(arg1) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
case 0:
            var5 = arg1;
            var7 = _closure1_slot17;
            var2 = _closure1_slot8;
            var4 = undefined;
            var2 = var7.bind(var4)(var5, var2);
            var6 = null;
            var3 = var6 != var5;
            if(!var3) { _fun0009_ip = 12; continue _fun0009 }
case 18:
            var9 = _closure1_slot7;
            var8 = var9.getChannel;
            var3 = var5.parent_id;
            var6 = var8.bind(var9)(var3);
case 12:
            var3 = _closure1_slot8;
            var6 = var7.bind(var4)(var6, var3);
            var3 = _closure1_slot18;
            if(!var2) { _fun0009_ip = 34; continue _fun0009 }
case 35:
            var2 = var6;
case 34:
            var1 = _closure1_slot23;
            var1 = var1.bind(var4)(var5);
            var1 = var3.bind(var4)(var5, var2, var1);
            return var1;
        }
    };
    var _closure1_slot20 = var8;
    var7 = function useIsActiveChannelOrUnarchivableThread(arg1) {
        _fun0010: for(var _fun0010_ip = 0; ; ) switch(_fun0010_ip) {
case 0:
            var5 = arg1;
            var1 = _closure1_slot19;
            var6 = undefined;
            var4 = var1.bind(var6)(var5);
            var7 = null;
            var1 = var7 != var5;
            if(!var1) { _fun0010_ip = 36; continue _fun0010 }
case 37:
            var2 = var5.isThread;
            var2 = var2.bind(var5)();
            var2 = !var2;
            if(var2) { _fun0010_ip = 29; continue _fun0010 }
case 38:
            var3 = var5.isActiveThread;
            var2 = var3.bind(var5)();
case 29:
            if(var2) { _fun0010_ip = 39; continue _fun0010 }
case 40:
            var3 = var5.isArchivedThread;
            var3 = var3.bind(var5)();
            if(!var3) { _fun0010_ip = 41; continue _fun0010 }
case 35:
            var5 = var5.threadMetadata;
            var7 = var7 == var5;
            var6 = undefined;
            if(var7) { _fun0010_ip = 4; continue _fun0010 }
case 42:
            var6 = var5.locked;
case 4:
            var5 = true;
            var3 = var5 !== var6;
case 41:
            if(!var3) { _fun0010_ip = 43; continue _fun0010 }
case 44:
            var3 = var4;
case 43:
            var2 = var3;
case 39:
            var1 = var2;
case 36:
            return var1;
        }
    };
    var _closure1_slot21 = var7;
    var6 = function useIsThreadModerator(arg1) {
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
            var4 = _closure1_slot23;
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
    var _closure1_slot22 = var6;
    var5 = function isThreadModerator(arg1) {
        _fun0011: for(var _fun0011_ip = 0; ; ) switch(_fun0011_ip) {
case 0:
            var5 = arg1;
            var6 = arguments[1];
            var4 = undefined;
            if(!(var6 === var4)) { _fun0011_ip = 45; continue _fun0011 }
case 46:
            var2 = _closure1_slot8;
            var1 = new Array(1);
            var1[0] = var2;
            var6 = var1;
case 45:
            var3 = _closure1_slot4;
            var1 = 1;
            var3 = var3.bind(var4)(var6, var1);
            var1 = 0;
            var4 = var3[var1];
            var1 = null;
            var1 = var1 != var5;
            if(!var1) { _fun0011_ip = 42; continue _fun0011 }
case 47:
            var3 = var4.can;
            var2 = _closure1_slot10;
            var2 = var2.MANAGE_THREADS;
            var1 = var3.bind(var4)(var2, var5);
case 42:
            return var1;
        }
    };
    var _closure1_slot23 = var5;
    var4 = function useHasPermissionToJoinThreadVoice(arg1) {
        _fun0012: for(var _fun0012_ip = 0; ; ) switch(_fun0012_ip) {
case 0:
            var4 = arg1;
            var _closure2_slot0 = var4;
            var6 = _closure1_slot0;
            var5 = _closure1_slot3;
            var3 = 8;
            var5 = var5[var3];
            var3 = undefined;
            var7 = var6.bind(var3)(var5);
            var6 = var7.useStateFromStores;
            var8 = _closure1_slot8;
            var5 = new Array(1);
            var5[0] = var8;
            var1 = function() {
                var4 = _closure1_slot8;
                var3 = var4.can;
                var1 = _closure1_slot10;
                var2 = var1.CONNECT;
                var1 = _closure2_slot0;
                var1 = var3.bind(var4)(var2, var1);
                return var1;
            };
            var1 = var6.bind(var7)(var5, var1);
            var2 = _closure1_slot21;
            var2 = var2.bind(var3)(var4);
            if(!var1) { _fun0012_ip = 48; continue _fun0012 }
case 49:
            var1 = var2;
case 48:
            return var1;
        }
    };
    var _closure1_slot24 = var4;
    var1 = global;
    var17 = var1.Object;
    var13 = var17.defineProperty;
    var12 = {};
    var18 = true;
    var12['value'] = var18;
    var1 = '__esModule';
    var1 = var13.bind(var17)(var3, var1, var12);
    var1 = 0;
    var12 = var15[var1];
    var1 = undefined;
    var12 = var16.bind(var1)(var12);
    var _closure1_slot4 = var12;
    var12 = 1;
    var12 = var15[var12];
    var13 = var16.bind(var1)(var12);
    var12 = 2;
    var12 = var15[var12];
    var12 = var14.bind(var1)(var12);
    var12 = var12.THREADED_CHANNEL_TYPES;
    var _closure1_slot5 = var12;
    var12 = 3;
    var12 = var15[var12];
    var12 = var16.bind(var1)(var12);
    var _closure1_slot6 = var12;
    var12 = 4;
    var12 = var15[var12];
    var12 = var16.bind(var1)(var12);
    var _closure1_slot7 = var12;
    var12 = 5;
    var12 = var15[var12];
    var12 = var16.bind(var1)(var12);
    var _closure1_slot8 = var12;
    var12 = 6;
    var12 = var15[var12];
    var12 = var16.bind(var1)(var12);
    var _closure1_slot9 = var12;
    var12 = 7;
    var12 = var15[var12];
    var12 = var14.bind(var1)(var12);
    var16 = var12.Permissions;
    var _closure1_slot10 = var16;
    var16 = var12.MessageFlags;
    var _closure1_slot11 = var16;
    var12 = var12.ChannelTypes;
    var _closure1_slot12 = var12;
    var12 = {'id': '2022-07_voice_in_threads', 'label': 'Voice in Threads', 'kind': 'guild'};
    var16 = {};
    var17 = false;
    var16['enabled'] = var17;
    var12['defaultConfig'] = var16;
    var17 = {'id': 1, 'label': 'On'};
    var16 = {};
    var16['enabled'] = var18;
    var17['config'] = var16;
    var16 = new Array(1);
    var16[0] = var17;
    var12['treatments'] = var16;
    var12 = var13.bind(var1)(var12);
    var _closure1_slot13 = var12;
    var13 = 16;
    var13 = var15[var13];
    var15 = var14.bind(var1)(var13);
    var14 = var15.fileFinishedImporting;
    var13 = 'modules/threads/ThreadHooks.tsx';
    var13 = var14.bind(var15)(var13);
    var3['VoiceInThreadsExperiment'] = var12;
    var3['useCanStartPublicThread'] = var11;
    var11 = function computeCanStartPublicThread(arg1, arg2) {
        _fun0013: for(var _fun0013_ip = 0; ; ) switch(_fun0013_ip) {
case 0:
            var5 = arg1;
            var1 = var5.isForumLikeChannel;
            var2 = var1.bind(var5)();
            if(var2) { _fun0013_ip = 14; continue _fun0013 }
case 50:
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
            _fun0013_ip = 28; continue _fun0013;
case 14:
            var2 = _closure1_slot10;
            var3 = var2.SEND_MESSAGES;
case 28:
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
    var3['computeCanStartPublicThread'] = var11;
    var3['useCanStartPrivateThread'] = var10;
    var10 = function computeCanStartPrivateThread(arg1, arg2) {
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
    var3['computeCanStartPrivateThread'] = var10;
    var10 = function useCanStartThread(arg1) {
        _fun0014: for(var _fun0014_ip = 0; ; ) switch(_fun0014_ip) {
case 0:
            var4 = arg1;
            var1 = _closure1_slot14;
            var3 = undefined;
            var1 = var1.bind(var3)(var4);
            var2 = _closure1_slot15;
            var2 = var2.bind(var3)(var4);
            if(var1) { _fun0014_ip = 51; continue _fun0014 }
case 52:
            var1 = var2;
case 51:
            return var1;
        }
    };
    var3['useCanStartThread'] = var10;
    var10 = function useCanViewThreadForMessage(arg1) {
        _fun0015: for(var _fun0015_ip = 0; ; ) switch(_fun0015_ip) {
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
            if(var2) { _fun0015_ip = 53; continue _fun0015 }
case 54:
            var2 = null;
            var2 = var2 != var4;
            if(!var2) { _fun0015_ip = 55; continue _fun0015 }
case 56:
            var3 = !var3;
            var2 = !var3;
case 55:
            var1 = var2;
case 53:
            return var1;
        }
    };
    var3['useCanViewThreadForMessage'] = var10;
    var10 = function useHasActiveThreads(arg1) {
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
            _fun0016: for(var _fun0016_ip = 0; ; ) switch(_fun0016_ip) {
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
                    _fun0017: for(var _fun0017_ip = 0; ; ) switch(_fun0017_ip) {
case 0:
                        var2 = arg1;
                        var1 = var2.channel;
                        var3 = var1.id;
                        var1 = _closure3_slot0;
                        var3 = var3 in var1;
                        var1 = !var3;
                        if(var3) { _fun0017_ip = 57; continue _fun0017 }
case 45:
                        var5 = _closure1_slot8;
                        var4 = var5.can;
                        var3 = _closure1_slot10;
                        var3 = var3.VIEW_CHANNEL;
                        var2 = var2.channel;
                        var1 = var4.bind(var5)(var3, var2);
case 57:
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
                if(var4) { _fun0016_ip = 58; continue _fun0016 }
case 59:
                var4 = var3;
case 58:
                if(var4) { _fun0016_ip = 60; continue _fun0016 }
case 61:
                var4 = var2;
case 60:
                var1['hasActiveThreads'] = var4;
                if(var2) { _fun0016_ip = 62; continue _fun0016 }
case 63:
                var2 = var3;
case 62:
                var1['hasMoreActiveThreads'] = var2;
                return var1;
            }
        };
        var1 = var3.bind(var4)(var2, var1);
        return var1;
    };
    var3['useHasActiveThreads'] = var10;
    var10 = function useCanManageThread(arg1) {
        _fun0018: for(var _fun0018_ip = 0; ; ) switch(_fun0018_ip) {
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
                _fun0019: for(var _fun0019_ip = 0; ; ) switch(_fun0019_ip) {
case 0:
                    var3 = _closure1_slot7;
                    var2 = var3.getChannel;
                    var5 = _closure2_slot0;
                    var1 = null;
                    var5 = var1 == var5;
                    var1 = undefined;
                    if(var5) { _fun0019_ip = 16; continue _fun0019 }
case 45:
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
                _fun0020: for(var _fun0020_ip = 0; ; ) switch(_fun0020_ip) {
case 0:
                    var3 = _closure2_slot1;
                    var1 = null;
                    var1 = var1 != var3;
                    if(!var1) { _fun0020_ip = 26; continue _fun0020 }
case 27:
                    var5 = _closure1_slot8;
                    var4 = var5.can;
                    var3 = _closure1_slot10;
                    var3 = var3.MANAGE_THREADS;
                    var2 = _closure2_slot1;
                    var1 = var4.bind(var5)(var3, var2);
case 26:
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
            if(!var1) { _fun0018_ip = 64; continue _fun0018 }
case 65:
            var1 = var2 != var4;
case 64:
            if(!var1) { _fun0018_ip = 66; continue _fun0018 }
case 67:
            var2 = var5.isThread;
            var2 = var2.bind(var5)();
            var4 = !var2;
            var2 = !var4;
            if(var4) { _fun0018_ip = 68; continue _fun0018 }
case 69:
            var4 = !var3;
            var3 = !var4;
            if(!var4) { _fun0018_ip = 70; continue _fun0018 }
case 71:
            var4 = var5.isLockedThread;
            var4 = var4.bind(var5)();
            var4 = !var4;
            if(!var4) { _fun0018_ip = 72; continue _fun0018 }
case 73:
            var5 = var5.ownerId;
            var4 = var5 === var6;
case 72:
            var3 = var4;
case 70:
            var2 = var3;
case 68:
            var1 = var2;
case 66:
            return var1;
        }
    };
    var3['useCanManageThread'] = var10;
    var3['useCanUnarchiveThread'] = var9;
    var3['canUnarchiveThread'] = var8;
    var3['useIsActiveChannelOrUnarchivableThread'] = var7;
    var7 = function getIsActiveChannelOrUnarchivableThread(arg1) {
        _fun0021: for(var _fun0021_ip = 0; ; ) switch(_fun0021_ip) {
case 0:
            var6 = arg1;
            var5 = null;
            var1 = var5 != var6;
            if(!var1) { _fun0021_ip = 39; continue _fun0021 }
case 46:
            var2 = var6.isThread;
            var2 = var2.bind(var6)();
            var2 = !var2;
            if(var2) { _fun0021_ip = 74; continue _fun0021 }
case 75:
            var3 = var6.isActiveThread;
            var2 = var3.bind(var6)();
case 74:
            if(var2) { _fun0021_ip = 43; continue _fun0021 }
case 10:
            var3 = var6.isArchivedThread;
            var3 = var3.bind(var6)();
            if(!var3) { _fun0021_ip = 22; continue _fun0021 }
case 76:
            var4 = var6.threadMetadata;
            var7 = var5 == var4;
            var5 = undefined;
            if(var7) { _fun0021_ip = 14; continue _fun0021 }
case 77:
            var5 = var4.locked;
case 14:
            var4 = true;
            var3 = var4 !== var5;
case 22:
            if(!var3) { _fun0021_ip = 44; continue _fun0021 }
case 78:
            var5 = _closure1_slot20;
            var4 = undefined;
            var3 = var5.bind(var4)(var6);
case 44:
            var2 = var3;
case 43:
            var1 = var2;
case 39:
            return var1;
        }
    };
    var3['getIsActiveChannelOrUnarchivableThread'] = var7;
    var7 = function computeIsReadOnlyThread(arg1) {
        _fun0022: for(var _fun0022_ip = 0; ; ) switch(_fun0022_ip) {
case 0:
            var3 = arg1;
            var1 = var3.isMediaThread;
            var1 = var1.bind(var3)();
            if(var1) { _fun0022_ip = 25; continue _fun0022 }
case 27:
            var4 = _closure1_slot8;
            var2 = var4.can;
            var1 = _closure1_slot10;
            var1 = var1.MANAGE_THREADS;
            var2 = var2.bind(var4)(var1, var3);
            var1 = var3.isArchivedLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0022_ip = 47; continue _fun0022 }
case 79:
            var1 = !var2;
case 47:
            return var1;
case 25:
            var1 = true;
            return var1;
        }
    };
    var3['computeIsReadOnlyThread'] = var7;
    var3['useIsThreadModerator'] = var6;
    var3['isThreadModerator'] = var5;
    var5 = function useCanRemoveThreadMember(arg1) {
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
            _fun0023: for(var _fun0023_ip = 0; ; ) switch(_fun0023_ip) {
case 0:
                var4 = _closure1_slot7;
                var3 = var4.getChannel;
                var1 = _closure2_slot0;
                var5 = var3.bind(var4)(var1);
                var1 = null;
                if(!(var1 != var5)) { _fun0023_ip = 11; continue _fun0023 }
case 45:
                var3 = _closure1_slot6;
                var1 = var3.getId;
                var4 = var1.bind(var3)();
                var3 = var5.type;
                var1 = _closure1_slot12;
                var1 = var1.PRIVATE_THREAD;
                var1 = var3 === var1;
                if(!var1) { _fun0023_ip = 80; continue _fun0023 }
case 81:
                var3 = var5.ownerId;
                var1 = var3 === var4;
case 80:
                if(var1) { _fun0023_ip = 5; continue _fun0023 }
case 2:
                var4 = _closure1_slot23;
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
    var3['useCanRemoveThreadMember'] = var5;
    var3['useHasPermissionToJoinThreadVoice'] = var4;
    var4 = function useCanJoinThreadVoice(arg1) {
        _fun0024: for(var _fun0024_ip = 0; ; ) switch(_fun0024_ip) {
case 0:
            var7 = arg1;
            var3 = _closure1_slot1;
            var2 = _closure1_slot3;
            var1 = 13;
            var1 = var2[var1];
            var9 = undefined;
            var1 = var3.bind(var9)(var1);
            var1 = var1.bind(var9)();
            var3 = _closure1_slot24;
            var3 = var3.bind(var9)(var7);
            var10 = _closure1_slot13;
            var8 = var10.useExperiment;
            var5 = {};
            var4 = var7.guild_id;
            var5['guildId'] = var4;
            var4 = 'e791ea_1';
            var5['location'] = var4;
            var4 = {};
            var11 = false;
            var4['autoTrackExposure'] = var11;
            var4 = var8.bind(var10)(var5, var4);
            var4 = var4.enabled;
            var8 = _closure1_slot0;
            var5 = 14;
            var5 = var2[var5];
            var10 = var8.bind(var9)(var5);
            var5 = var10.useIsGameInvitesPost;
            var5 = var5.bind(var10)(var7);
            var10 = 15;
            var2 = var2[var10];
            var8 = var8.bind(var9)(var2);
            var2 = var8.useShouldAgeVerifyForAgeGate;
            var2 = var2.bind(var8)();
            if(!var2) { _fun0024_ip = 82; continue _fun0024 }
case 83:
            var8 = _closure1_slot0;
            var6 = _closure1_slot3;
            var6 = var6[var10];
            var9 = var8.bind(var9)(var6);
            var8 = var9.shouldShowAgeGateForChannelId;
            var6 = var7.id;
            var2 = var8.bind(var9)(var6);
case 82:
            var1 = !var1;
            if(!var1) { _fun0024_ip = 71; continue _fun0024 }
case 84:
            var6 = var7.isVocalThread;
            var1 = var6.bind(var7)();
case 71:
            if(!var1) { _fun0024_ip = 60; continue _fun0024 }
case 59:
            if(var4) { _fun0024_ip = 61; continue _fun0024 }
case 58:
            var4 = var5;
case 61:
            var1 = var4;
case 60:
            if(!var1) { _fun0024_ip = 85; continue _fun0024 }
case 86:
            var1 = var3;
case 85:
            if(!var1) { _fun0024_ip = 87; continue _fun0024 }
case 88:
            var1 = !var2;
case 87:
            return var1;
        }
    };
    var3['useCanJoinThreadVoice'] = var4;
    var4 = function useIsNonModInLockedThread(arg1) {
        _fun0025: for(var _fun0025_ip = 0; ; ) switch(_fun0025_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot22;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var3.isLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0025_ip = 89; continue _fun0025 }
case 45:
            var1 = !var2;
case 89:
            return var1;
        }
    };
    var3['useIsNonModInLockedThread'] = var4;
    var2 = function isNonModInLockedThread(arg1) {
        _fun0026: for(var _fun0026_ip = 0; ; ) switch(_fun0026_ip) {
case 0:
            var3 = arg1;
            var2 = _closure1_slot23;
            var1 = undefined;
            var2 = var2.bind(var1)(var3);
            var1 = var3.isLockedThread;
            var1 = var1.bind(var3)();
            if(!var1) { _fun0026_ip = 89; continue _fun0026 }
case 45:
            var1 = !var2;
case 89:
            return var1;
        }
    };
    var3['isNonModInLockedThread'] = var2;
    return var1;
})();