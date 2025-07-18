// app/modules/forums/ForumUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var6 = native2;
    var8 = native3;
    var3 = native6;
    var7 = native7;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var7;
    var4 = function getForumPostReadStates(arg1, arg2) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = arg1;
            var4 = arguments[2];
            var5 = undefined;
            if(!(var4 === var5)) { _fun0001_ip = 30; continue _fun0001 }
 12:
            var2 = _closure1_slot4;
            var1 = new Array(1);
            var1[0] = var2;
            var4 = var1;
 30:
            var2 = var4;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var4 = var2().value;
            var2 = var1;
            var2 = var2 === var5;
            var5 = undefined;
            if(var2) { _fun0001_ip = 55; continue _fun0001 }
 52:
            var5 = var4;
 55:
            if(var2) { _fun0001_ip = 61; continue _fun0001 }
 58:
            var1.return();
 61:
            var1 = {};
            var2 = var3.isArchivedThread;
            var2 = var2.bind(var3)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 106; continue _fun0001 }
 79:
            var8 = var5.isNewForumThread;
            var7 = var3.id;
            var6 = var3.parent_id;
            var4 = arg2;
            var2 = var8.bind(var5)(var7, var6, var4);
 106:
            var1['isNew'] = var2;
            var2 = var3.isArchivedThread;
            var2 = var2.bind(var3)();
            var2 = !var2;
            if(!var2) { _fun0001_ip = 143; continue _fun0001 }
 127:
            var4 = var5.isForumPostUnread;
            var3 = var3.id;
            var2 = var4.bind(var5)(var3);
 143:
            var1['hasUnreads'] = var2;
            return var1;
        }
    };
    var _closure1_slot8 = var4;
    var1 = global;
    var10 = var1.Object;
    var9 = var10.defineProperty;
    var5 = {};
    var1 = true;
    var5['value'] = var1;
    var1 = '__esModule';
    var1 = var9.bind(var10)(var3, var1, var5);
    var1 = 0;
    var5 = var7[var1];
    var1 = undefined;
    var5 = var8.bind(var1)(var5);
    var _closure1_slot2 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot3 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 3;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ForumTimestampFormats;
    var _closure1_slot5 = var5;
    var5 = 4;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var5 = var5.ChannelFlags;
    var _closure1_slot6 = var5;
    var5 = function getCreationDefaultFormatter() {
        var1 = {};
        var6 = _closure1_slot0;
        var7 = _closure1_slot1;
        var2 = 5;
        var3 = var7[var2];
        var5 = undefined;
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.nFt9cn;
        var1['minutes'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.jzCewc;
        var1['hours'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var3 = var3.t;
        var3 = var3.U4I0s7;
        var1['days'] = var3;
        var3 = var7[var2];
        var3 = var6.bind(var5)(var3);
        var4 = var3.intl;
        var3 = var4.string;
        var2 = var7[var2];
        var2 = var6.bind(var5)(var2);
        var2 = var2.t;
        var2 = var2.nBNJ/P;
        var2 = var3.bind(var4)(var2);
        var1['month'] = var2;
        return var1;
    };
    var _closure1_slot7 = var5;
    var5 = 7;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/forums/ForumUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var3['getForumPostReadStates'] = var4;
    var4 = function getForumPostReadStatesById(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arguments[1];
            var7 = undefined;
            if(!(var2 === var7)) { _fun0002_ip = 43; continue _fun0002 }
 9:
            var4 = _closure1_slot2;
            var1 = new Array(3);
            var1[0] = var4;
            var4 = _closure1_slot3;
            var1[1] = var4;
            var3 = _closure1_slot4;
            var1[2] = var3;
            var2 = var1;
 43:
            var5 = var2;
            var1 = var5[Symbol.iterator];
            var5 = var1().next;
            var4 = var5().value;
            var2 = var1;
            var2 = var2 === var7;
            var3 = undefined;
            if(var2) { _fun0002_ip = 68; continue _fun0002 }
 65:
            var3 = var4;
 68:
            var4 = undefined;
            if(var2) { _fun0002_ip = 98; continue _fun0002 }
 73:
            var8 = var5().value;
            var6 = var1;
            var6 = var6 === var7;
            var4 = undefined;
            var2 = var6;
            if(var6) { _fun0002_ip = 98; continue _fun0002 }
 92:
            var4 = var8;
            var2 = var6;
 98:
            var8 = undefined;
            if(var2) { _fun0002_ip = 128; continue _fun0002 }
 103:
            var6 = var5().value;
            var5 = var1;
            var5 = var5 === var7;
            var8 = undefined;
            var2 = var5;
            if(var5) { _fun0002_ip = 128; continue _fun0002 }
 122:
            var8 = var6;
            var2 = var5;
 128:
            if(var2) { _fun0002_ip = 134; continue _fun0002 }
 131:
            var1.return();
 134:
            var2 = var3.getChannel;
            var1 = arg1;
            var6 = var2.bind(var3)(var1);
            var1 = null;
            if(!(var1 != var6)) { _fun0002_ip = 201; continue _fun0002 }
 153:
            var3 = var4.getGuild;
            var2 = var6.guild_id;
            var5 = var3.bind(var4)(var2);
            var3 = var1 == var5;
            var2 = null;
            if(var3) { _fun0002_ip = 199; continue _fun0002 }
 177:
            var4 = _closure1_slot8;
            var3 = new Array(1);
            var3[0] = var8;
            var2 = var4.bind(var7)(var6, var5, var3);
 199:
            return var2;
 201:
            return var1;
        }
    };
    var3['getForumPostReadStatesById'] = var4;
    var4 = function getForumTimestampFormatter(arg1, arg2) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var2 = _closure1_slot5;
            var3 = var2.POSTED_DURATION_AGO;
            var2 = arg2;
            if(!(var2 === var3)) { _fun0003_ip = 61; continue _fun0003 }
 20:
            var4 = _closure1_slot0;
            var3 = _closure1_slot1;
            var2 = 6;
            var3 = var3[var2];
            var2 = undefined;
            var2 = var4.bind(var2)(var3);
            var2 = var2.ThreadSortOrder;
            var3 = var2.CREATION_DATE;
            var2 = arg1;
            if(!(var2 !== var3)) { _fun0003_ip = 65; continue _fun0003 }
 61:
            var2 = undefined;
            return var2;
 65:
            var1 = _closure1_slot7;
            return var1;
        }
    };
    var3['getForumTimestampFormatter'] = var4;
    var4 = function canDisplayPostUnreadMessageCount(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var5 = arg1;
            var2 = arg2;
            var1 = var2[Symbol.iterator];
            var2 = var1().next;
            var3 = var2().value;
            var2 = var1;
            var4 = undefined;
            var2 = var2 === var4;
            if(var2) { _fun0004_ip = 28; continue _fun0004 }
 25:
            var4 = var3;
 28:
            if(var2) { _fun0004_ip = 34; continue _fun0004 }
 31:
            var1.return();
 34:
            var1 = var4.hasTrackedUnread;
            var1 = var1.bind(var4)(var5);
            var2 = var4.hasOpenedThread;
            var3 = var2.bind(var4)(var5);
            var2 = var4.getTrackedAckMessageId;
            var4 = var2.bind(var4)(var5);
            var2 = null;
            var2 = var2 != var4;
            if(!var1) { _fun0004_ip = 79; continue _fun0004 }
 76:
            var1 = var3;
 79:
            if(!var1) { _fun0004_ip = 85; continue _fun0004 }
 82:
            var1 = var2;
 85:
            return var1;
        }
    };
    var3['canDisplayPostUnreadMessageCount'] = var4;
    var2 = function isForumPostPinned(arg1) {
        _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
            var4 = _closure1_slot2;
            var3 = var4.getChannel;
            var2 = arg1;
            var4 = var3.bind(var4)(var2);
            var2 = null;
            var3 = var2 == var4;
            var2 = undefined;
            if(var3) { _fun0005_ip = 52; continue _fun0005 }
 31:
            var3 = var4.hasFlag;
            var1 = _closure1_slot6;
            var1 = var1.PINNED;
            var2 = var3.bind(var4)(var1);
 52:
            var1 = true;
            var1 = var1 === var2;
            return var1;
        }
    };
    var3['isForumPostPinned'] = var2;
    return var1;
})();