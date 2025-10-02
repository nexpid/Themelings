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
case 0:
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
            if(!(var12 != var15)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 4;
            var2 = var14[var2];
            var13 = var13.bind(var1)(var2);
            var2 = var13.markPortalAlive;
            var2 = var2.bind(var13)(var15);
case 2:
            var2 = true;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var3 = _closure1_slot0;
            var13 = _closure1_slot2;
            var2 = 5;
            var2 = var13[var2];
            var3 = var3.bind(var1)(var2);
            var2 = var3.isAlertOrActionSheetOpen;
            var2 = var2.bind(var3)(var6);
            if(var2) { _fun0001_ip = 6; continue _fun0001 }
case 4:
            var6 = 'attachment';
            if(!(var6 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 8:
            var2 = 'embed';
            if(!(var2 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 9:
            var2 = 'sticker';
            if(!(var2 !== var5)) { _fun0001_ip = 7; continue _fun0001 }
case 10:
            var2 = 'component';
            if(!(var2 === var5)) { _fun0001_ip = 11; continue _fun0001 }
case 7:
            var13 = var7.type;
            var2 = _closure1_slot6;
            var2 = var2.THREAD_STARTER_MESSAGE;
            var18 = var7;
            if(!(var13 === var2)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var2 = var7.messageReference;
            var18 = var7;
            if(!(var12 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 14:
            var14 = _closure1_slot3;
            var13 = var14.getMessageByReference;
            var2 = var7.messageReference;
            var2 = var13.bind(var14)(var2);
            var2 = var2.message;
            var18 = var7;
            if(!(var12 != var2)) { _fun0001_ip = 12; continue _fun0001 }
case 15:
            var18 = var2;
case 12:
            var2 = var18.messageReference;
            var13 = var12 == var2;
            var7 = undefined;
            if(var13) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var7 = var2.type;
case 16:
            var13 = _closure1_slot0;
            var14 = _closure1_slot2;
            var2 = 6;
            var2 = var14[var2];
            var2 = var13.bind(var1)(var2);
            var2 = var2.MessageReferenceTypes;
            var2 = var2.FORWARD;
            var17 = var18;
            if(!(var7 === var2)) { _fun0001_ip = 18; continue _fun0001 }
case 19:
            var7 = var18.messageSnapshots;
            var2 = 0;
            var7 = var7[var2];
            var13 = var12 == var7;
            var2 = undefined;
            if(var13) { _fun0001_ip = 20; continue _fun0001 }
case 21:
            var2 = var7.message;
case 20:
            var17 = var2;
            if(!(var12 != var17)) { _fun0001_ip = 22; continue _fun0001 }
case 18:
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
            if(!(var6 === var5)) { _fun0001_ip = 23; continue _fun0001 }
case 24:
            var6 = var2.length;
            if(!(var19 < var6)) { _fun0001_ip = 23; continue _fun0001 }
case 25:
            var2 = var2[var19];
            var7 = _closure1_slot0;
            var13 = _closure1_slot2;
            var6 = 7;
            var6 = var13[var6];
            var13 = var7.bind(var1)(var6);
            var7 = var13.extractMediaFromAttachment;
            var31 = var11.guild_id;
            var35 = var13;
            var34 = var2;
            var33 = var18;
            var32 = var19;
            var6 = var35[var7](var34, var33, var32, var31, var30);
            if(!(var12 == var6)) { _fun0001_ip = 23; continue _fun0001 }
case 26:
            var6 = var2.url;
            if(!(var12 != var6)) { _fun0001_ip = 23; continue _fun0001 }
case 27:
            var7 = var2.url;
            var6 = '';
            if(!(var6 === var7)) { _fun0001_ip = 28; continue _fun0001 }
case 23:
            var6 = -1;
            _closure2_slot0 = var6;
            var7 = 'embed';
            if(!(var7 === var5)) { _fun0001_ip = 29; continue _fun0001 }
case 30:
            if(!(var12 == var4)) { _fun0001_ip = 31; continue _fun0001 }
case 29:
            var7 = 'component';
            if(!(var7 !== var5)) { _fun0001_ip = 32; continue _fun0001 }
case 33:
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
            if(!var13) { _fun0001_ip = 34; continue _fun0001 }
case 35:
            var20 = _closure1_slot0;
            var13 = _closure1_slot2;
            var13 = var13[var21];
            var23 = var20.bind(var1)(var13);
            var20 = var23.flattenSource;
            var13 = var16[var26];
            var20 = var20.bind(var23)(var13);
            var13 = var26;
            var27 = var25;
            if(!(var12 != var20)) { _fun0001_ip = 36; continue _fun0001 }
case 37:
            var23 = var20.accessoryType;
            var27 = var25;
            if(!(var23 === var5)) { _fun0001_ip = 36; continue _fun0001 }
case 38:
            var28 = var20.mediaViewIndex;
            var23 = var28;
            if(!(var12 == var28)) { _fun0001_ip = 39; continue _fun0001 }
case 40:
            var23 = var20.mediaIndex;
case 39:
            var27 = var28;
            if(!(var23 !== var19)) { _fun0001_ip = 41; continue _fun0001 }
case 36:
            var26 = var13 + 1;
            var23 = var16.length;
            var25 = var27;
            var7 = var16;
            if(var26 < var23) { _fun0001_ip = 35; continue _fun0001 }
case 42:
            _fun0001_ip = 34; continue _fun0001;
case 41:
            var20 = var20.noCarousel;
            if(var20) { _fun0001_ip = 43; continue _fun0001 }
case 44:
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
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var3 = var3.bind(var1)(var2);
                    var2 = var3.flattenSource;
                    var1 = arg1;
                    var2 = var2.bind(var3)(var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0002_ip = 45; continue _fun0002 }
case 46:
                    var2 = var2.noCarousel;
                    var1 = !var2;
case 45:
                    var2 = !var1;
                    if(var1) { _fun0002_ip = 47; continue _fun0002 }
case 48:
                    var4 = _closure2_slot0;
                    var3 = arg2;
                    var2 = var4 >= var3;
case 47:
                    if(!var2) { _fun0002_ip = 49; continue _fun0002 }
case 50:
                    var2 = _closure2_slot0;
                    var2 = var2 - 1;
                    _closure2_slot0 = var2;
case 49:
                    return var1;
                }
            };
            var7 = var23.bind(var16)(var20);
            _fun0001_ip = 34; continue _fun0001;
case 43:
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
            _fun0001_ip = 34; continue _fun0001;
case 32:
            if(!(var12 != var24)) { _fun0001_ip = 51; continue _fun0001 }
case 52:
            var23 = _closure1_slot0;
            var25 = _closure1_slot2;
            var20 = 7;
            var13 = var25[var20];
            var21 = var23.bind(var1)(var13);
            var16 = var21.extractMediaSourcesFromComponent;
            var32 = var11.guild_id;
            var13 = 9;
            var13 = var25[var13];
            var23 = var23.bind(var1)(var13);
            var13 = var23.asComponentId;
            var31 = var13.bind(var23)(var24);
            var35 = var21;
            var34 = var18;
            var33 = var17;
            var30 = var22;
            var14 = var35[var16](var34, var33, var32, var31, var30, var29);
            if(!(var12 != var14)) { _fun0001_ip = 53; continue _fun0001 }
case 54:
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
            _fun0001_ip = 34; continue _fun0001;
case 53:
            return var1;
case 51:
            return var12;
case 31:
            var12 = var17.embeds;
            var32 = var12[var19];
            _closure2_slot0 = var4;
            var12 = _closure1_slot0;
            var4 = _closure1_slot2;
            var14 = 7;
            var4 = var4[var14];
            var13 = var12.bind(var1)(var4);
            var12 = var13.extractMediaSourcesFromEmbed;
            var30 = var11.guild_id;
            var35 = var13;
            var34 = var18;
            var33 = var17;
            var31 = var19;
            var4 = var35[var12](var34, var33, var32, var31, var30, var29);
            var13 = _closure2_slot0;
            var12 = var4.length;
            var7 = var4;
            if(!(var13 < var12)) { _fun0001_ip = 34; continue _fun0001 }
case 55:
            var13 = _closure1_slot0;
            var12 = _closure1_slot2;
            var12 = var12[var14];
            var14 = var13.bind(var1)(var12);
            var13 = var14.setMediaSourcePortal;
            var12 = _closure2_slot0;
            var12 = var4[var12];
            var12 = var13.bind(var14)(var12, var15);
            var7 = var4;
case 34:
            var12 = var7.some;
            var4 = function(arg1) {
                _fun0003: for(var _fun0003_ip = 0; ; ) switch(_fun0003_ip) {
case 0:
                    var3 = _closure1_slot0;
                    var2 = _closure1_slot2;
                    var1 = 7;
                    var2 = var2[var1];
                    var1 = undefined;
                    var4 = var3.bind(var1)(var2);
                    var3 = var4.flattenSource;
                    var2 = arg1;
                    var1 = true;
                    var2 = var3.bind(var4)(var2, var1);
                    var1 = null;
                    var1 = var1 != var2;
                    if(!var1) { _fun0003_ip = 45; continue _fun0003 }
case 56:
                    var1 = var2.disableDownload;
case 45:
                    return var1;
                }
            };
            var13 = var12.bind(var7)(var4);
            var4 = _closure2_slot0;
            var12 = var7;
            if(!(var6 !== var4)) { _fun0001_ip = 6; continue _fun0001 }
case 57:
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
            if(!var9) { _fun0001_ip = 58; continue _fun0001 }
case 59:
            var12 = _closure1_slot0;
            var13 = _closure1_slot2;
            var10 = 11;
            var10 = var13[var10];
            var15 = var12.bind(var1)(var10);
            var14 = var15.computeChannelName;
            var33 = _closure1_slot5;
            var32 = _closure1_slot4;
            var31 = false;
            var35 = var15;
            var34 = var11;
            var8 = var35[var14](var34, var33, var32, var31, var30);
case 58:
            var4['contextName'] = var8;
            var8 = undefined;
            if(!var9) { _fun0001_ip = 60; continue _fun0001 }
case 61:
            var10 = _closure1_slot0;
            var12 = _closure1_slot2;
            var9 = 12;
            var9 = var12[var9];
            var10 = var10.bind(var1)(var9);
            var9 = var10.getChannelIcon;
            var8 = var9.bind(var10)(var11);
case 60:
            var4['contextIcon'] = var8;
            var4 = var6.bind(var7)(var4);
            _fun0001_ip = 6; continue _fun0001;
case 28:
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
case 22:
            return var1;
case 11:
            var2 = global;
            var4 = var2.Error;
            var2 = var2.HermesInternal;
            var3 = var2.concat;
            var2 = 'Unsupported thumbnail type: ';
            var34 = var3.bind(var2)(var5);
            var3 = var4.prototype;
            var3 = Object.create(var3, {constructor: {value: var4}});
            var35 = var3;
            var2 = new var35[var4](var34, var33);
            var2 = var2 instanceof Object ? var2 : var3;
            throw var2;
case 6:
            return var1;
        }
    };
    var3['handleMessagesTapImage'] = var2;
    return var1;
})();