// app/modules/welcome_cta/WelcomeCTAUtils.tsx
export default (function(native1, native2, native3, native4, native5, native6, native7) {
    var5 = native2;
    var7 = native3;
    var3 = native6;
    var6 = native7;
    var _closure1_slot0 = var7;
    var _closure1_slot1 = var6;
    var1 = global;
    var9 = var1.Object;
    var8 = var9.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var8.bind(var9)(var3, var1, var4);
    var1 = 0;
    var4 = var6[var1];
    var1 = undefined;
    var4 = var7.bind(var1)(var4);
    var _closure1_slot2 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.WELCOME_STICKERS;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.AnalyticEvents;
    var _closure1_slot4 = var4;
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/welcome_cta/WelcomeCTAUtils.tsx';
    var4 = var5.bind(var6)(var4);
    var4 = function pickHelloSticker() {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var3;
            var6 = undefined;
            var5 = undefined;
            if(var4) { _fun0001_ip = 34; continue _fun0001 }
 29:
            var5 = var3.id;
 34:
            var2 = var2 != var5;
            var3 = 0;
            if(!var2) { _fun0001_ip = 74; continue _fun0001 }
 43:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var4 = var4.bind(var6)(var2);
            var2 = var4.extractTimestamp;
            var3 = var2.bind(var4)(var5);
 74:
            var2 = _closure1_slot3;
            var1 = var2.length;
            var1 = var3 % var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['pickHelloSticker'] = var4;
    var4 = function(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var3 = _closure1_slot2;
            var2 = var3.getCurrentUser;
            var3 = var2.bind(var3)();
            var2 = null;
            var4 = var2 == var3;
            var5 = undefined;
            var6 = undefined;
            if(var4) { _fun0002_ip = 34; continue _fun0002 }
 29:
            var6 = var3.id;
 34:
            var2 = var2 != var6;
            var3 = 0;
            if(!var2) { _fun0002_ip = 74; continue _fun0002 }
 43:
            var4 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 3;
            var2 = var7[var2];
            var4 = var4.bind(var5)(var2);
            var2 = var4.extractTimestamp;
            var3 = var2.bind(var4)(var6);
 74:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var2 = 3;
            var2 = var6[var2];
            var5 = var4.bind(var5)(var2);
            var4 = var5.extractTimestamp;
            var2 = arg1;
            var2 = var4.bind(var5)(var2);
            var3 = var3 + var2;
            var2 = _closure1_slot3;
            var1 = var2.length;
            var1 = var3 % var1;
            var1 = var2[var1];
            return var1;
        }
    };
    var3['pickWelcomeSticker'] = var4;
    var2 = function(arg1, arg2, arg3) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var9 = arg1;
            var7 = arg2;
            var8 = arg3;
            var3 = _closure1_slot0;
            var4 = _closure1_slot1;
            var2 = 4;
            var5 = var4[var2];
            var1 = undefined;
            var11 = var3.bind(var1)(var5);
            var10 = var11.sendGreetMessage;
            var5 = var9.id;
            var2 = var4[var2];
            var13 = var3.bind(var1)(var2);
            var12 = var13.getSendMessageOptionsForReply;
            var2 = {};
            var2['channel'] = var9;
            var2['message'] = var7;
            var9 = true;
            var2['shouldMention'] = var9;
            var2['showMentionToggle'] = var9;
            var2 = var12.bind(var13)(var2);
            var2 = var10.bind(var11)(var5, var8, var2);
            var2 = 5;
            var2 = var4[var2];
            var5 = var3.bind(var1)(var2);
            var4 = var5.track;
            var2 = _closure1_slot4;
            var3 = var2.WELCOME_CTA_CLICKED;
            var2 = {};
            var2['is_reply'] = var9;
            var2['sticker_id'] = var8;
            var7 = var7.author;
            var7 = var7.id;
            var2['target_user'] = var7;
            var7 = _closure1_slot2;
            var6 = var7.getCurrentUser;
            var7 = var6.bind(var7)();
            var6 = null;
            var8 = var6 == var7;
            var6 = undefined;
            if(var8) { _fun0003_ip = 180; continue _fun0003 }
 175:
            var6 = var7.id;
 180:
            var2['sender'] = var6;
            var2 = var4.bind(var5)(var3, var2);
            return var1;
        }
    };
    var3['handleWelcomeCtaClicked'] = var2;
    return var1;
})();