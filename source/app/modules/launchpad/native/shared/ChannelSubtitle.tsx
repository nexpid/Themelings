// app/modules/launchpad/native/shared/ChannelSubtitle.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var5 = require;
    var3 = exports;
    var6 = dependencyMap;
    var _closure1_slot0 = var5;
    var1 = metroImportDefault;
    var _closure1_slot1 = var1;
    var _closure1_slot2 = var6;
    var1 = function ChannelSubtitle(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
 0:
            var1 = arg1;
            var11 = var1.muted;
            var3 = var1.connected;
            var12 = var1.channelId;
            var10 = var1.guildId;
            var7 = var1.subtitle;
            var6 = var1.textProps;
            var4 = _closure1_slot0;
            var5 = _closure1_slot2;
            var1 = 5;
            var1 = var5[var1];
            var5 = undefined;
            var4 = var4.bind(var5)(var1);
            var1 = var4.getChannelSubtitleData;
            var13 = var1.bind(var4)(var7);
            var1 = null;
            if(!(var1 != var13)) { _fun0001_ip = 244; continue _fun0001 }
 82:
            var7 = var13.type;
            var4 = 'voice';
            var9 = var4 === var7;
            if(!var9) { _fun0001_ip = 101; continue _fun0001 }
 98:
            var9 = var3;
 101:
            var4 = _closure1_slot4;
            var7 = _closure1_slot0;
            var8 = _closure1_slot2;
            var2 = 4;
            var2 = var8[var2];
            var2 = var7.bind(var5)(var2);
            var3 = var2.Text;
            var2 = {};
            var16 = var2;
            var15 = var6;
            var6 = copyDataProperties(var16, var15);
            var6 = 6;
            var6 = var8[var6];
            var8 = var7.bind(var5)(var6);
            var7 = var8.renderMessagePreviewMarkup;
            var6 = {};
            var13 = var13.subtitle;
            var6['content'] = var13;
            var13 = var1 != var11;
            if(!var13) { _fun0001_ip = 182; continue _fun0001 }
 179:
            var13 = var11;
 182:
            var6['muted'] = var13;
            var6['channelId'] = var12;
            var6['guildId'] = var10;
            var10 = 'text-muted';
            if(!var11) { _fun0001_ip = 210; continue _fun0001 }
 204:
            var10 = 'interactive-muted';
 210:
            var6['color'] = var10;
            var9 = !var9;
            var6['disableAnimatedEmoji'] = var9;
            var7 = var7.bind(var8)(var6);
            var6 = 'children';
            var2[var6] = var7;
            var2 = var4.bind(var5)(var3, var2);
            return var2;
 244:
            return var1;
        }
    };
    var _closure1_slot5 = var1;
    var1 = global;
    var8 = var1.Object;
    var7 = var8.defineProperty;
    var4 = {};
    var1 = true;
    var4['value'] = var1;
    var1 = '__esModule';
    var1 = var7.bind(var8)(var3, var1, var4);
    var1 = 0;
    var7 = var6[var1];
    var4 = metroImportAll;
    var1 = undefined;
    var4 = var4.bind(var1)(var7);
    var4 = 1;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.SUBTITLE_OPACITY_NORMAL;
    var _closure1_slot3 = var4;
    var4 = 2;
    var4 = var6[var4];
    var4 = var5.bind(var1)(var4);
    var4 = var4.jsx;
    var _closure1_slot4 = var4;
    var4 = 7;
    var4 = var6[var4];
    var6 = var5.bind(var1)(var4);
    var5 = var6.fileFinishedImporting;
    var4 = 'modules/launchpad/native/shared/ChannelSubtitle.tsx';
    var4 = var5.bind(var6)(var4);
    var2 = function renderChannelSubtitle(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
 0:
            var1 = arg1;
            var8 = var1.subtitle;
            var10 = var1.muted;
            var12 = var1.channelId;
            var11 = var1.guildId;
            var9 = var1.connected;
            var1 = null;
            if(!(var1 != var8)) { _fun0002_ip = 265; continue _fun0002 }
 40:
            var7 = {};
            var4 = _closure1_slot1;
            var5 = _closure1_slot2;
            var2 = 3;
            var2 = var5[var2];
            var6 = undefined;
            var2 = var4.bind(var6)(var2);
            var2 = var2.bind(var6)();
            var2 = var2.messagePreview;
            var2 = var2.text;
            var2 = var2.variant;
            var7['variant'] = var2;
            var2 = 'text-muted';
            if(!var10) { _fun0002_ip = 106; continue _fun0002 }
 100:
            var2 = 'interactive-muted';
 106:
            var7['color'] = var2;
            var4 = 1;
            var7['lineClamp'] = var4;
            var2 = 1.75;
            var7['maxFontSizeMultiplier'] = var2;
            var2 = {};
            if(var10) { _fun0002_ip = 142; continue _fun0002 }
 138:
            var4 = _closure1_slot3;
 142:
            var2['opacity'] = var4;
            var7['style'] = var2;
            var4 = 'string';
            var2 = typeof var8;
            if(!(var4 !== var2)) { _fun0002_ip = 207; continue _fun0002 }
 161:
            var5 = _closure1_slot4;
            var4 = _closure1_slot5;
            var2 = {};
            var2['channelId'] = var12;
            var2['guildId'] = var11;
            var2['subtitle'] = var8;
            var2['muted'] = var10;
            var2['connected'] = var9;
            var2['textProps'] = var7;
            var2 = var5.bind(var6)(var4, var2);
            _fun0002_ip = 263; continue _fun0002;
 207:
            var5 = _closure1_slot4;
            var4 = _closure1_slot0;
            var9 = _closure1_slot2;
            var3 = 4;
            var3 = var9[var3];
            var3 = var4.bind(var6)(var3);
            var4 = var3.Text;
            var3 = {};
            var14 = var3;
            var13 = var7;
            var7 = copyDataProperties(var14, var13);
            var7 = 'children';
            var3[var7] = var8;
            var2 = var5.bind(var6)(var4, var3);
 263:
            return var2;
 265:
            return var1;
        }
    };
    var3['renderChannelSubtitle'] = var2;
    return var1;
})();