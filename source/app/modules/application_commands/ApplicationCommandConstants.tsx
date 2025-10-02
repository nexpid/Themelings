// app/modules/application_commands/ApplicationCommandConstants.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var11 = require;
    var3 = exports;
    var10 = dependencyMap;
    var _closure1_slot0 = var11;
    var _closure1_slot1 = var10;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var5 = {};
    var4 = true;
    var5['value'] = var4;
    var4 = '__esModule';
    var4 = var6.bind(var7)(var3, var4, var5);
    var9 = 'True';
    var7 = new Array(2);
    var4 = {'name': 'True', 'displayName': 'True', 'value': 'true'};
    var7[0] = var4;
    var8 = 'False';
    var4 = {'name': 'False', 'displayName': 'False', 'value': 'false'};
    var7[1] = var4;
    var6 = {};
    var4 = '-1';
    var6['BUILT_IN'] = var4;
    var4 = '-2';
    var6['FRECENCY'] = var4;
    var12 = var1.Object;
    var5 = var12.freeze;
    var4 = new Array(0);
    var5 = var5.bind(var12)(var4);
    var12 = var1.Object;
    var4 = var12.freeze;
    var1 = new Array(0);
    var4 = var4.bind(var12)(var1);
    var1 = 2;
    var10 = var10[var1];
    var1 = undefined;
    var12 = var11.bind(var1)(var10);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/application_commands/ApplicationCommandConstants.tsx';
    var10 = var11.bind(var12)(var10);
    var3['TRUE_OPTION_NAME'] = var9;
    var3['FALSE_OPTION_NAME'] = var8;
    var3['BOOLEAN_CHOICES'] = var7;
    var3['BuiltInSectionId'] = var6;
    var6 = 10;
    var3['DISCOVERY_COMMANDS_QUERY_LIMIT_WEB'] = var6;
    var7 = 5;
    var3['DISCOVERY_COMMANDS_QUERY_LIMIT_MOBILE'] = var7;
    var3['DISCOVERY_COMMANDS_QUERY_LIMIT'] = var7;
    var3['DISCOVERY_COMMANDS_FRECENCY_LIMIT'] = var7;
    var7 = 25;
    var3['DISCOVERY_COMMAND_FRECENCY_GATEWAY_LIMIT'] = var7;
    var7 = '\x00';
    var3['SUB_COMMAND_KEY_SEPARATOR'] = var7;
    var7 = 100;
    var3['APPLICATION_COMMAND_PERMISSIONS_LIMIT'] = var7;
    var7 = 3;
    var3['MAX_SUBCOMMAND_LEVEL'] = var7;
    var3['CONTEXT_MENU_COMMANDS_QUERY_LIMIT'] = var6;
    var6 = 500;
    var3['AUTOCOMPLETE_OPTION_DEBOUNCE_TIME'] = var6;
    var3['EMPTY_COMMANDS'] = var5;
    var3['EMPTY_COMMANDS_SECTION'] = var4;
    var4 = 200;
    var3['APPLICATION_USER_INSTALL_BETA_USER_LIMIT'] = var4;
    var2 = function getValidationErrorText(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var1 = arg1;
            var3 = var1.choices;
            var2 = null;
            if(!(var2 == var3)) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var1.type;
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var6 = 1;
            var2 = var2[var6];
            var5 = undefined;
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.BOOLEAN;
            if(!(var2 !== var3)) { _fun0001_ip = 4; continue _fun0001 }
case 5:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.CHANNEL;
            if(!(var2 !== var3)) { _fun0001_ip = 6; continue _fun0001 }
case 7:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.INTEGER;
            if(!(var2 !== var3)) { _fun0001_ip = 8; continue _fun0001 }
case 9:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.NUMBER;
            if(!(var2 !== var3)) { _fun0001_ip = 10; continue _fun0001 }
case 11:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.ROLE;
            if(!(var2 !== var3)) { _fun0001_ip = 12; continue _fun0001 }
case 13:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.USER;
            if(!(var2 !== var3)) { _fun0001_ip = 14; continue _fun0001 }
case 15:
            var4 = _closure1_slot0;
            var2 = _closure1_slot1;
            var2 = var2[var6];
            var2 = var4.bind(var5)(var2);
            var2 = var2.ApplicationCommandOptionType;
            var2 = var2.MENTIONABLE;
            if(!(var2 !== var3)) { _fun0001_ip = 16; continue _fun0001 }
case 17:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.EkDo1t;
            var2 = var3.bind(var4)(var2);
            return var2;
case 16:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.I7imeX;
            var2 = var3.bind(var4)(var2);
            return var2;
case 14:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.i2r7j4;
            var2 = var3.bind(var4)(var2);
            return var2;
case 12:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.vrRQn5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 10:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.FDyk/f;
            var2 = var3.bind(var4)(var2);
            return var2;
case 8:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.d/9Rk5;
            var2 = var3.bind(var4)(var2);
            return var2;
case 6:
            var6 = _closure1_slot0;
            var7 = _closure1_slot1;
            var2 = 0;
            var3 = var7[var2];
            var3 = var6.bind(var5)(var3);
            var4 = var3.intl;
            var3 = var4.string;
            var2 = var7[var2];
            var2 = var6.bind(var5)(var2);
            var2 = var2.t;
            var2 = var2.Q0z2Gx;
            var2 = var3.bind(var4)(var2);
            return var2;
case 4:
            var4 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var2 = var6[var1];
            var2 = var4.bind(var5)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var4.bind(var5)(var1);
            var1 = var1.t;
            var1 = var1.ATIx6O;
            var1 = var2.bind(var3)(var1);
            return var1;
case 2:
            var5 = _closure1_slot0;
            var6 = _closure1_slot1;
            var1 = 0;
            var2 = var6[var1];
            var4 = undefined;
            var2 = var5.bind(var4)(var2);
            var3 = var2.intl;
            var2 = var3.string;
            var1 = var6[var1];
            var1 = var5.bind(var4)(var1);
            var1 = var1.t;
            var1 = var1.xi5aam;
            var1 = var2.bind(var3)(var1);
            return var1;
        }
    };
    var3['getValidationErrorText'] = var2;
    return var1;
})();