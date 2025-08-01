// app/modules/messages/native/handlers/handleMessagesTapImage.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var7 = metroImportDefault;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var _closure1_slot1 = var7;
    var _closure1_slot2 = var6;
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
    var _closure1_slot3 = var4;
    var4 = 1;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot4 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var7.bind(var1)(var4);
    var _closure1_slot5 = var4;
    var4 = 3;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.MessageTypes;
    var _closure1_slot6 = var4;
    var4 = 13;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/messages/native/handlers/handleMessagesTapImage.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function handleMessagesTapImage(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var2 = var1.tapImageData;
            var19 = var2.index;
            var5 = var2.type;
            var8 = var2.layout;
            var15 = var2.portal;
            var4 = var2.embedIndex;
            var24 = var2.componentId;
            var22 = var2.componentMediaIndex;
            var3 = var1.allowWithinModal;
            var7 = var1.message;
            var11 = var1.messageChannel;
            var6 = var1.selectedChannelId;
            var9 = var1.showContextName;
            var1 = undefined;
            var _closure2_slot0 = var1;
            var12 = null;
            if(!(var12 != var15)) { _fun0001_ip = 126; continue _fun0001 }
 92:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var13 = var13.bind(var1)(var2);
            var2 = var13.markPortalAlive;
            var2 = var2.bind(var13)(var15);
 126:
            var2 = true;
            if(!(var2 !== var3)) { _fun0001_ip = 172; continue _fun0001 }
 132:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isAlertOrActionSheetOpen;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0001_ip = 1385; continue _fun0001 }
 172:
            var6 = 'attachment';
            if(!(var6 !== var5)) { _fun0001_ip = 207; continue _fun0001 }
 180:
            var2 = 'embed';
            if(!(var2 !== var5)) { _fun0001_ip = 207; continue _fun0001 }
 188:
            var2 = 'sticker';
            if(!(var2 !== var5)) { _fun0001_ip = 207; continue _fun0001 }
 196:
            var2 = 'component';
            if(!(var2 === var5)) { _fun0001_ip = 1333; continue _fun0001 }
 207:
            var13 = var7.type;
            var2 = _closure1_slot6;
            var2 = var2.THREAD_STARTER_MESSAGE;
            var18 = var7;
            if(!(var13 === var2)) { _fun0001_ip = 281; continue _fun0001 }
 232:
            var2 = var7.messageReference;
            var18 = var7;
            if(!(var12 != var2)) { _fun0001_ip = 281; continue _fun0001 }
 245:
            var14 = _closure1_slot3;
            var13 = var14.getMessageByReference;
            var2 = var7.messageReference;
            var2 = var13.bind(var14)(var2);
            var2 = var2.message;
            var18 = var7;
            if(!(var12 != var2)) { _fun0001_ip = 281; continue _fun0001 }
 278:
            var18 = var2;
 281:
            var2 = var18.messageReference;
            var13 = var12 == var2;
            var7 = undefined;
            if(var13) { _fun0001_ip = 301; continue _fun0001 }
 296:
            var7 = var2.type;
 301:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var2 = var13.bind(var1)(var2);
            var2 = var2.MessageReferenceTypes;
            var2 = var2.FORWARD;
            var17 = var18;
            if(!(var7 === var2)) { _fun0001_ip = 376; continue _fun0001 }
 340:
            var7 = var18.messageSnapshots;
            var2 = 0;
            var7 = var7[var2];
            var13 = var12 == var7;
            var2 = undefined;
            if(var13) { _fun0001_ip = 366; continue _fun0001 }
 361:
            var2 = var7.message;
 366:
            var17 = var2;
            if(!(var12 != var17)) { _fun0001_ip = 1331; continue _fun0001 }
 376:
            var13 = var18.attachments;
            var7 = var13.filter;
            var2 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var3 = var3.bind(var1)(var2);
                var2 = var3.isThumbnailAttachment;
                var1 = arg1;
                var1 = var2.bind(var3)(var1);
                var1 = !var1;
                return var1;
            };
            var2 = var7.bind(var13)(var2);
            if(!(var6 === var5)) { _fun0001_ip = 492; continue _fun0001 }
 403:
            var6 = var2.length;
            if(!(var19 < var6)) { _fun0001_ip = 492; continue _fun0001 }
 412:
            var2 = var2[var19];
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 7;
            var6 = var13[var6];
            var13 = var7.bind(var1)(var6);
            var7 = var13.extractMediaFromAttachment;
            var30 = var11.guild_id;
            var34 = var13;
            var33 = var2;
            var32 = var18;
            var31 = var19;
            var6 = var34[var7](var33, var32, var31, var30, var29);
            if(!(var12 == var6)) { _fun0001_ip = 492; continue _fun0001 }
 467:
            var6 = var2.url;
            if(!(var12 != var6)) { _fun0001_ip = 492; continue _fun0001 }
 476:
            var7 = var2.url;
            var6 = '';
            if(!(var6 === var7)) { _fun0001_ip = 1291; continue _fun0001 }
 492:
            var6 = -1;
            _closure2_slot0 = var6;
            var7 = 'embed';
            if(!(var7 === var5)) { _fun0001_ip = 517; continue _fun0001 }
 510:
            if(!(var12 == var4)) { _fun0001_ip = 949; continue _fun0001 }
 517:
            var7 = 'component';
            if(!(var7 !== var5)) { _fun0001_ip = 806; continue _fun0001 }
 528:
            var13 = _closure1_slot0;
            var7 = _closure1_slot2;
            var21 = 7;
            var7 = var7[var21];
            var14 = var13.bind(var1)(var7);
            var13 = var14.extractMediaSourcesFromMessage;
            var7 = var11.guild_id;
            var16 = var13.bind(var14)(var18, var17, var7);
            var7 = var16.length;
            var14 = 0;
            var13 = var14 < var7;
            var26 = 0;
            var25 = undefined;
            var7 = var16;
            if(!var13) { _fun0001_ip = 1066; continue _fun0001 }
 590:
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var23 = var20.bind(var1)(var13);
            var20 = var23.flattenSource;
            var13 = var16[var26];
            var20 = var20.bind(var23)(var13);
            var23 = var20.accessoryType;
            var13 = var26;
            if(!(var23 === var5)) { _fun0001_ip = 661; continue _fun0001 }
 635:
            var27 = var20.mediaViewIndex;
            var23 = var27;
            if(!(var12 == var27)) { _fun0001_ip = 654; continue _fun0001 }
 648:
            var23 = var20.mediaIndex;
 654:
            var25 = var27;
            if(!(var23 !== var19)) { _fun0001_ip = 681; continue _fun0001 }
 661:
            var26 = var13 + 1;
            var23 = var16.length;
            var7 = var16;
            if(var26 < var23) { _fun0001_ip = 590; continue _fun0001 }
 676:
            _fun0001_ip = 1066; continue _fun0001;
 681:
            var20 = var20.noCarousel;
            if(var20) { _fun0001_ip = 749; continue _fun0001 }
 690:
            _closure2_slot0 = var13;
            var23 = _closure1_slot0;
            var20 = _closure1_slot2;
            var20 = var20[var21];
            var25 = var23.bind(var1)(var20);
            var23 = var25.setMediaSourcePortal;
            var20 = var16[var13];
            var20 = var23.bind(var25)(var20, var15);
            var23 = var16.filter;
            var20 = function(arg1, arg2) {
                _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.flattenSource;
                    var1 = arg1;
                    var1 = var2.bind(var3)(var1);
                    var1 = var1.noCarousel;
                    var1 = !var1;
                    var2 = !var1;
                    if(var1) { _fun0002_ip = 68; continue _fun0002 }
 54:
                    var4 = _closure2_slot0;
                    var3 = arg2;
                    var2 = var4 >= var3;
 68:
                    if(!var2) { _fun0002_ip = 85; continue _fun0002 }
 71:
                    var2 = _closure2_slot0;
                    var2 = var2 - 1;
                    _closure2_slot0 = var2;
 85:
                    return var1;
                }
            };
            var7 = var23.bind(var16)(var20);
            _fun0001_ip = 1066; continue _fun0001;
 749:
            var16 = var16[var13];
            var13 = new Array(1);
            var13[0] = var16;
            _closure2_slot0 = var14;
            var20 = _closure1_slot0;
            var16 = _closure1_slot2;
            var16 = var16[var21];
            var20 = var20.bind(var1)(var16);
            var16 = var20.setMediaSourcePortal;
            var14 = var13[var14];
            var14 = var16.bind(var20)(var14, var15);
            var7 = var13;
            _fun0001_ip = 1066; continue _fun0001;
 806:
            if(!(var12 != var24)) { _fun0001_ip = 947; continue _fun0001 }
 813:
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 7;
            var13 = var25[var20];
            var21 = var23.bind(var1)(var13);
            var16 = var21.extractMediaSourcesFromComponent;
            var31 = var11.guild_id;
            var13 = 9;
            var13 = var25[var13];
            var23 = var23.bind(var1)(var13);
            var13 = var23.asComponentId;
            var30 = var13.bind(var23)(var24);
            var34 = var21;
            var33 = var18;
            var32 = var17;
            var29 = var22;
            var14 = var34[var16](var33, var32, var31, var30, var29, var28);
            if(!(var12 != var14)) { _fun0001_ip = 945; continue _fun0001 }
 887:
            var13 = var14.sources;
            var14 = var14.initialIndex;
            _closure2_slot0 = var14;
            var16 = _closure1_slot0;
            var14 = _closure1_slot2;
            var14 = var14[var20];
            var20 = var16.bind(var1)(var14);
            var16 = var20.setMediaSourcePortal;
            var14 = _closure2_slot0;
            var14 = var13[var14];
            var14 = var16.bind(var20)(var14, var15);
            var7 = var13;
            _fun0001_ip = 1066; continue _fun0001;
 945:
            return var1;
 947:
            return var12;
 949:
            var12 = var17.embeds;
            var31 = var12[var19];
            _closure2_slot0 = var4;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var14 = 7;
            var4 = var4[var14];
            var13 = var12.bind(var1)(var4);
            var12 = var13.extractMediaSourcesFromEmbed;
            var29 = var11.guild_id;
            var34 = var13;
            var33 = var18;
            var32 = var17;
            var30 = var19;
            var4 = var34[var12](var33, var32, var31, var30, var29, var28);
            var13 = _closure2_slot0;
            var12 = var4.length;
            var7 = var4;
            if(!(var13 < var12)) { _fun0001_ip = 1066; continue _fun0001 }
 1026:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var14 = var13.bind(var1)(var12);
            var13 = var14.setMediaSourcePortal;
            var12 = _closure2_slot0;
            var12 = var4[var12];
            var12 = var13.bind(var14)(var12, var15);
            var7 = var4;
 1066:
            var12 = var7.some;
            var4 = function(arg1) {
                var3 = _closure1_slot0;
                var2 = _closure1_slot2;
                var1 = 7;
                var2 = var2[var1];
                var1 = undefined;
                var4 = var3.bind(var1)(var2);
                var3 = var4.flattenSource;
                var2 = arg1;
                var1 = true;
                var1 = var3.bind(var4)(var2, var1);
                var1 = var1.disableDownload;
                return var1;
            };
            var13 = var12.bind(var7)(var4);
            var4 = _closure2_slot0;
            var12 = var7;
            if(!(var6 !== var4)) { _fun0001_ip = 1385; continue _fun0001 }
 1098:
            var6 = _closure1_slot0;
            var7 = _closure1_slot2;
            var4 = 10;
            var4 = var7[var4];
            var7 = var6.bind(var1)(var4);
            var6 = var7.openMediaModal;
            var4 = {};
            var4['disableDownload'] = var13;
            var4['initialSources'] = var12;
            var10 = _closure2_slot0;
            var4['initialIndex'] = var10;
            var4['originLayout'] = var8;
            var8 = 'Channel';
            var4['analyticsSource'] = var8;
            var8 = var11.guild_id;
            var4['guildId'] = var8;
            var8 = var11.id;
            var4['channelId'] = var8;
            var8 = var11.type;
            var4['channelType'] = var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 1238; continue _fun0001 }
 1192:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 11;
            var10 = var13[var10];
            var15 = var12.bind(var1)(var10);
            var14 = var15.computeChannelName;
            var32 = _closure1_slot5;
            var31 = _closure1_slot4;
            var30 = false;
            var34 = var15;
            var33 = var11;
            var8 = var34[var14](var33, var32, var31, var30, var29);
 1238:
            var4['contextName'] = var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 1279; continue _fun0001 }
 1248:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 12;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.getChannelIcon;
            var8 = var9.bind(var10)(var11);
 1279:
            var4['contextIcon'] = var8;
            var4 = var6.bind(var7)(var4);
            _fun0001_ip = 1385; continue _fun0001;
 1291:
            var4 = _closure1_slot1;
            var6 = _closure1_slot2;
            var3 = 8;
            var3 = var6[var3];
            var4 = var4.bind(var1)(var3);
            var3 = var4.openURL;
            var2 = var2.url;
            var2 = var3.bind(var4)(var2);
            var2 = undefined;
            return var2;
 1331:
            return var1;
 1333:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unsupported thumbnail type: ';
            var33 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var34 = var3;
            var2 = new var34[var4](var33, var32);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
 1385:
            return var1;
        }
    };
    var3['handleMessagesTapImage'] = var2;
    return var1;
})();