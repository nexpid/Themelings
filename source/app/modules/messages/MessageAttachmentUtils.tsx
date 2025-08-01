// app/modules/messages/MessageAttachmentUtils.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var4 = function getForumPostShouldObscure(arg1, arg2, arg3) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var8 = arg3;
            var3 = null;
            if(!(var3 != var1)) { _fun0001_ip = 522; continue _fun0001 }
 15:
            var5 = var1.type;
            var7 = _closure1_slot0;
            var2 = _closure1_slot2;
            var9 = 7;
            var4 = var2[var9];
            var2 = undefined;
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.EMBED;
            if(!(var4 !== var5)) { _fun0001_ip = 237; continue _fun0001 }
 64:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.ATTACHMENT;
            if(!(var4 !== var5)) { _fun0001_ip = 189; continue _fun0001 }
 97:
            var7 = _closure1_slot0;
            var4 = _closure1_slot2;
            var4 = var4[var9];
            var4 = var7.bind(var2)(var4);
            var4 = var4.ForumPostMediaTypes;
            var4 = var4.COMPONENT;
            var7 = null;
            if(!(var4 === var5)) { _fun0001_ip = 283; continue _fun0001 }
 135:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.GenericMedia;
            var4['type'] = var5;
            var5 = var1.srcUnfurledMediaItem;
            var4['media'] = var5;
            var7 = var4;
            _fun0001_ip = 283; continue _fun0001;
 189:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.Attachment;
            var4['type'] = var5;
            var4['media'] = var1;
            var7 = var4;
            _fun0001_ip = 283; continue _fun0001;
 237:
            var4 = {};
            var9 = _closure1_slot0;
            var10 = _closure1_slot2;
            var5 = 4;
            var5 = var10[var5];
            var5 = var9.bind(var2)(var5);
            var5 = var5.ObscuredMediaTypes;
            var5 = var5.Embed;
            var4['type'] = var5;
            var4['media'] = var1;
            var7 = var4;
 283:
            if(!(var3 != var7)) { _fun0001_ip = 506; continue _fun0001 }
 290:
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 3;
            var5 = var9[var3];
            var10 = var4.bind(var2)(var5);
            var5 = var10.getMediaObscuredReasonFromBitmask;
            var5 = var5.bind(var10)(var7, var8);
            var3 = var9[var3];
            var4 = var4.bind(var2)(var3);
            var3 = var4.isMediaScanPending;
            var7 = var3.bind(var4)(var7, var8);
            var3 = var5.length;
            var4 = 0;
            if(!(!(var3 > var4))) { _fun0001_ip = 483; continue _fun0001 }
 357:
            var3 = new Array(2);
            if(var7) { _fun0001_ip = 436; continue _fun0001 }
 364:
            var1 = var1.spoiler;
            if(var1) { _fun0001_ip = 388; continue _fun0001 }
 373:
            var1 = false;
            var3[0] = var1;
            var3[1] = var2;
            var1 = var3;
            _fun0001_ip = 434; continue _fun0001;
 388:
            var7 = arg2;
            var3[0] = var7;
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 5;
            var7 = var9[var7];
            var7 = var8.bind(var2)(var7);
            var7 = var7.ObscureReason;
            var7 = var7.SPOILER;
            var3[1] = var7;
            var1 = var3;
 434:
            _fun0001_ip = 481; continue _fun0001;
 436:
            var7 = true;
            var3[0] = var7;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var6 = 5;
            var6 = var8[var6];
            var6 = var7.bind(var2)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.POTENTIAL_EXPLICIT_CONTENT;
            var3[1] = var6;
            var1 = var3;
 481:
            _fun0001_ip = 504; continue _fun0001;
 483:
            var3 = new Array(2);
            var6 = true;
            var3[0] = var6;
            var4 = var5[var4];
            var3[1] = var4;
            var1 = var3;
 504:
            return var1;
 506:
            var1 = new Array(2);
            var3 = false;
            var1[0] = var3;
            var1[1] = var2;
            return var1;
 522:
            var1 = new Array(2);
            var2 = false;
            var1[0] = var2;
            var2 = undefined;
            var1[1] = var2;
            return var1;
        }
    };
    var _closure1_slot7 = var4;
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
    var _closure1_slot3 = var5;
    var5 = 1;
    var5 = var7[var5];
    var5 = var8.bind(var1)(var5);
    var _closure1_slot4 = var5;
    var5 = 2;
    var5 = var7[var5];
    var5 = var6.bind(var1)(var5);
    var8 = var5.MessageAttachmentFlags;
    var _closure1_slot5 = var8;
    var5 = var5.Permissions;
    var _closure1_slot6 = var5;
    var5 = 12;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/messages/MessageAttachmentUtils.tsx';
    var5 = var6.bind(var7)(var5);
    var5 = function(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var11 = arg1;
            var10 = arg2;
            var1 = var11.spoiler;
            var2 = var11.flags;
            var3 = 0;
            var6 = undefined;
            var8 = 0;
            if(!(var6 !== var2)) { _fun0002_ip = 30; continue _fun0002 }
 27:
            var8 = var2;
 30:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var5 = 3;
            var2 = var14[var5];
            var9 = var13.bind(var6)(var2);
            var7 = var9.getMediaObscuredReasonFromBitmask;
            var2 = {};
            var12 = 4;
            var15 = var14[var12];
            var15 = var13.bind(var6)(var15);
            var15 = var15.ObscuredMediaTypes;
            var15 = var15.Attachment;
            var2['type'] = var15;
            var2['media'] = var11;
            var2 = var7.bind(var9)(var2, var10);
            var5 = var14[var5];
            var9 = var13.bind(var6)(var5);
            var7 = var9.isMediaScanPending;
            var5 = {};
            var12 = var14[var12];
            var12 = var13.bind(var6)(var12);
            var12 = var12.ObscuredMediaTypes;
            var12 = var12.Attachment;
            var5['type'] = var12;
            var5['media'] = var11;
            var5 = var7.bind(var9)(var5, var10);
            var7 = var2.length;
            if(!(!(var7 > var3))) { _fun0002_ip = 286; continue _fun0002 }
 165:
            if(var5) { _fun0002_ip = 252; continue _fun0002 }
 168:
            if(var1) { _fun0002_ip = 218; continue _fun0002 }
 171:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var1 = 6;
            var1 = var7[var1];
            var7 = var5.bind(var6)(var1);
            var5 = var7.hasFlag;
            var1 = _closure1_slot5;
            var1 = var1.IS_SPOILER;
            var5 = var5.bind(var7)(var8, var1);
            var1 = null;
            if(!var5) { _fun0002_ip = 250; continue _fun0002 }
 218:
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.ObscureReason;
            var1 = var5.SPOILER;
 250:
            _fun0002_ip = 284; continue _fun0002;
 252:
            var5 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 5;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.ObscureReason;
            var1 = var4.POTENTIAL_EXPLICIT_CONTENT;
 284:
            _fun0002_ip = 290; continue _fun0002;
 286:
            var1 = var2[var3];
 290:
            return var1;
        }
    };
    var3['getObscureReasonForAttachment'] = var5;
    var5 = function(arg1, arg2, arg3, arg4, arg5) {
        _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
 0:
            var10 = arg1;
            var9 = arg5;
            var4 = _closure1_slot3;
            var3 = var4.getMessage;
            var2 = arg2;
            var1 = arg3;
            var2 = var3.bind(var4)(var2, var1);
            var1 = null;
            if(!(var1 != var2)) { _fun0003_ip = 284; continue _fun0003 }
 40:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = 3;
            var4 = var11[var3];
            var7 = undefined;
            var8 = var12.bind(var7)(var4);
            var6 = var8.getMediaObscuredReasonFromBitmask;
            var4 = {};
            var13 = 4;
            var11 = var11[var13];
            var11 = var12.bind(var7)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.Embed;
            var4['type'] = var11;
            var4['media'] = var10;
            var4 = var6.bind(var8)(var4, var9);
            var2 = var2.author;
            var2 = var2.bot;
            var2 = !var2;
            if(!var2) { _fun0003_ip = 188; continue _fun0003 }
 127:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var3 = var11[var3];
            var8 = var12.bind(var7)(var3);
            var6 = var8.isMediaScanPending;
            var3 = {};
            var11 = var11[var13];
            var11 = var12.bind(var7)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.Embed;
            var3['type'] = var11;
            var3['media'] = var10;
            var2 = var6.bind(var8)(var3, var9);
 188:
            var6 = var4.length;
            var3 = 0;
            if(!(!(var6 > var3))) { _fun0003_ip = 278; continue _fun0003 }
 199:
            if(var2) { _fun0003_ip = 244; continue _fun0003 }
 202:
            var6 = arg4;
            var2 = null;
            if(!var6) { _fun0003_ip = 242; continue _fun0003 }
 210:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var6 = 5;
            var6 = var9[var6];
            var6 = var8.bind(var7)(var6);
            var6 = var6.ObscureReason;
            var2 = var6.SPOILER;
 242:
            _fun0003_ip = 276; continue _fun0003;
 244:
            var6 = _closure1_slot0;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var6.bind(var7)(var5);
            var5 = var5.ObscureReason;
            var2 = var5.POTENTIAL_EXPLICIT_CONTENT;
 276:
            _fun0003_ip = 282; continue _fun0003;
 278:
            var2 = var4[var3];
 282:
            return var2;
 284:
            return var1;
        }
    };
    var3['getObscureReasonForEmbed'] = var5;
    var5 = function(arg1, arg2) {
        _fun0004: for(var _fun0004_ip = 0; ; ) switch(_fun0004_ip) {
 0:
            var10 = arg1;
            var9 = arg2;
            var3 = arguments[2];
            var1 = arguments[3];
            var4 = undefined;
            if(!(var3 === var4)) { _fun0004_ip = 20; continue _fun0004 }
 18:
            var3 = false;
 20:
            if(!(var1 === var4)) { _fun0004_ip = 26; continue _fun0004 }
 24:
            var1 = false;
 26:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = 3;
            var6 = var11[var5];
            var8 = var12.bind(var4)(var6);
            var7 = var8.getMediaObscuredReasonFromBitmask;
            var6 = {};
            var13 = 4;
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.GenericMedia;
            var6['type'] = var11;
            var6['media'] = var10;
            var8 = var7.bind(var8)(var6, var9);
            var1 = !var1;
            if(!var1) { _fun0004_ip = 163; continue _fun0004 }
 102:
            var12 = _closure1_slot0;
            var11 = _closure1_slot2;
            var5 = var11[var5];
            var7 = var12.bind(var4)(var5);
            var6 = var7.isMediaScanPending;
            var5 = {};
            var11 = var11[var13];
            var11 = var12.bind(var4)(var11);
            var11 = var11.ObscuredMediaTypes;
            var11 = var11.GenericMedia;
            var5['type'] = var11;
            var5['media'] = var10;
            var1 = var6.bind(var7)(var5, var9);
 163:
            var7 = var8.includes;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var5 = 5;
            var6 = var6[var5];
            var6 = var9.bind(var4)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.EXPLICIT_CONTENT;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0004_ip = 354; continue _fun0004 }
 211:
            var7 = var8.includes;
            var9 = _closure1_slot0;
            var6 = _closure1_slot2;
            var6 = var6[var5];
            var6 = var9.bind(var4)(var6);
            var6 = var6.ObscureReason;
            var6 = var6.GORE_CONTENT;
            var6 = var7.bind(var8)(var6);
            if(var6) { _fun0004_ip = 323; continue _fun0004 }
 253:
            if(var1) { _fun0004_ip = 292; continue _fun0004 }
 256:
            var1 = null;
            if(!var3) { _fun0004_ip = 290; continue _fun0004 }
 261:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.SPOILER;
 290:
            _fun0004_ip = 321; continue _fun0004;
 292:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.POTENTIAL_EXPLICIT_CONTENT;
 321:
            _fun0004_ip = 352; continue _fun0004;
 323:
            var6 = _closure1_slot0;
            var3 = _closure1_slot2;
            var3 = var3[var5];
            var3 = var6.bind(var4)(var3);
            var3 = var3.ObscureReason;
            var1 = var3.GORE_CONTENT;
 352:
            _fun0004_ip = 383; continue _fun0004;
 354:
            var3 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var5];
            var2 = var3.bind(var4)(var2);
            var2 = var2.ObscureReason;
            var1 = var2.EXPLICIT_CONTENT;
 383:
            return var1;
        }
    };
    var3['getObscureReasonForUnfurledMediaItem'] = var5;
    var3['getForumPostShouldObscure'] = var4;
    var4 = function useShouldObscure(arg1) {
        var1 = arg1;
        var3 = var1.channel;
        var _closure2_slot0 = var3;
        var5 = var1.media;
        var10 = _closure1_slot0;
        var9 = _closure1_slot2;
        var3 = 8;
        var3 = var9[var3];
        var4 = undefined;
        var7 = var10.bind(var4)(var3);
        var6 = var7.useStateFromStores;
        var8 = _closure1_slot4;
        var3 = new Array(1);
        var3[0] = var8;
        var2 = function() {
            _fun0005: for(var _fun0005_ip = 0; ; ) switch(_fun0005_ip) {
 0:
                var3 = _closure2_slot0;
                var1 = null;
                var1 = var1 != var3;
                if(!var1) { _fun0005_ip = 49; continue _fun0005 }
 16:
                var5 = _closure1_slot4;
                var4 = var5.can;
                var3 = _closure1_slot6;
                var3 = var3.MANAGE_MESSAGES;
                var2 = _closure2_slot0;
                var1 = var4.bind(var5)(var3, var2);
 49:
                return var1;
            }
        };
        var7 = var6.bind(var7)(var3, var2);
        var2 = 9;
        var2 = var9[var2];
        var2 = var10.bind(var4)(var2);
        var3 = var2.RenderSpoilers;
        var2 = var3.useSetting;
        var6 = var2.bind(var3)();
        var2 = 3;
        var2 = var9[var2];
        var8 = var10.bind(var4)(var2);
        var3 = var8.getEnabledHarmTypesBitmaskForChannelType;
        var2 = 4;
        var2 = var9[var2];
        var2 = var10.bind(var4)(var2);
        var2 = var2.ContentHarmTypeChannel;
        var2 = var2.GUILD;
        var3 = var3.bind(var8)(var2);
        var2 = _closure1_slot7;
        var8 = _closure1_slot1;
        var1 = 10;
        var1 = var9[var1];
        var1 = var8.bind(var4)(var1);
        var1 = var1.bind(var4)(var6, var7);
        var1 = !var1;
        var1 = var2.bind(var4)(var5, var1, var3);
        return var1;
    };
    var3['useShouldObscure'] = var4;
    var2 = function(arg1) {
        _fun0006: for(var _fun0006_ip = 0; ; ) switch(_fun0006_ip) {
 0:
            var3 = arg1;
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var6 = 5;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.EXPLICIT_CONTENT;
            if(!(var2 !== var3)) { _fun0006_ip = 174; continue _fun0006 }
 47:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.GORE_CONTENT;
            if(!(var2 !== var3)) { _fun0006_ip = 174; continue _fun0006 }
 80:
            var4 = _closure1_slot0;
            var2 = _closure1_slot2;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ObscureReason;
            var2 = var2.SPOILER;
            if(!(var2 !== var3)) { _fun0006_ip = 115; continue _fun0006 }
 113:
            return var5;
 115:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var2 = 11;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.XpfDHx;
            var2 = var3.bind(var4)(var2);
            return var2;
 174:
            var4 = _closure1_slot0;
            var6 = _closure1_slot2;
            var1 = 11;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.SEgHFh;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getObscuredAlt'] = var2;
    return var1;
})();