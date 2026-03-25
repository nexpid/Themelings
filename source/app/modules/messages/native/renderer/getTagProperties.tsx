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
    var4 = 6;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/getTagProperties.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTagProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var10 = var1.message;
            var11 = var1.isSystemDM;
            var6 = undefined;
            if(!(var11 === var6)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var11 = false;
case 2:
            var12 = var1.channel;
            var2 = var1.colors;
            var3 = var10.author;
            var1 = var3.isVerifiedBot;
            var3 = var1.bind(var3)();
            var5 = _closure1_slot0;
            var4 = _closure1_slot2;
            var15 = 2;
            var4 = var4[var15];
            var5 = var5.bind(var6)(var4);
            var4 = var5.isPublicSystemMessage;
            var4 = var4.bind(var5)(var10);
            if(var4) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            if(var11) { _fun0001_ip = 4; continue _fun0001 }
case 6:
            var5 = _closure1_slot1;
            var7 = _closure1_slot2;
            var4 = 4;
            var4 = var7[var4];
            var4 = var5.bind(var6)(var4);
            var4 = var4.bind(var6)(var10);
            if(var4) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var4 = var10.author;
            var8 = var4.bot;
            var9 = null;
            var5 = undefined;
            var4 = undefined;
            var7 = var3;
            if(!var8) { _fun0001_ip = 9; continue _fun0001 }
case 10:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 3;
            var13 = var17[var8];
            var13 = var16.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var8 = var17[var8];
            var8 = var16.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8["9RNkeF"];
            var13 = var13.bind(var14)(var8);
            var8 = undefined;
            if(!var3) { _fun0001_ip = 11; continue _fun0001 }
case 12:
            var17 = _closure1_slot3;
            var16 = var17.resolveAssetSource;
            var18 = _closure1_slot1;
            var19 = _closure1_slot2;
            var14 = 5;
            var14 = var19[var14];
            var14 = var18.bind(var6)(var14);
            var14 = var16.bind(var17)(var14);
            var8 = var14.uri;
case 11:
            var4 = var8;
            var9 = var13;
            var5 = undefined;
            var7 = var3;
            _fun0001_ip = 9; continue _fun0001;
case 7:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var8 = 3;
            var13 = var17[var8];
            var13 = var16.bind(var6)(var13);
            var14 = var13.intl;
            var13 = var14.string;
            var8 = var17[var8];
            var8 = var16.bind(var6)(var8);
            var8 = var8.t;
            var8 = var8.PuJGuM;
            var9 = var13.bind(var14)(var8);
            var8 = _closure1_slot4;
            var5 = var8.BOT_TAG_SERVER_TYPE;
            var4 = undefined;
            var7 = var3;
            _fun0001_ip = 9; continue _fun0001;
case 4:
            var14 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 3;
            var8 = var16[var3];
            var8 = var14.bind(var6)(var8);
            var13 = var8.intl;
            var8 = var13.string;
            var3 = var16[var3];
            var3 = var14.bind(var6)(var3);
            var3 = var3.t;
            var3 = var3.lKQ7Wt;
            var9 = var8.bind(var13)(var3);
            var3 = _closure1_slot4;
            var5 = var3.SYSTEM_DM_TAG_SYSTEM_TYPE;
            var7 = true;
            var4 = undefined;
case 9:
            var3 = null;
            var13 = var3 != var9;
            var8 = null;
            if(!var13) { _fun0001_ip = 13; continue _fun0001 }
case 14:
            var14 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var15];
            var14 = var14.bind(var6)(var13);
            var13 = var14.isPublicSystemMessage;
            var13 = var13.bind(var14)(var10);
            if(var13) { _fun0001_ip = 15; continue _fun0001 }
case 16:
            if(var11) { _fun0001_ip = 15; continue _fun0001 }
case 17:
            var13 = _closure1_slot1;
            var14 = _closure1_slot2;
            var11 = 4;
            var11 = var14[var11];
            var11 = var13.bind(var6)(var11);
            var11 = var11.bind(var6)(var10);
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 3;
            var14 = var17[var13];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var6)(var13);
            var13 = var13.t;
            if(var11) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            if(var7) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var11 = var13.qwJHjo;
            var11 = var14.bind(var15)(var11);
            _fun0001_ip = 22; continue _fun0001;
case 20:
            var16 = var13.g76OcH;
            var11 = var14.bind(var15)(var16);
case 22:
            _fun0001_ip = 23; continue _fun0001;
case 18:
            var13 = var13["39trQT"];
            var11 = var14.bind(var15)(var13);
case 23:
            _fun0001_ip = 24; continue _fun0001;
case 15:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var13 = 3;
            var14 = var17[var13];
            var14 = var16.bind(var6)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var13 = var17[var13];
            var13 = var16.bind(var6)(var13);
            var13 = var13.t;
            var13 = var13["7s687k"];
            var11 = var14.bind(var15)(var13);
case 24:
            var8 = var11;
case 13:
            var13 = var3 == var12;
            var11 = undefined;
            if(var13) { _fun0001_ip = 25; continue _fun0001 }
case 26:
            var11 = var12.ownerId;
case 25:
            var10 = var10.author;
            var10 = var10.id;
            var10 = var11 === var10;
            if(!var10) { _fun0001_ip = 27; continue _fun0001 }
case 28:
            var10 = var3 != var12;
case 27:
            if(!var10) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            var11 = var12.isForumPost;
            var10 = var11.bind(var12)();
case 29:
            var3 = null;
            if(!var10) { _fun0001_ip = 31; continue _fun0001 }
case 32:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var1 = 3;
            var10 = var13[var1];
            var10 = var12.bind(var6)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var1 = var13[var1];
            var1 = var12.bind(var6)(var1);
            var1 = var1.t;
            var1 = var1.fyE8sH;
            var3 = var10.bind(var11)(var1);
case 31:
            var1 = {};
            var1['tagText'] = var9;
            var1['tagAccessibilityLabel'] = var8;
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