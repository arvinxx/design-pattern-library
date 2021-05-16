export interface Pattern {
  name: string;
  what: string;
  when: string;
  why: string;
  case: [];
  englishName: string;
  /**
   * 使用条件
   */
  condition: string[];
  /**
   * 所属的设计模式分组
   */
  group: string;
  /**
   * 链接
   */
  url: string;
}
