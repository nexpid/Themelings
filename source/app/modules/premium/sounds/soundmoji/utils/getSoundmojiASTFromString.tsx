// app/modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var6 = require;
    var8 = metroImportDefault;
    var3 = exports;
    var7 = dependencyMap;
    var _closure1_slot0 = var6;
    var _closure1_slot1 = var8;
    var _closure1_slot2 = var7;
    var2 = function getSoundmojiFromMessage(arg1, arg2, arg3, arg4, arg5) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var9 = arg2;
            var8 = arg3;
            var10 = arg4;
            var2 = _closure1_slot0;
            var4 = _closure1_slot2;
            var1 = 3;
            var1 = var4[var1];
            var4 = undefined;
            var1 = var2.bind(var4)(var1);
            var6 = var1.SoundmojiRenderingExperiment;
            var5 = var6.getCurrentConfig;
            var2 = {};
            var1 = 'getSoundmojiASTFromString';
            var2['location'] = var1;
            var1 = {};
            var7 = false;
            var1['autoTrackExposure'] = var7;
            var1 = var5.bind(var6)(var2, var1);
            var1 = var1.enabled;
            if(!var1) { _fun0001_ip = 139; continue _fun0001 }
 81:
            var2 = _closure1_slot3;
            var1 = var2.getSoundById;
            var1 = var1.bind(var2)(var10);
            var5 = _closure1_slot1;
            var6 = _closure1_slot2;
            var2 = 4;
            var2 = var6[var2];
            var5 = var5.bind(var4)(var2);
            var2 = arg1;
            var5 = var5.bind(var4)(var1, var2, var9);
            var6 = null;
            if(!(var6 != var8)) { _fun0001_ip = 136; continue _fun0001 }
 132:
            if(!(var6 == var9)) { _fun0001_ip = 155; continue _fun0001 }
 136:
            if(var5) { _fun0001_ip = 141; continue _fun0001 }
 139:
            return var4;
 141:
            var7 = var6 != var1;
            var2 = undefined;
            if(!var7) { _fun0001_ip = 153; continue _fun0001 }
 150:
            var2 = var1;
 153:
            return var2;
 155:
            var7 = _closure1_slot1;
            var11 = _closure1_slot2;
            var2 = 5;
            var2 = var11[var2];
            var7 = var7.bind(var4)(var2);
            var12 = arg5;
            var16 = undefined;
            var15 = var9;
            var14 = var8;
            var13 = var10;
            var2 = var16[var7](var15, var14, var13, var12, var11);
            if(!var5) { _fun0001_ip = 244; continue _fun0001 }
 196:
            if(!(var6 == var2)) { _fun0001_ip = 244; continue _fun0001 }
 200:
            var7 = _closure1_slot4;
            var5 = var7.getMessage;
            var5 = var5.bind(var7)(var9, var8);
            var6 = var6 == var5;
            var4 = undefined;
            if(var6) { _fun0001_ip = 230; continue _fun0001 }
 225:
            var4 = var5.state;
 230:
            var3 = _closure1_slot5;
            var3 = var3.SENT;
            if(!(var4 === var3)) { _fun0001_ip = 246; continue _fun0001 }
 244:
            return var2;
 246:
            return var1;
        }
    };
    var _closure1_slot6 = var2;
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
    var5 = var5.MessageStates;
    var _closure1_slot5 = var5;
    var5 = 8;
    var5 = var7[var5];
    var7 = var6.bind(var1)(var5);
    var6 = var7.fileFinishedImporting;
    var5 = 'modules/premium/sounds/soundmoji/utils/getSoundmojiASTFromString.tsx';
    var5 = var6.bind(var7)(var5);
    var4 = function getSoundmojiASTFromString(arg1, arg2) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var2 = arg1;
            var7 = arg2;
            var1 = 1;
            var5 = var2[var1];
            var1 = 2;
            var4 = var2[var1];
            var10 = _closure1_slot6;
            var17 = var7.guildId;
            var16 = var7.channelId;
            var15 = var7.messageId;
            var13 = var7.soundboardSounds;
            var3 = undefined;
            var18 = undefined;
            var14 = var4;
            var11 = var18[var10](var17, var16, var15, var14, var13, var12);
            var10 = null;
            if(!(var10 != var11)) { _fun0002_ip = 272; continue _fun0002 }
 68:
            var6 = var10 == var11;
            var1 = undefined;
            if(var6) { _fun0002_ip = 82; continue _fun0002 }
 77:
            var1 = var11.name;
 82:
            var6 = var4;
            if(!(var10 != var1)) { _fun0002_ip = 92; continue _fun0002 }
 89:
            var6 = var1;
 92:
            var1 = {};
            var8 = 'soundboard';
            var1['type'] = var8;
            var1['soundId'] = var4;
            var1['guildId'] = var5;
            var8 = var7.messageId;
            var1['messageId'] = var8;
            var7 = var7.channelId;
            var1['channelId'] = var7;
            var1['content'] = var6;
            var7 = var10 == var11;
            var6 = undefined;
            if(var7) { _fun0002_ip = 148; continue _fun0002 }
 142:
            var6 = var11.emojiId;
 148:
            var1['emojiId'] = var6;
            var7 = var10 == var11;
            var6 = undefined;
            if(var7) { _fun0002_ip = 168; continue _fun0002 }
 162:
            var6 = var11.emojiName;
 168:
            var1['emojiName'] = var6;
            var7 = var10 == var11;
            var6 = undefined;
            if(var7) { _fun0002_ip = 188; continue _fun0002 }
 182:
            var6 = var11.emojiId;
 188:
            var7 = var10 != var6;
            var6 = undefined;
            if(!var7) { _fun0002_ip = 263; continue _fun0002 }
 197:
            var8 = _closure1_slot0;
            var9 = _closure1_slot2;
            var7 = 7;
            var7 = var9[var7];
            var9 = var8.bind(var3)(var7);
            var8 = var9.getEmojiURL;
            var7 = {'id': null, 'animated': false, 'size': 16};
            var12 = var10 == var11;
            var10 = undefined;
            if(var12) { _fun0002_ip = 252; continue _fun0002 }
 246:
            var10 = var11.emojiId;
 252:
            var7['id'] = var10;
            var6 = var8.bind(var9)(var7);
 263:
            var1['emojiSrc'] = var6;
            return var1;
 272:
            var1 = {};
            var6 = 'text';
            var1['type'] = var6;
            var6 = _closure1_slot1;
            var7 = _closure1_slot2;
            var2 = 6;
            var2 = var7[var2];
            var2 = var6.bind(var3)(var2);
            var2 = var2.bind(var3)(var5, var4);
            var1['content'] = var2;
            return var1;
        }
    };
    var3['default'] = var4;
    var4 = /^<sound:(\d+):(\d+)>/;
    var3['soundmojiRawFormatRegex'] = var4;
    var3['getSoundmojiFromMessage'] = var2;
    return var1;
})();