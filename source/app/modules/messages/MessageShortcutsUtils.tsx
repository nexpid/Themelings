// app/modules/messages/MessageShortcutsUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var5;
    var1 = native3;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function isMentioned(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg2;
            var1 = !var1;
            if(!var1) { _fun0001_ip = 18; continue _fun0001 }
 9:
            var2 = arg1;
            var1 = var2.mentioned;
 18:
            return var1;
        }
    };
    var _closure1_slot6 = var1;
    var1 = function hasMosaicAttachment(arg1) {
        var4 = _closure1_slot0;
        var3 = _closure1_slot2;
        var2 = 2;
        var3 = var3[var2];
        var2 = undefined;
        var2 = var4.bind(var2)(var3);
        var3 = var2.InlineAttachmentMedia;
        var2 = var3.getSetting;
        var2 = var2.bind(var3)();
        var _closure2_slot0 = var2;
        var2 = arg1;
        var3 = var2.attachments;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 3;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.getMosaicMediaTypeForAttachment;
                var2 = _closure2_slot0;
                var1 = arg1;
                var3 = var3.bind(var4)(var1, var2);
                var1 = 'VIDEO';
                var1 = var1 === var3;
                if(var1) { _fun0002_ip = 66; continue _fun0002 }
 58:
                var2 = 'IMAGE';
                var1 = var2 === var3;
 66:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot7 = var1;
    var1 = function hasReacted(arg1) {
        var1 = arg1;
        var3 = var1.reactions;
        var2 = var3.some;
        var1 = function(arg1) {
            _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
                var2 = arg1;
                var1 = var2.me;
                if(var1) { _fun0003_ip = 18; continue _fun0003 }
 12:
                var1 = var2.me_burst;
 18:
                return var1;
            }
        };
        var1 = var2.bind(var3)(var1);
        return var1;
    };
    var _closure1_slot8 = var1;
    var1 = function hasMinimumReactions(arg1, arg2) {
        var3 = _closure1_slot0;
        var2 = _closure1_slot2;
        var1 = 4;
        var2 = var2[var1];
        var1 = undefined;
        var4 = var3.bind(var1)(var2);
        var3 = var4.sumBy;
        var1 = arg1;
        var2 = var1.reactions;
        var1 = function(arg1) {
            _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
                var1 = arg1;
                var5 = var1.count_details;
                var4 = null;
                var1 = var4 == var5;
                var6 = undefined;
                if(var1) { _fun0004_ip = 26; continue _fun0004 }
 20:
                var6 = var5.burst;
 26:
                var7 = var4 != var6;
                var1 = 0;
                if(!var7) { _fun0004_ip = 38; continue _fun0004 }
 35:
                var1 = var6;
 38:
                var6 = var4 == var5;
                var3 = undefined;
                if(var6) { _fun0004_ip = 53; continue _fun0004 }
 47:
                var3 = var5.normal;
 53:
                var4 = var4 != var3;
                var2 = 0;
                if(!var4) { _fun0004_ip = 65; continue _fun0004 }
 62:
                var2 = var3;
 65:
                var1 = var1 + var2;
                return var1;
            }
        };
        var2 = var3.bind(var4)(var2, var1);
        var1 = arg2;
        var1 = var2 >= var1;
        return var1;
    };
    var _closure1_slot9 = var1;
    var1 = function isAnnouncementChannel(arg1) {
        var1 = arg1;
        var2 = var1.type;
        var1 = _closure1_slot3;
        var1 = var1.GUILD_ANNOUNCEMENT;
        var1 = var2 === var1;
        return var1;
    };
    var _closure1_slot10 = var1;
    var1 = function checkMessageConditionsForShortcut(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var1 = arg1;
            var9 = var1.shortcut;
            var5 = var1.message;
            var2 = var1.ignoreMentioned;
            var6 = var1.channel;
            var7 = _closure1_slot1;
            var1 = _closure1_slot2;
            var8 = 1;
            var1 = var1[var8];
            var4 = undefined;
            var10 = var7.bind(var4)(var1);
            var7 = var10.getCurrentConfig;
            var1 = {};
            var11 = 'createMessageContent';
            var1['location'] = var11;
            var1 = var7.bind(var10)(var1);
            var7 = var1.showShortcutsConditions;
            var1 = 'none';
            if(!(var1 !== var7)) { _fun0005_ip = 430; continue _fun0005 }
 90:
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var6);
            if(!var1) { _fun0005_ip = 123; continue _fun0005 }
 102:
            var1 = 'all';
            if(!(var1 !== var7)) { _fun0005_ip = 123; continue _fun0005 }
 110:
            var1 = 'only_announcement';
            if(!(var1 === var7)) { _fun0005_ip = 426; continue _fun0005 }
 123:
            var1 = _closure1_slot5;
            var1 = var1.REPLY;
            if(!(var9 === var1)) { _fun0005_ip = 152; continue _fun0005 }
 137:
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var6);
            if(var1) { _fun0005_ip = 422; continue _fun0005 }
 152:
            var1 = _closure1_slot5;
            var1 = var1.THREAD;
            if(!(var9 !== var1)) { _fun0005_ip = 357; continue _fun0005 }
 169:
            var1 = _closure1_slot5;
            var1 = var1.REACT;
            if(!(var9 !== var1)) { _fun0005_ip = 186; continue _fun0005 }
 183:
            var8 = 5;
 186:
            var1 = 'all';
            if(!(var1 !== var7)) { _fun0005_ip = 296; continue _fun0005 }
 194:
            var1 = 'only_direct';
            if(!(var1 !== var7)) { _fun0005_ip = 284; continue _fun0005 }
 204:
            var1 = 'only_attachments';
            if(!(var1 !== var7)) { _fun0005_ip = 273; continue _fun0005 }
 214:
            var1 = 'only_reactions';
            if(!(var1 !== var7)) { _fun0005_ip = 249; continue _fun0005 }
 224:
            var1 = 'only_announcement';
            if(!(var1 !== var7)) { _fun0005_ip = 238; continue _fun0005 }
 234:
            var1 = false;
            return var1;
 238:
            var1 = _closure1_slot10;
            var1 = var1.bind(var4)(var6);
            return var1;
 249:
            var1 = _closure1_slot8;
            var1 = var1.bind(var4)(var5);
            if(var1) { _fun0005_ip = 271; continue _fun0005 }
 261:
            var9 = _closure1_slot9;
            var1 = var9.bind(var4)(var5, var8);
 271:
            return var1;
 273:
            var1 = _closure1_slot7;
            var1 = var1.bind(var4)(var5);
            return var1;
 284:
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)(var5, var2);
            return var1;
 296:
            var1 = _closure1_slot6;
            var1 = var1.bind(var4)(var5, var2);
            if(var1) { _fun0005_ip = 318; continue _fun0005 }
 309:
            var2 = _closure1_slot7;
            var1 = var2.bind(var4)(var5);
 318:
            if(var1) { _fun0005_ip = 330; continue _fun0005 }
 321:
            var2 = _closure1_slot8;
            var1 = var2.bind(var4)(var5);
 330:
            if(var1) { _fun0005_ip = 343; continue _fun0005 }
 333:
            var2 = _closure1_slot9;
            var1 = var2.bind(var4)(var5, var8);
 343:
            if(var1) { _fun0005_ip = 355; continue _fun0005 }
 346:
            var2 = _closure1_slot10;
            var1 = var2.bind(var4)(var6);
 355:
            return var1;
 357:
            var1 = 'all';
            var1 = var1 === var7;
            if(var1) { _fun0005_ip = 378; continue _fun0005 }
 368:
            var2 = 'only_announcement';
            var1 = var2 === var7;
 378:
            if(!var1) { _fun0005_ip = 420; continue _fun0005 }
 381:
            var2 = _closure1_slot10;
            var2 = var2.bind(var4)(var6);
            if(!var2) { _fun0005_ip = 417; continue _fun0005 }
 393:
            var4 = var5.hasFlag;
            var3 = _closure1_slot4;
            var3 = var3.HAS_THREAD;
            var3 = var4.bind(var5)(var3);
            var2 = !var3;
 417:
            var1 = var2;
 420:
            return var1;
 422:
            var1 = false;
            return var1;
 426:
            var1 = false;
            return var1;
 430:
            var1 = false;
            return var1;
        }
    };
    var _closure1_slot11 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var7 = var4.ChannelTypes;
    var _closure1_slot3 = var7;
    var4 = var4.MessageFlags;
    var _closure1_slot4 = var4;
    var4 = {};
    var7 = 'react';
    var4['REACT'] = var7;
    var7 = 'reply';
    var4['REPLY'] = var7;
    var7 = 'forward';
    var4['FORWARD'] = var7;
    var7 = 'thread';
    var4['THREAD'] = var7;
    var _closure1_slot5 = var4;
    var4 = 9;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/MessageShortcutsUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function isInMessageShortcutsExperiment() {
        var3 = _closure1_slot1;
        var2 = _closure1_slot2;
        var1 = 1;
        var2 = var2[var1];
        var1 = undefined;
        var3 = var3.bind(var1)(var2);
        var2 = var3.getCurrentConfig;
        var1 = {};
        var4 = 'createMessageContent';
        var1['location'] = var4;
        var1 = var2.bind(var3)(var1);
        var2 = var1.showShortcutsConditions;
        var1 = 'none';
        var1 = var1 !== var2;
        return var1;
    };
    var3['isInMessageShortcutsExperiment'] = var4;
    var4 = function canShowForwardShortcut(arg1, arg2, arg3) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var4 = arg1;
            var5 = arg3;
            var1 = null;
            if(!(var1 != var5)) { _fun0006_ip = 98; continue _fun0006 }
 12:
            var3 = _closure1_slot11;
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.FORWARD;
            var2['shortcut'] = var6;
            var2['message'] = var4;
            var6 = arg2;
            var2['ignoreMentioned'] = var6;
            var2['channel'] = var5;
            var5 = undefined;
            var2 = var3.bind(var5)(var2);
            var3 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 5;
            var1 = var6[var1];
            var3 = var3.bind(var5)(var1);
            var1 = var3.canForwardMessage;
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0006_ip = 96; continue _fun0006 }
 93:
            var1 = var2;
 96:
            return var1;
 98:
            var1 = false;
            return var1;
        }
    };
    var3['canShowForwardShortcut'] = var4;
    var4 = function canShowReplyShortcut(arg1, arg2, arg3) {
        _fun0007: for(var _fun0007_ip = 0; ; ) switch(_fun0007_ip) {
 0:
            var5 = arg1;
            var4 = arg3;
            var1 = null;
            if(!(var1 != var4)) { _fun0007_ip = 99; continue _fun0007 }
 12:
            var3 = _closure1_slot11;
            var2 = {};
            var6 = _closure1_slot5;
            var6 = var6.REPLY;
            var2['shortcut'] = var6;
            var2['message'] = var5;
            var6 = arg2;
            var2['ignoreMentioned'] = var6;
            var2['channel'] = var4;
            var6 = undefined;
            var2 = var3.bind(var6)(var2);
            var3 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var3 = var3.bind(var6)(var1);
            var1 = var3.canReplyToMessage;
            var1 = var1.bind(var3)(var4, var5);
            if(!var1) { _fun0007_ip = 97; continue _fun0007 }
 94:
            var1 = var2;
 97:
            return var1;
 99:
            var1 = false;
            return var1;
        }
    };
    var3['canShowReplyShortcut'] = var4;
    var4 = function canShowReactionShortcut(arg1, arg2, arg3) {
        _fun0008: for(var _fun0008_ip = 0; ; ) switch(_fun0008_ip) {
 0:
            var4 = arg3;
            var1 = null;
            if(!(var1 != var4)) { _fun0008_ip = 92; continue _fun0008 }
 9:
            var5 = _closure1_slot11;
            var2 = {};
            var3 = _closure1_slot5;
            var3 = var3.REACT;
            var2['shortcut'] = var3;
            var3 = arg1;
            var2['message'] = var3;
            var3 = arg2;
            var2['ignoreMentioned'] = var3;
            var2['channel'] = var4;
            var3 = undefined;
            var2 = var5.bind(var3)(var2);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var1 = 7;
            var1 = var6[var1];
            var1 = var5.bind(var3)(var1);
            var1 = var1.bind(var3)(var4);
            if(!var1) { _fun0008_ip = 90; continue _fun0008 }
 87:
            var1 = var2;
 90:
            return var1;
 92:
            var1 = false;
            return var1;
        }
    };
    var3['canShowReactionShortcut'] = var4;
    var2 = function canShowThreadShortcut(arg1, arg2) {
        _fun0009: for(var _fun0009_ip = 0; ; ) switch(_fun0009_ip) {
 0:
            var6 = arg1;
            var5 = arg2;
            var1 = null;
            if(!(var1 != var5)) { _fun0009_ip = 130; continue _fun0009 }
 12:
            var2 = _closure1_slot0;
            var1 = _closure1_slot2;
            var8 = 8;
            var1 = var1[var8];
            var4 = undefined;
            var2 = var2.bind(var4)(var1);
            var1 = var2.computeCanStartPublicThread;
            var1 = var1.bind(var2)(var5, var6);
            if(var1) { _fun0009_ip = 81; continue _fun0009 }
 52:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var8];
            var3 = var3.bind(var4)(var2);
            var2 = var3.computeCanStartPrivateThread;
            var1 = var2.bind(var3)(var5, var6);
 81:
            var3 = _closure1_slot11;
            var2 = {};
            var7 = _closure1_slot5;
            var7 = var7.THREAD;
            var2['shortcut'] = var7;
            var2['message'] = var6;
            var6 = false;
            var2['ignoreMentioned'] = var6;
            var2['channel'] = var5;
            var2 = var3.bind(var4)(var2);
            if(!var1) { _fun0009_ip = 128; continue _fun0009 }
 125:
            var1 = var2;
 128:
            return var1;
 130:
            var1 = false;
            return var1;
        }
    };
    var3['canShowThreadShortcut'] = var2;
    return var1;
})();