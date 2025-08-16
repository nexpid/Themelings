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
    var4 = 10;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/renderer/getTagProperties.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function getTagProperties(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var10 = var1.message;
            var5 = var1.isSystemDM;
            var13 = undefined;
            if(!(var5 === var13)) { _fun0001_ip = 22; continue _fun0001 }
 20:
            var5 = false;
 22:
            var12 = var1.channel;
            var2 = var1.colors;
            var3 = var10.author;
            var1 = var3.isVerifiedBot;
            var3 = var1.bind(var3)();
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var4 = 2;
            var4 = var8[var4];
            var9 = var7.bind(var13)(var4);
            var6 = var9.userCanSeeConfettiMessage;
            var4 = 'NativeTagProperties';
            var4 = var6.bind(var9)(var4);
            var6 = 3;
            var6 = var8[var6];
            var7 = var7.bind(var13)(var6);
            var6 = var7.isPublicSystemMessage;
            var6 = var6.bind(var7)(var10);
            if(var6) { _fun0001_ip = 686; continue _fun0001 }
 117:
            if(var5) { _fun0001_ip = 686; continue _fun0001 }
 123:
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var5 = 5;
            var5 = var7[var5];
            var5 = var6.bind(var13)(var5);
            var5 = var5.bind(var13)(var10);
            if(var5) { _fun0001_ip = 610; continue _fun0001 }
 154:
            var5 = var10.author;
            var5 = var5.bot;
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            if(var5) { _fun0001_ip = 486; continue _fun0001 }
 180:
            var5 = 7;
            var5 = var17[var5];
            var6 = var16.bind(var13)(var5);
            var5 = var6.isRemix;
            var5 = var5.bind(var6)(var10);
            var14 = _closure1_slot0;
            var15 = _closure1_slot2;
            if(var5) { _fun0001_ip = 356; continue _fun0001 }
 217:
            var5 = 9;
            var5 = var15[var5];
            var6 = var14.bind(var13)(var5);
            var5 = var6.messageHasConfettiPotion;
            var11 = var5.bind(var6)(var10);
            if(!var11) { _fun0001_ip = 246; continue _fun0001 }
 243:
            var11 = var4;
 246:
            var7 = undefined;
            var9 = null;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var8 = var3;
            if(!var11) { _fun0001_ip = 759; continue _fun0001 }
 265:
            var20 = _closure1_slot0;
            var21 = _closure1_slot2;
            var11 = 4;
            var18 = var21[var11];
            var18 = var20.bind(var13)(var18);
            var19 = var18.intl;
            var18 = var19.string;
            var11 = var21[var11];
            var11 = var20.bind(var13)(var11);
            var11 = var11.t;
            var11 = var11.8Rrro6;
            var18 = var18.bind(var19)(var11);
            var11 = var18.toLocaleUpperCase;
            var9 = var11.bind(var18)();
            var11 = _closure1_slot4;
            var5 = var11.POTION_TYPE;
            var7 = undefined;
            var6 = undefined;
            var4 = undefined;
            var8 = var3;
            _fun0001_ip = 759; continue _fun0001;
 356:
            var11 = 8;
            var11 = var15[var11];
            var14 = var14.bind(var13)(var11);
            var11 = var14.canSeeRemixBadge;
            var11 = var11.bind(var14)();
            var9 = null;
            var7 = undefined;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var8 = var3;
            if(!var11) { _fun0001_ip = 759; continue _fun0001 }
 397:
            var18 = _closure1_slot0;
            var19 = _closure1_slot2;
            var11 = 4;
            var14 = var19[var11];
            var14 = var18.bind(var13)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var19[var11];
            var11 = var18.bind(var13)(var11);
            var11 = var11.t;
            var11 = var11.uXDG39;
            var9 = var14.bind(var15)(var11);
            var11 = _closure1_slot4;
            var5 = var11.REMIXING_TYPE;
            var7 = var2.remixTagTextColor;
            var6 = var2.remixTagBackgroundColor;
            var4 = undefined;
            var8 = var3;
            _fun0001_ip = 759; continue _fun0001;
 486:
            var11 = 4;
            var14 = var17[var11];
            var14 = var16.bind(var13)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var17[var11];
            var11 = var16.bind(var13)(var11);
            var11 = var11.t;
            var11 = var11.9RNkeH;
            var14 = var14.bind(var15)(var11);
            var7 = undefined;
            var9 = var14;
            var6 = undefined;
            var5 = undefined;
            var4 = undefined;
            var8 = var3;
            if(!var3) { _fun0001_ip = 759; continue _fun0001 }
 553:
            var16 = _closure1_slot3;
            var15 = var16.resolveAssetSource;
            var17 = _closure1_slot1;
            var18 = _closure1_slot2;
            var11 = 6;
            var11 = var18[var11];
            var11 = var17.bind(var13)(var11);
            var11 = var15.bind(var16)(var11);
            var4 = var11.uri;
            var7 = undefined;
            var9 = var14;
            var6 = undefined;
            var5 = undefined;
            var8 = var3;
            _fun0001_ip = 759; continue _fun0001;
 610:
            var16 = _closure1_slot0;
            var17 = _closure1_slot2;
            var11 = 4;
            var14 = var17[var11];
            var14 = var16.bind(var13)(var14);
            var15 = var14.intl;
            var14 = var15.string;
            var11 = var17[var11];
            var11 = var16.bind(var13)(var11);
            var11 = var11.t;
            var11 = var11.PuJGuL;
            var9 = var14.bind(var15)(var11);
            var11 = _closure1_slot4;
            var5 = var11.BOT_TAG_SERVER_TYPE;
            var7 = undefined;
            var6 = undefined;
            var4 = undefined;
            var8 = var3;
            _fun0001_ip = 759; continue _fun0001;
 686:
            var15 = _closure1_slot0;
            var16 = _closure1_slot2;
            var3 = 4;
            var11 = var16[var3];
            var11 = var15.bind(var13)(var11);
            var14 = var11.intl;
            var11 = var14.string;
            var3 = var16[var3];
            var3 = var15.bind(var13)(var3);
            var3 = var3.t;
            var3 = var3.lKQ7Wl;
            var9 = var11.bind(var14)(var3);
            var3 = _closure1_slot4;
            var5 = var3.SYSTEM_DM_TAG_SYSTEM_TYPE;
            var8 = true;
            var7 = undefined;
            var6 = undefined;
            var4 = undefined;
 759:
            var3 = null;
            var14 = var3 == var12;
            var11 = undefined;
            if(var14) { _fun0001_ip = 776; continue _fun0001 }
 770:
            var11 = var12.ownerId;
 776:
            var10 = var10.author;
            var10 = var10.id;
            var10 = var11 === var10;
            if(!var10) { _fun0001_ip = 798; continue _fun0001 }
 794:
            var10 = var3 != var12;
 798:
            if(!var10) { _fun0001_ip = 811; continue _fun0001 }
 801:
            var11 = var12.isForumPost;
            var10 = var11.bind(var12)();
 811:
            var3 = null;
            if(!var10) { _fun0001_ip = 871; continue _fun0001 }
 816:
            var12 = _closure1_slot0;
            var14 = _closure1_slot2;
            var1 = 4;
            var10 = var14[var1];
            var10 = var12.bind(var13)(var10);
            var11 = var10.intl;
            var10 = var11.string;
            var1 = var14[var1];
            var1 = var12.bind(var13)(var1);
            var1 = var1.t;
            var1 = var1.fyE8sL;
            var3 = var10.bind(var11)(var1);
 871:
            var1 = {};
            var1['tagText'] = var9;
            var1['tagVerified'] = var8;
            var1['tagTextColor'] = var7;
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