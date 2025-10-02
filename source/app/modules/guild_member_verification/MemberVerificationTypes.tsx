// app/modules/guild_member_verification/MemberVerificationTypes.tsx
export default (function(global, require, metroImportDefault, metroImportAll, moduleObject, exports, dependencyMap) {
    var3 = exports;
    var5 = function isTermsFormField(arg1) {
        _fun0001: for(var _fun0001_ip = 0; ; ) switch(_fun0001_ip) {
case 0:
            var2 = arg1;
            var1 = null;
            var1 = var1 != var2;
            if(!var1) { _fun0001_ip = 2; continue _fun0001 }
case 3:
            var3 = var2.field_type;
            var2 = _closure1_slot0;
            var2 = var2.TERMS;
            var1 = var3 === var2;
case 2:
            return var1;
        }
    };
    var _closure1_slot1 = var5;
    var1 = global;
    var7 = var1.Object;
    var6 = var7.defineProperty;
    var2 = {};
    var1 = true;
    var2['value'] = var1;
    var1 = '__esModule';
    var1 = var6.bind(var7)(var3, var1, var2);
    var9 = {};
    var1 = 'TERMS';
    var9['TERMS'] = var1;
    var1 = 'TEXT_INPUT';
    var9['TEXT_INPUT'] = var1;
    var1 = 'PARAGRAPH';
    var9['PARAGRAPH'] = var1;
    var1 = 'MULTIPLE_CHOICE';
    var9['MULTIPLE_CHOICE'] = var1;
    var1 = 'VERIFICATION';
    var9['VERIFICATION'] = var1;
    var _closure1_slot0 = var9;
    var8 = {};
    var1 = 'email';
    var8['EMAIL'] = var1;
    var1 = 'phone';
    var8['PHONE'] = var1;
    var7 = {};
    var1 = 'NEWEST';
    var7['TIMESTAMP_DESC'] = var1;
    var1 = 'OLDEST';
    var7['TIMESTAMP_ASC'] = var1;
    var6 = {};
    var1 = 'STARTED';
    var6['STARTED'] = var1;
    var1 = 'SUBMITTED';
    var6['SUBMITTED'] = var1;
    var1 = 'REJECTED';
    var6['REJECTED'] = var1;
    var1 = 'APPROVED';
    var6['APPROVED'] = var1;
    var2 = {};
    var1 = 'REGULAR';
    var2['REGULAR'] = var1;
    var1 = 'COMPACT';
    var2['COMPACT'] = var1;
    var10 = dependencyMap;
    var1 = 0;
    var11 = var10[var1];
    var10 = require;
    var1 = undefined;
    var12 = var10.bind(var1)(var11);
    var11 = var12.fileFinishedImporting;
    var10 = 'modules/guild_member_verification/MemberVerificationTypes.tsx';
    var10 = var11.bind(var12)(var10);
    var10 = 25;
    var3['MAX_RESULTS_PER_PAGE'] = var10;
    var10 = 4;
    var3['MAX_VISIBLE_PAGES'] = var10;
    var3['VerificationFormFieldTypes'] = var9;
    var3['UserVerificationFieldPlatforms'] = var8;
    var3['GuildJoinRequestSortOrders'] = var7;
    var3['GuildJoinRequestApplicationStatuses'] = var6;
    var3['isTermsFormField'] = var5;
    var4 = function hasNonTermsFormField(arg1) {
        _fun0002: for(var _fun0002_ip = 0; ; ) switch(_fun0002_ip) {
case 0:
            var4 = arg1;
            var1 = null;
            var1 = var1 != var4;
            if(!var1) { _fun0002_ip = 4; continue _fun0002 }
case 3:
            var3 = var4.some;
            var2 = function(arg1) {
                var3 = _closure1_slot1;
                var2 = undefined;
                var1 = arg1;
                var1 = var3.bind(var2)(var1);
                var1 = !var1;
                return var1;
            };
            var1 = var3.bind(var4)(var2);
case 4:
            return var1;
        }
    };
    var3['hasNonTermsFormField'] = var4;
    var3['VerificationFieldStyle'] = var2;
    return var1;
})();