// discord_common/js/shared/utils/BrowserConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
        var14 = metroImportDefault;
        var3 = exports;
        var13 = dependencyMap;
        var4 = global;
        var6 = var4.Object;
        var5 = var6.defineProperty;
        var2 = {};
        var7 = true;
        var2['value'] = var7;
        var1 = '__esModule';
        var1 = var5.bind(var6)(var3, var1, var2);
        var8 = var4.parseInt;
        var12 = 0;
        var2 = var13[var12];
        var1 = undefined;
        var2 = var14.bind(var1)(var2);
        var2 = var2.version;
        var6 = null;
        var9 = var6 != var2;
        var5 = '0';
        if(!var9) { _fun0001_ip = 2; continue _fun0001 }
case 3:
        var5 = var2;
case 2:
        var2 = 10;
        var11 = var8.bind(var1)(var5, var2);
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var2 = var2.ua;
        var10 = var6 != var2;
        if(!var10) { _fun0001_ip = 4; continue _fun0001 }
case 5:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var8 = var2.ua;
        var5 = var8.indexOf;
        var2 = 'OculusBrowser';
        var5 = var5.bind(var8)(var2);
        var2 = -1;
        var10 = var5 > var2;
case 4:
        var2 = var4.window;
        var5 = 'undefined';
        var2 = typeof var2;
        if(!(var5 !== var2)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
        var2 = var4.window;
        var2 = var2.WebSocket;
        var2 = var6 == var2;
        var9 = false;
        if(var2) { _fun0001_ip = 8; continue _fun0001 }
case 6:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'IE';
        if(!(var2 !== var6)) { _fun0001_ip = 9; continue _fun0001 }
case 10:
        var2 = 'Microsoft Edge';
        var9 = true;
        if(!(var2 === var6)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
        var2 = 15;
        var9 = var11 >= var2;
case 8:
        var8 = var10;
        if(var8) { _fun0001_ip = 11; continue _fun0001 }
case 12:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Firefox';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 13; continue _fun0001 }
case 14:
        var6 = 80;
        var2 = var11 >= var6;
case 13:
        var8 = var2;
case 11:
        if(var8) { _fun0001_ip = 15; continue _fun0001 }
case 16:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Chrome';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 17; continue _fun0001 }
case 18:
        var6 = 37;
        var2 = var11 >= var6;
case 17:
        var8 = var2;
case 15:
        if(var8) { _fun0001_ip = 19; continue _fun0001 }
case 20:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Opera';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 21; continue _fun0001 }
case 22:
        var6 = 66;
        var2 = var11 >= var6;
case 21:
        var8 = var2;
case 19:
        if(var8) { _fun0001_ip = 23; continue _fun0001 }
case 24:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Node.js';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 25; continue _fun0001 }
case 26:
        var6 = 6;
        var2 = var11 >= var6;
case 25:
        var8 = var2;
case 23:
        if(var8) { _fun0001_ip = 27; continue _fun0001 }
case 28:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Electron';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 29; continue _fun0001 }
case 30:
        var6 = 1;
        var2 = var11 >= var6;
case 29:
        var8 = var2;
case 27:
        if(var8) { _fun0001_ip = 31; continue _fun0001 }
case 32:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Safari';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 33; continue _fun0001 }
case 34:
        var6 = 13;
        var2 = var11 >= var6;
case 33:
        var8 = var2;
case 31:
        if(var8) { _fun0001_ip = 35; continue _fun0001 }
case 36:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Microsoft Edge';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 37; continue _fun0001 }
case 38:
        var6 = 37;
        var2 = var11 >= var6;
case 37:
        var8 = var2;
case 35:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var2 = var2.name;
        var15 = 'Chrome';
        var7 = var15 === var2;
        if(var7) { _fun0001_ip = 39; continue _fun0001 }
case 40:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Safari';
        var7 = var2 === var6;
case 39:
        if(var7) { _fun0001_ip = 41; continue _fun0001 }
case 42:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Firefox';
        var2 = var2 === var6;
        if(!var2) { _fun0001_ip = 43; continue _fun0001 }
case 44:
        var6 = 80;
        var2 = var11 >= var6;
case 43:
        var7 = var2;
case 41:
        if(var7) { _fun0001_ip = 45; continue _fun0001 }
case 46:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Opera';
        var7 = var2 === var6;
case 45:
        if(var7) { _fun0001_ip = 47; continue _fun0001 }
case 48:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var6 = var2.name;
        var2 = 'Microsoft Edge';
        var7 = var2 === var6;
case 47:
        var2 = var4.RTCPeerConnection;
        var2 = typeof var2;
        var6 = var5 !== var2;
        if(!var6) { _fun0001_ip = 49; continue _fun0001 }
case 50:
        var2 = var4.RTCPeerConnection;
        var2 = var2.prototype;
        var2 = var2.addTransceiver;
        var16 = 'function';
        var2 = typeof var2;
        var6 = var16 === var2;
case 49:
        var2 = var4.RTCRtpSender;
        var2 = typeof var2;
        var5 = var5 !== var2;
        if(!var5) { _fun0001_ip = 51; continue _fun0001 }
case 52:
        var2 = var4.RTCRtpSender;
        var16 = var2.prototype;
        var2 = 'transform';
        var2 = var2 in var16;
        if(var2) { _fun0001_ip = 53; continue _fun0001 }
case 54:
        var4 = var4.RTCRtpSender;
        var16 = var4.prototype;
        var4 = 'createEncodedStreams';
        var2 = var4 in var16;
case 53:
        var5 = var2;
case 51:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var2 = var2.name;
        var4 = var15 === var2;
        if(!var4) { _fun0001_ip = 55; continue _fun0001 }
case 56:
        var2 = 58;
        var4 = var11 >= var2;
case 55:
        if(var4) { _fun0001_ip = 57; continue _fun0001 }
case 58:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var16 = var2.name;
        var2 = 'Safari';
        var2 = var2 === var16;
        if(!var2) { _fun0001_ip = 59; continue _fun0001 }
case 60:
        var16 = 15;
        var2 = var11 >= var16;
case 59:
        var4 = var2;
case 57:
        if(var4) { _fun0001_ip = 61; continue _fun0001 }
case 62:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var16 = var2.name;
        var2 = 'Firefox';
        var2 = var2 === var16;
        if(!var2) { _fun0001_ip = 63; continue _fun0001 }
case 64:
        var16 = 108;
        var2 = var11 >= var16;
case 63:
        var4 = var2;
case 61:
        var2 = var13[var12];
        var2 = var14.bind(var1)(var2);
        var2 = var2.name;
        var2 = var15 === var2;
        if(!var2) { _fun0001_ip = 65; continue _fun0001 }
case 66:
        var15 = 72;
        var2 = var11 >= var15;
case 65:
        if(var2) { _fun0001_ip = 67; continue _fun0001 }
case 68:
        var15 = var13[var12];
        var15 = var14.bind(var1)(var15);
        var16 = var15.name;
        var15 = 'Safari';
        var15 = var15 === var16;
        if(!var15) { _fun0001_ip = 69; continue _fun0001 }
case 70:
        var16 = 11;
        var15 = var11 >= var16;
case 69:
        var2 = var15;
case 67:
        if(var2) { _fun0001_ip = 71; continue _fun0001 }
case 72:
        var15 = var13[var12];
        var15 = var14.bind(var1)(var15);
        var16 = var15.name;
        var15 = 'Opera';
        var15 = var15 === var16;
        if(!var15) { _fun0001_ip = 73; continue _fun0001 }
case 74:
        var16 = 60;
        var15 = var11 >= var16;
case 73:
        var2 = var15;
case 71:
        if(var2) { _fun0001_ip = 75; continue _fun0001 }
case 76:
        var12 = var13[var12];
        var12 = var14.bind(var1)(var12);
        var14 = var12.name;
        var12 = 'Microsoft Edge';
        var12 = var12 === var14;
        if(!var12) { _fun0001_ip = 77; continue _fun0001 }
case 78:
        var14 = 79;
        var12 = var11 >= var14;
case 77:
        var2 = var12;
case 75:
        var12 = 1;
        var13 = var13[var12];
        var12 = require;
        var14 = var12.bind(var1)(var13);
        var13 = var14.fileFinishedImporting;
        var12 = '../discord_common/js/shared/utils/BrowserConstants.tsx';
        var12 = var13.bind(var14)(var12);
        var3['BROWSER_VERSION'] = var11;
        var3['IS_OCULUS_BROWSER'] = var10;
        var3['IS_APP_COMPATIBLE_BROWSER'] = var9;
        var3['BROWSER_SUPPORTS_VOICE'] = var8;
        var3['BROWSER_SUPPORTS_VIDEO'] = var7;
        var3['BROWSER_SUPPORTS_UNIFIED_PLAN'] = var6;
        var3['BROWSER_SUPPORTS_ENCODED_TRANSFORMS'] = var5;
        var3['BROWSER_SUPPORTS_DIAGNOSTICS'] = var4;
        var3['BROWSER_SUPPORTS_CONNECTION_STATE'] = var2;
        return var1;
    }
})();