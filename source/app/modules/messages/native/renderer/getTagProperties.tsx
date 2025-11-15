// app/modules/messages/native/renderer/getTagProperties.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
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
    var4 = var6[var1];
    var1 = undefined;
    var4 = var5.bind(var1)(var4);
    var4 = var4.Image;
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTagTypes;
    var _closure1_slot4 = var4;
    var4 = 8;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/getTagProperties.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTagProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var9 = var1.message;
            var5 = var1.isSystemDM;
            var6 = undefined;
            if(!(var5 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var5 = false;
case 2:
            var11 = var1.channel;
            var2 = var1.colors;
            var3 = var9.author;
            var1 = var3.isVerifiedBot;
            var3 = var1.bind(var3)();
            var8 = _closure1_slot0;
            var10 = _closure1_slot2;
            var4 = 2;
            var4 = var10[var4];
            var12 = var8.bind(var6)(var4);
            var7 = var12.userCanSeeConfettiMessage;
            var4 = 'NativeTagProperties';
            var4 = var7.bind(var12)(var4);
            var7 = 3;
            var7 = var10[var7];
            var8 = var8.bind(var6)(var7);
            var7 = var8.isPublicSystemMessage;
            var7 = var7.bind(var8)(var9);
            if(var7) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var5) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var7 = _closure1_slot1;
            var8 = _closure1_slot2;
            var5 = 5;
            var5 = var8[var5];
            var5 = var7.bind(var6)(var5);
            var5 = var5.bind(var6)(var9);
            if(var5) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var5 = var9.author;
            var5 = var5.bot;
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var5) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var5 = 7;
            var5 = var15[var5];
            var7 = var14.bind(var6)(var5);
            var5 = var7.messageHasConfettiPotion;
            var10 = var5.bind(var7)(var9);
            if(!var10) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var10 = var4;
case 11:
            var8 = null;
            var5 = undefined;
            var4 = undefined;
            var7 = var3;
            if(!var10) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var10 = 4;
            var12 = var17[var10];
            var12 = var16.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var17[var10];
            var10 = var16.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.8Rrro+;
            var12 = var12.bind(var13)(var10);
            var10 = var12.toLocaleUpperCase;
            var8 = var10.bind(var12)();
            var10 = _closure1_slot4;
            var5 = var10.POTION_TYPE;
            var4 = undefined;
            var7 = var3;
            _fun0001_ip = 13; continue _fun0001;
case 9:
            var10 = 4;
            var12 = var15[var10];
            var12 = var14.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.9RNkeF;
            var12 = var12.bind(var13)(var10);
            var8 = var12;
            var5 = undefined;
            var4 = undefined;
            var7 = var3;
            if(!var3) { _fun0001_ip = 13; continue _fun0001 }
case 15:
            var14 = _closure1_slot3;
            var13 = var14.resolveAssetSource;
            var15 = _closure1_slot1;
            var16 = _closure1_slot2;
            var10 = 6;
            var10 = var16[var10];
            var10 = var15.bind(var6)(var10);
            var10 = var13.bind(var14)(var10);
            var4 = var10.uri;
            var8 = var12;
            var5 = undefined;
            var7 = var3;
            _fun0001_ip = 13; continue _fun0001;
case 7:
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            var10 = 4;
            var12 = var15[var10];
            var12 = var14.bind(var6)(var12);
            var13 = var12.intl;
            var12 = var13.string;
            var10 = var15[var10];
            var10 = var14.bind(var6)(var10);
            var10 = var10.t;
            var10 = var10.PuJGuM;
            var8 = var12.bind(var13)(var10);
            var10 = _closure1_slot4;
            var5 = var10.BOT_TAG_SERVER_TYPE;
            var4 = undefined;
            var7 = var3;
            _fun0001_ip = 13; continue _fun0001;
case 4:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var3 = 4;
            var10 = var14[var3];
            var10 = var13.bind(var6)(var10);
            var12 = var10.intl;
            var10 = var12.string;
            var3 = var14[var3];
            var3 = var13.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.lKQ7Wt;
            var8 = var10.bind(var12)(var3);
            var3 = _closure1_slot4;
            var5 = var3.SYSTEM_DM_TAG_SYSTEM_TYPE;
            var7 = true;
            var4 = undefined;
case 13:
            var3 = null;
            var12 = var3 == var11;
            var10 = undefined;
            if(var12) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var10 = var11.ownerId;
case 16:
            var9 = var9.author;
            var9 = var9.id;
            var9 = var10 === var9;
            if(!var9) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var9 = var3 != var11;
case 18:
            if(!var9) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var10 = var11.isForumPost;
            var9 = var10.bind(var11)();
case 20:
            var3 = null;
            if(!var9) { _fun0001_ip = 22; continue _fun0001 }
case 23:
            var11 = _closure1_slot0;
            var12 = _closure1_slot2;
            var1 = 4;
            var9 = var12[var1];
            var9 = var11.bind(var6)(var9);
            var10 = var9.intl;
            var9 = var10.string;
            var1 = var12[var1];
            var1 = var11.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.fyE8sH;
            var3 = var9.bind(var10)(var1);
case 22:
            var1 = {};
            var1['tagText'] = var8;
            var1['tagVerified'] = var7;
            var1['tagTextColor'] = var6;
            var1['tagBackgroundColor'] = var6;
            var1['tagType'] = var5;
            var1['tagIconUrl'] = var4;
            var1['opTagText'] = var3;
            var3 = var2.opTagTextColor;
            var1['opTagTextColor'] = var3;
            var2 = var2.opTagBackgroundColor;
            var1['opTagBackgroundColor'] = var2;
            return var1;
        }
    };
    var3['default'] = var2;
    return var1;
})();